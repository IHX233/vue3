<template>
  <demo :title="'vue3'" @hello="hello"></demo>
  <computed></computed>
  <hook></hook>
  <to-ref></to-ref>
</template>

<script>
import Demo from './components/Demo'
import Computed from './components/Computed'
import Hook from './components/Hook'
import ToRef from './components/ToRef.vue'
export default {
  name: 'App',
  components:{Demo,Computed,Hook,ToRef},
  setup(){
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
