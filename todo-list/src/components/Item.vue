<template>
    <li>
        <label>
            <input type="checkbox">
            <span></span>
        </label>
        <button class="btn btn-danger" style="display:none"></button>
    </li>
</template>
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name:'Item'
  })
</script>
<style scoped>
    li{
        list-style: none;
        height:36px;
        line-height: 36px;
        padding:0 5px;
        border-bottom:1px solid #ddd;
    }
    li label{
        float:left;
        cursor:pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right:6px;
        position:relative;
        top:-1px;
    }
    li button{
        float:right;
        display: none;
        margin-top:3px;
    }
    li:last-child{
        border-bottom: none;
    }
    li::before{
        content:initial;
    }
</style>