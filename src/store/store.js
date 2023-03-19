import { defineStore } from "pinia";

export const users = defineStore({
  id: "users",
  state: () => ({
    loading: true,
    profile: {},
    repos: [],
    name: "",
  }),
  getters: {
    formattedName() {
      return this.name.trim().toLowerCase();
    },
  },
  actions: {
    async getGithubProfile() {
      if (this.formattedName === "") {
        alert("Kullanıcı giriniz");
      } else {
        this.loading = true;
        const data = await fetch(
          `https://api.github.com/users/${this.formattedName}`
        );
        const res = await data.json();
        this.profile = res;
        this.name = "";
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
  },
});

export default users;
