<template>
    <div>{{gf.aihao}}</div>
    <div>{{ gf.work }}</div>
    <div @click="change">changeInfo</div>
  </template>
  
  <script>
  import useInfo from '../hook/useInfo'
  export default {
    name: 'Hook',
    setup(){
      let gf = useInfo()
      return{gf}
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
  