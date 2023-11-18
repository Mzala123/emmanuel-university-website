<template>
  <!-- <nav class="w-full fixed top-0 left-0 h-28  flex items-center bg-slate-50 z-50">
    <div class="container mx-auto flex gap-24 justify-between items-center px-3">
      <div>
        <router-link :to="'/'">
          <img src="../assets/EMUNI transparent logo.png" class="w-20 h-20" alt="">
        </router-link>
      </div>
      <div class="lg:hidden">
        <button
            @click="menuOpen = !menuOpen"
            class="p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="h-8 w-8">
            >
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div
          :class="[menuOpen ? 'hidden lg:flex' : 'block lg:flex']"
          class="items-center pb-4 lg:pb-0 px-3 lg:px-0 flex-1 bg-slate-50 absolute lg:relative top-28 left-0 lg:top-0  w-full shadow lg:shadow-none">
        <ul class="flex flex-col lg:flex-row py-6 lg:py-0 flex-1 items-center gap-6">
          <li
              v-for="link in home_links"
              :key="link.title"
              class="flex flex-col relative items-center justify-center"
          >
            <router-link
                :to="{name: link.name}"
                class="
                      after:bg-transparent
                     after:h-0.5 after:w-4 after:hover:bg-green-600 after:mx-auto after:content-[''] after:flex after:relative after:-bottom-2 after:rounded-sm after:hover:w-[50%] after:transition-all"
            >
              {{ link.title }}
            </router-link>
          </li>
    
   <div class="mt-28 w-screen">
       <router-view></router-view>
   </div>
        </ul>
        <div class="">
          <router-link
              class="flex justify-center px-4 py-3 text-sm text-center hover:bg-emerald-800 hover:text-white w-full items-start  border-2 border-black bg-white rounded-md hover:px-5 font-medium"
              :to="'/login'"
          >
            Portal Login
          </router-link>
        </div>
      </div>
    </div>
  </nav> -->
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {

    const menuOpen = ref(false)

    const home_links = ref([
      // {title: "Home", name: "home"},
      {title: "About Emuni", name: "about-emuni"},
      {title: "Academics", name: "academic-overview"},
      {title: "Admissions", name: "admissions-overview"},
      {title: "Campus Life", name: "campus-life"},
      {title: "News & Events", name: "news-events"},
      {title: "Directory", name: "directory"}

    ]);
    return {
      home_links,
      menuOpen
    }
  }
}

</script>