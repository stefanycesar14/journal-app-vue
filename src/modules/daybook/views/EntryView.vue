<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">12</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2023, Martes</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">Borrar</button>
      <button class="btn btn-primary">Subir foto</button>
    </div>
     
     
  </div>
  <hr/>
  <div class="d-flex flex-column px-3 h-75">
<textarea placeholder="¿Que sucedió hoy?"></textarea>

  </div>
  <fab-button icon="Guardar"/>
  <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" alt="paisaje" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components:{
  FabButton: defineAsyncComponent(()=>import('@/modules/daybook/components/FabButton.vue'))
}
};
</script>

<style lang="scss" scoped>
textarea{
  font-size:20px;
  border:none;
  height:100%;



  &:focus{
outline:none;
  }
 
}
 img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>
