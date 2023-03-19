<script setup>

</script>

<template>
  <div>
    <div class="loading">
      <h1>LOADING...</h1>
    </div>
  </div>
</template>

<style scoped>
    .loading {
  position: absolute;
  animation: loading 2s infinite alternate linear;
  -webkit-animation: loading 4s infinite alternate linear;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes loading {
  0% {
    right: 40%;
    top: 35%;
  }

  100% {
    right: 40%;
    top: 15%;
  }
}
</style>
