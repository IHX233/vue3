<template>
    <div>{{title}}</div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{job.type}}</div>
    <div>{{job.salary}}</div>
    <div @click="changeInfo">click</div>
    <div @click="hello">hello</div>
  </template>
  
  <script>
  import {reactive, ref} from 'vue'
  export default {
    name: 'Demo',
    props:['title'],
    emits:['hello'],
    setup(props,context){
      let name = ref('ihx')
      let age = ref(18)
      let job = reactive({
        type:'前端工程师',
        salary:'3000'
      })
      function changeInfo(){
        name.value = 'gf'
        age.value = 24
        job.type = "ui"
        job.salary = '4000'
      }
      function hello(){
        context.emit('hello','666')
      }
      return{name,age,job,changeInfo,hello}
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  