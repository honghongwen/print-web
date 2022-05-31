<template>
  <div class="wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
  </div>
</template>

<script>
import AppHeader from "./components/header";
import AppSidebar from "./components/sidebar";

export default {
  name: "layout",
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>