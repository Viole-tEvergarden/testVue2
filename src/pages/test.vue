<!--  -->
<template>
  <div>
    <div v-if="bol">
      <input v-model="text" type="text">
    </div>
    <div v-else>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  components: {},
  data() {
    return {
      text:'',
      bol: true,
    };
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
