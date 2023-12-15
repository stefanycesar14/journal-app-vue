<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x fa-plus"></i>
   {{icon}}
  </button>
</template>

<script>
export default{
  props:{
    icon:{
      default:'Borrar',
      type:String
    }
  }
}
</script>

<style lang="scss" scoped>
button{
  position:fixed;
  bottom:20px;
  right: 20px;
  widows: 80px;
  height: 80px;
  

}
</style>