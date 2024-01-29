<template>
  <button class="btn btn-primary"
  @click="$emit('on:click')">
    <i class="fa  fa-plus"
    :class="icon"></i>
   
  </button>
</template>

<script>
export default{
  props:{
    icon:{
      default:'fa-2x',
      type:String
    }
  },
}
</script>

<style lang="scss" scoped>
button{
  position:fixed;
  bottom:20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
cursor: pointer;
  

}
i{
 font-size: 35px;
}
</style>