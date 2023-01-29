<template>
 <div>女朋友：{{ girlFriend.name }}</div>
</template>
  
  <script>
    import {inject} from 'vue'
    export default{
        setup(){
            let girlFriend = inject('girlFriend')
            
            return {girlFriend}
        }
   }
    
  </script>
  <style>
  </style>
  