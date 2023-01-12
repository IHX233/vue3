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
      let {gf,change} = useInfo()
      return{gf,change}
    }
  }
  </script>
  
  <style>
  </style>
  