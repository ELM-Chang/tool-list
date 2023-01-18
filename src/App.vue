<template>
  <div>
    <router-view></router-view>
    <christmasAnimate></christmasAnimate>
    <spinWheel></spinWheel>
    <starbucks></starbucks>
    <cursor_trace_figure></cursor_trace_figure>
  </div>
</template>

<script setup>
  import carouselSlide from './views/carouselSlide.vue';
  import christmasAnimate from './views/christmasAnimate.vue'
  import spinWheel from './views/spinWheel.vue'
  import starbucks from './views/starbucks.vue'
  import cursor_trace_figure from './views/cursor_trace_figure.vue'
</script>

<style lang="scss">
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
</style>