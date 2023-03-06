<template>
    <li @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)" :style="{backgroundColor:bgColor,color:color}">
        <label>
            <input type="checkbox" v-model="isCompleted">
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
    </li>
</template>
<script>
  import { defineComponent ,ref ,computed} from 'vue';
  export default defineComponent({
    name:'Item',
    props:['todo','index','delTodo','updateTodo'],
    setup(props){
        let bgColor = ref("white")
        let color = ref("block")
        let isShow = ref(false)
        const mouseHandle = function(tag){
            if(tag){
                bgColor.value = "pink"
                color.value = "yellow"
                isShow.value = tag
            }else{
                bgColor.value = "white"
                color.value = "black"
                isShow.value = tag
            }
        }
        const del = function(){
            if(window.confirm('确定要删除吗')){
                props.delTodo(props.index)
            }
        }
        const isCompleted = computed({
            get(){
                return props.todo.isCompleted
            },
            set(val){
                props.updateTodo(props.todo,val)
            }
        })
        return {
            bgColor,
            color,
            isShow,
            mouseHandle,
            del,
            isCompleted
        }
    }
  })
</script>
<style scoped>
    li{
        list-style: none;
        height:36px;
        line-height: 36px;
        padding:0 5px;
        border-bottom:1px solid #ddd;
    }
    li label{
        float:left;
        cursor:pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right:6px;
        position:relative;
        top:-1px;
    }
    li button{
        float:right;
        margin-top:3px;
    }
    li:last-child{
        border-bottom: none;
    }
    li::before{
        content:initial;
    }
</style>