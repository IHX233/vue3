<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isCheckAll">
        </label>
        <span><span>已完成{{ completedCount }}</span>/全部{{ todos.length }}</span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>
<script>
  import { defineComponent ,computed} from 'vue';
  export default defineComponent({
    name:'Footer',
    props:['todos','checkAll'],
    setup(props){
        const completedCount = computed(()=>{
            return props.todos.reduce(
                    (pre,todo) => pre + (todo.isCompleted?1:0),0
                )
        })
        const isCheckAll = computed({
            get(){
             return  completedCount.value > 0 && props.todos.length ===  completedCount.value
            },
            set(val){
               props.checkAll(val) 
            }
        })
        return{
            isCheckAll,
            completedCount
        }
    }
  })
</script>
<style scoped>
.todo-footer{
    height:40px;
    line-height:40px;
    padding-left:6px;
    margin-top:5px
}
.todo-footer label{
    display:inline-block;
    margin-right:20px;
    cursor:pointer;

}
.todo-footer label input{
    position:relative;
    top:-1px;
    vertical-align: middle;
    margin-right:5px
}
.todo-footer button{
    float:right;
    margin-top:5px;
}
</style>