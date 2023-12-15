<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">12</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2023, Martes</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum culpa eos obcaecati officiis sequi libero quod,
      4ratione, facilis quam, aperiam adipisci id! Nulla, quasi nam unde molestiae sequi mollitia veritatis.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.entry-description {
  border-bottom: 1px solid #2c3e50;
&:hover{
  background-color: lighten($color: grey, $amount: 45%)
}
}

</style>