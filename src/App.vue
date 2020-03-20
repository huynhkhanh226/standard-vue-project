<template>
  <div id="app">
    <base-layout>
      <template v-slot:header>
        <NavBar />
      </template>
      <template v-slot:body>
        <Content />
      </template>
      <template v-slot:footer>
        <Footer />
      </template>
    </base-layout>
  </div>
</template>

<style lang="scss">

</style>

<script>
import BaseLayout from "./components/layout/BaseLayout.vue";
import NavBar from "./components/layout/NavBar.vue";
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  components: {
    BaseLayout,
    NavBar,
    Content,
    Footer
  }
};
</script>
