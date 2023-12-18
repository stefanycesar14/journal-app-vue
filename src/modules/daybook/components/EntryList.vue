<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        v-model="term"
        class="form-control"
        placeholder="Buscar entrada"
      />
    </div>
    <div class="entry-scrollarea">
      <entry-component
        v-for="entry in entriesByTerm"
        :key="entry.id"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    EntryComponent: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryComponent.vue")
    ),
  },
  data() {
    return {
      term: "",
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntryByTerm"]),
    entriesByTerm() {
      return this.getEntryByTerm(this.term);
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
