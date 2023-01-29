<template>
    <div>{{name}}</div>
    <div>{{workType}}</div>
    <div>{{workName}}</div>
  </template>
  
  <script>
  import {reactive, computed, toRef, toRefs} from 'vue'
  export default {
    name: 'ToRef',
    setup(){
      let person = reactive({
        name:'gf',
        work:{
            type:'it',
            name:'qd'
        }
      })
      
      return{
        person,
        workType:toRef(person.work,'type'),
        workName:toRef
        (person.work,'name'),
        ...toRefs(person)

    }
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
  