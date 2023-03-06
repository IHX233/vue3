<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo"></Header>
      <List :todos="todos" :del-todo="delTodo" :update-todo="updateTodo"></List>
      <Footer :todos="todos" :check-all="checkAll"></Footer>
    </div>
  </div>
</template>
<script>
  import { defineComponent,reactive ,toRefs} from 'vue';
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  export default defineComponent({
    name:'App',
    components:{Header,List,Footer},
    setup(){
      const state = reactive({
        todos:[
          {id:1,title:'eat',isCompleted:false},
          {id:2,title:'sleep',isCompleted:false},
          {id:3,title:'play',isCompleted:false},
        ]
      })
      const addTodo = (todo)=>{
        state.todos.unshift(todo)
      }
      const delTodo = (index)=>{
        state.todos.splice(index,1)
      }
      const updateTodo = (todo,val)=>{
        todo.isCompleted = val
      }
      const checkAll = (val)=>{
        state.todos.forEach(item=>{
          item.isCompleted = val
        })
      }
      return {
        ...toRefs(state),
        addTodo,
        delTodo,
        updateTodo,
        checkAll
      }
    }
  })
</script>
<style scoped>
  .todo-container{
    width:600px;
    margin:0 auto;
  }
  .todo-container .todo-wrap{
    padding:10px;
    border:1px solid #ddd;
    border-radius: 5px;
  }
</style>