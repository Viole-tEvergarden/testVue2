<template>
  <div id="app">
    <div></div>
    <router-view/>
  </div>
</template>

<script>
// 我如何在此处获取到 count ?
export default {
  name: 'App',
  data(){
    return{
      count:0
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
