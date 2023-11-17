<template>
  <div>
    <NavBar/>
    <div class="w-full pt-28">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import NavBar from '../components/NavBar.vue'
</script>