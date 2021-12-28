<!--  -->
<template>
  <div>
      <my-test></my-test>
  </div>
</template>

<script>
import test from './../components/test.vue';

export default {
  name: 'test',
  data () {
    return {
    }
  },
  components: {
      'my-test': test
  }
}
</script>

<style  scoped>

</style>
