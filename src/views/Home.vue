<template>
  <div class="home">
    <header-menu></header-menu>
    <nav-fix></nav-fix>
    <header-nav></header-nav>
    <my-content1></my-content1>
    <my-content2></my-content2>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import footer from "./../home/footer.vue";
import content1 from "./../home/content1.vue";
import content2 from "./../home/content2.vue";
import header_menu from "./../home/header_menu.vue";
import header_nav from "./../home/header_nav.vue";
import headNavFix from "./../home/headNavFix.vue";


export default {
  name: "Home",
  components: {
    "my-footer": footer,
    "my-content1": content1,
    "my-content2": content2,
    "header-menu": header_menu,
    "header-nav": header_nav,
    "nav-fix": headNavFix,
  },
};
</script>
