<template>
    <div><input type="text" v-model="person.firstName"></div>
    <div><input type="text" v-model="person.lastName"></div>
    <div><input type="text" v-model="person.fullName"></div>
  </template>
  
  <script>
  import {reactive, computed} from 'vue'
  export default {
    name: 'Name',
    setup(){
      let person = reactive({
        firstName:'张',
        lastName:'三'
      })
      person.fullName = computed({
        get(){
            return person.firstName + '-' +person.lastName
        },
        set(value){
            let nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
      })
      return{person}
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
  