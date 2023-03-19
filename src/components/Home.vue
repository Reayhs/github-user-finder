<script setup>
import { users } from "../store/store";
import Loading from "./Loading.vue"
const store = users();

</script>

<template>
  <div>
   <form @submit.prevent="store.getGithubProfile">
  <input placeholder="Search" type="text"  v-model="store.name" />
  <button>Fetch</button>
</form>
    <Loading  v-if="store.loading"/>
    <div v-else-if="!store.loading && !store.profile.message" class="box">
      <img :src="store.profile.avatar_url" alt="" />
      <h1>{{ store.profile.login }} ({{ store.profile.name }})</h1>
      <h3>Followers :{{ store.profile.followers }}</h3>
      <h3>Following : {{ store.profile.following }}</h3>
      <h3>Location: {{ store.profile.location }}</h3>
      <router-link to="/repos">
        <h3>Repos: {{ store.profile.public_repos }}</h3>
      </router-link>
    </div>
    <h1 v-else>User not found</h1>
  </div>
</template>

<style scoped>

.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
input {
  padding: 20px;
  margin: 4px;
  border-radius: 15px;
}

h1 {
  margin: 5px 0;
}

img {
  width: 250px;
  margin: 10px 0;
  border-radius: 15px;
}

h3 {
  cursor: pointer;
}
</style>
