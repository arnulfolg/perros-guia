<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppFooter,
    AppHeader
  }
};
</script>

<style lang="scss">
:root {
  --main-app-color: #2c3e50;
  --main-heading-color: #42b983;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-app-color);
}
h3 {
  margin: 40px 0 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--main-app-color);

    &.router-link-exact-active {
      color: var(--main-heading-color);
    }
  }
}
</style>
