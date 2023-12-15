<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDaybook" class="btn btn-primary">primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">secondary</button>
    <button @click="goToDaybook" class="btn btn-success">success</button>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
goToDaybook(){
  this.$router.push('/daybook')
}
}}
</script>
