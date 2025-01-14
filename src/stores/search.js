// stores/search.js
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchTerm: "", // Search input value
  }),
  actions: {
    setSearchTerm(term) {
      this.searchTerm = term;
    },
  },
});
