import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "regislopes",
    };
  },

  actions: {
    visitTwitterProfile() {
      window.open(`http://twitter.com/${this.username}`);
    },
  },
});
