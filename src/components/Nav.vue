<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
    </div>
</template>

<style scoped>
  .active {
    font-weight: 900;
    text-align: right;
    color: black;
  }
</style>