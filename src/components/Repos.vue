<script setup>
import { ref, computed } from "vue";
import { users } from "../store/store";
import Loading from "./Loading.vue";

const store = users();

const url = ref(`https://api.github.com/users/${store.profile.login}/repos`);
console.log(url.value);

const searchTerm = ref("");

(async () => {
  store.loading = true;
  const data = await fetch(url.value);
  const res = await data.json();
  store.repos = res;

  setTimeout(() => {
    store.loading = false;
  }, 1000);
  console.log(store.repos);
})();

const filteredRepos = computed(() => {
  return store.repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

</script>

<template>
  <div>
    <router-link to="/">
      <button>Home</button>
    </router-link>

    <div class="input">
      <input type="text" v-model="searchTerm" placeholder="Search" />
    </div>

    <div class="wrapper">
      <Loading v-if="store.loading" />
      <div
        v-else-if="!store.loading && store.repos.length > 0"
        class="box"
        v-for="repo in filteredRepos"
      >
        <a :href="repo.svn_url" target="_blank">{{ repo.name }}</a>
        <p>Star: {{ repo.watchers }}</p>
        <button v-for="topic in repo.topics">{{ topic }}</button>
      </div>

      <h1 v-else>Repos not found</h1>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 5px;
  font-size: 12px;
  margin: 5px 5px 5px 0px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.box {
  width: 500px;
  padding: 40px;
  border: 2px white solid;
  height: 100px;
}

.input{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
input {
  padding: 15px;
  border-radius: 20px;
}
</style>
