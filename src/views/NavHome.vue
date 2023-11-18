<template>
  <div>
    <NavBar/>
    <div class="w-full pt-28">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from "@/components/Footer.vue";
</script>