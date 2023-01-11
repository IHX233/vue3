<template>
  <demo :title="'vue3'" @hello="hello"></demo>
  <computed></computed>
  <hook></hook>
</template>

<script>
import Demo from './components/Demo'
import Computed from './components/Computed'
import Hook from './components/Hook'
export default {
  name: 'App',
  components:{Demo,Computed,Hook},
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
