<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title">
    </div>
</template>
<script>
  import { defineComponent,ref } from 'vue';
  export default defineComponent({
    name:'Header',
    setup(props,context){
        let title = ref('')
        
        let add = ()=>{
            if(!title.value.trim()) return
            const todo = {
                title:title.value,
                id:Date.now(),
                isCompleted:false
            }
            context.emit('addTodo',todo)
            title.value = ''
        }
        return{
            title,
            add
        }
       
    }
  })
</script>
<style scoped>
    .todo-header input{
        width:560px;
        height:28px;
        font-size:14px;
        border:1px solid #ccc;
        border-radius: 4px;
        padding:4px 7px;
    }
    .todo-header input:focus{
        outline:none;
        border-color:rgba(82,168,236,.8);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);
    }
</style>