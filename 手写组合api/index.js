const reactiveHandle = {
    get(target,prop){
        if(prop === '_is_reactive') return true
        const result = Reflect.get(target,prop)
        console.log('拦截了读取数据',prop,result)
        return result
    },
    set(target,prop,value){
        const result = Reflect.set(target,prop,value)
        console.log('拦截了修改数据或者是添加属性',prop,value)
    },
    deleteProperty(target,prop){
        const result = Reflect.defineProperty(target,prop)
        console.log('拦截了删除属性',prop,target)
    }
}
function shallowReactive(target){
    if(target&&typeof target == 'object'){
        return new Proxy(target,reactiveHandle)
    }
    return target
}
function reactive(target){
    if(target&&typeof target == 'object'){
        if(Array.isArray(target)){
            target.forEach((item,index)=>{
                target[index] = reactive(item)
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target,reactiveHandle)
    }
    return target
}

// ====================================================================

const readonlyHandle = {
    get(target,prop){
        if (prop === '_is_readonly') return true
        const result = Reflect.get(target,prop)
        console.log('拦截了读取数据',prop,result)
        return result
    },
    set(target,prop,value){
        console.log('只读属性不能修改')
    },
    deleteProperty(target,prop){
        console.log('只读属性不能删除')
    }
}
function shallowReadonly(target){
    if(target&&typeof target == 'object'){
        return new Proxy(target,readonlyHandle)
    }
    return target
}
function readonly(target){
    if(target&&typeof target == 'object'){
        if(Array.isArray(target)){
            target.forEach((item,index)=>{
                target[index] = readonly(item)
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target,readonlyHandle)
    }
    return target
}

// ====================================================================

function shallowRef(target){
    return {
        _is_ref:true,
        _value:target,
        get value(){
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val){
            console.log("劫持到了修改数据",val)
            this._value = val
        }
    }
}
function ref(target){
    return {
        _is_ref:true,
        _value:reactive(target),
        get value(){
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val){
            console.log("劫持到了修改数据",val)
            this._value = val
        }
    }
}

// ====================================================================

function isRef(obj){
    return obj && obj._is_ref
}
function isReadonly(obj){
    return obj && obj._is_readonly
}
function isReactive(obj){
    return obj && obj._is_reactive
}
function isProxy(obj){
    return isRef(obj) || isReactive(obj)
}
