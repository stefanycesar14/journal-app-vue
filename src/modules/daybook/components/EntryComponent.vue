<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{day}}</span>
      <span class="mx-1 fs-5">{{month}}</span>
      <span class="mx-2 fw-light">{{yearDay}}</span>
    </div>
    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130)
       
       :this. entry.text;
    },
    day(){
      const date = new Date(this.entry.date)
      
      return date.getDate()
    },

    month(){
       const month = new Date(this.entry.date)
       return months[month.getMonth()]
    },
    yearDay(){
       const year = new Date(this.entry.date)
       return `${year.getFullYear()}, ${days[year.getDay()]} `
    }
  },
};
</script>

<style lang="scss" scope>
.entry-description {
  border-bottom: 1px solid #2c3e50;
  &:hover {
    background-color: lighten($color: grey, $amount: 45%);
  }
}
</style>
