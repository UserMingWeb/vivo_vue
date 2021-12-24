<template>
  <div class="about">
    <header-menu></header-menu>
    <nav-fix></nav-fix>
    <my-content2></my-content2>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import footer from "./../home/jsu_footer.vue";
import header_menu from "./../home/header_menu.vue";
import headNavFix from "./../home/headNavFix.vue";
import content2 from "./../home/content2.vue";

export default {
  name: "About",
  components: {
    "my-footer": footer,
    "header-menu": header_menu,
    "nav-fix": headNavFix,
    "my-content2": content2
  },
};
</script>
