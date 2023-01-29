<template>
  <demo :title="'vue3'" @hello="hello"></demo>
  <computed></computed>
  <hook></hook>
  <to-ref></to-ref>
  <son></son>
</template>

<script>
import {provide,reactive} from 'vue'
import Demo from './components/Demo'
import Computed from './components/Computed'
import Hook from './components/Hook'
import ToRef from './components/ToRef.vue'
import Son from './components/Son.vue'
export default {
  name: 'App',
  components:{Demo,Computed,Hook,ToRef,Son},
  setup(){
    let girlFriend = reactive({name:'undefined',sex:'male'})
    provide('girlFriend',girlFriend)
    function hello(value){
      alert(value)
    }
    return {hello}
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
