<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div v-if="entry">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ year }}</span>
    </div>
    <div>
      <input
        @change="onSelectedImage"
        ref="imageSelector"
        v-show="false"
        type="file"
        accept="image/jpeg, image/png,"
      />
      <button
        v-if="entry.id"
        @click="onDeleteEntry"
        class="btn btn-danger mx-2"
      >
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button @click="onSelectImage" class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div v-if="entry" class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedió hoy?" v-model="entry.text"></textarea>
  </div>
  <fab-button @on:click="saveEntry" icon="fa-save" />
   <img
   v-if="entry.picture &&localImage == null"
    :src="entry.picture"
    alt="paisaje"
    class="img-thumbnail"
  />
  <img
    v-if="localImage"
    :src="localImage"
    alt="paisaje"
    class="img-thumbnail"
  />
</template>

<script>
import Swal from "sweetalert2";
import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear";
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
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
      localImage: null,
      file: null,
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
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
    loadEntries() {
      let entry;
      if (this.id == "new") {
        entry = {
          date: new Date().getTime(),
          text: "",
          picture: "",
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      const picture = await uploadImage(this.file)
      this.entry.picture = picture
      if (this.entry.id) {
        this.updateEntry(this.entry);
      } else {
        const newId = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { id: newId } });
      }
      this.file=null
      Swal.fire("Guardado", "Entrada Registrada con exito", "success");
      
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Estas Seguro?",
        text: "Una vez borrado, no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "entry", params: { id: "no-entry" } });
        Swal.fire("Eliminado", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
    },
  },
  created() {
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
