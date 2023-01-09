<template>
  <demo :title="'vue3'" @hello="hello"></demo>
  <computed></computed>
</template>

<script>
import Demo from './components/Demo'
import Computed from './components/Computed'
export default {
  name: 'App',
  components:{Demo,Computed},
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
