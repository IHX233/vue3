<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <div @click="changeInfo">click</div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('ihx')
    let age = ref(18)
    function changeInfo(){
      name.value = 'gf'
      age.value = 24
    }
    return{name,age,changeInfo}
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
