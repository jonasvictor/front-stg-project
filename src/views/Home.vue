<template>
  <div class="home text-center">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HomeComponent msg="CT SYSTEM" />
  </div>
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
  },
};
</script>
