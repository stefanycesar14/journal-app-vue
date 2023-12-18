<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div v-if="entry">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ year }}</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">Borrar</button>
      <button class="btn btn-primary">Subir foto</button>
    </div>
  </div>
  <hr />
  <div v-if="entry" class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedió hoy?" v-model="entry.text"></textarea>
  </div>
  <fab-button icon="fa-save" />
  <img
    src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
    alt="paisaje"
    class="img-thumbnail"
  />
</template>

<script>
import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear";
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("@/modules/daybook/components/FabButton.vue")
    ),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    year() {
      const { year } = getDayMonthYear(this.entry.date);
      return year;
    },
  },

  methods: {
    loadEntries() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry" });
      this.entry = entry;
    },
  },
  created() {
    console.log(this.id);
    this.loadEntries();
  },
  watch: {
    id() {
      this.loadEntries();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
