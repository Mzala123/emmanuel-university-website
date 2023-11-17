<template>

   <nav class="w-full">
      <div class="h-28 bg-slate-50 shadow-sm fixed w-full left-0 top-0 z-50">
           <div class="container h-full relative mx-auto flex flex-row items-center  justify-between">
              <div class="items-center mx-auto flex-shrink-0">
               <router-link :to="'/'" class="flex items-center">
                  <img src="../assets/EMUNI transparent logo.png" class="w-20 h-20" alt="">
               </router-link>

              </div>
             
              <div class="flex flex-col justify-between absolute left-0 top-28 bg-slate-50 w-full">
                  <div class="flex-1 mx-auto flex flex-col gap-6  items-start py-4 ml-6">
                     <router-link
                     v-for="link in home_links"
                     :key="link.title"
                     v-bind:to="{name: link.name}"
                     class="relative text-xl px-4 bg-transparent text-gray-800 hover:text-green-600 flex flex-row items-start
                     focus:outline-none focus:shadow-outline 
                     after:bg-transparent
                     after:h-0.5 after:w-4 after:hover:bg-green-600 after:content-[''] after:inline-flex after:absolute after:-bottom-2 after:rounded-sm after:left-[40%]  after:hover:left-[25%] after:hover:w-[50%] after:transition-all"
                     >
                           {{ link.title }}
                        </router-link>
                  </div>


                  <div class="flex-1 pb-4 px-8">
                     <router-link
                        class="px-4 py-3 text-sm text-center hover:bg-emerald-800 hover:text-white w-full flex items-start  border-2 border-black bg-white rounded-md hover:px-5 font-medium"
                        :to="'/login'"
                     >
                        Portal Login
                     </router-link>
                  </div>
            </div>
           </div>
      </div>
   </nav>
    
   <div class="mt-28 w-screen">
       <router-view></router-view>
   </div>

</template>

<script>
import {ref} from 'vue';

export default{
   setup(){

      const showUnderline = ref(null)

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
         home_links, showUnderline

      }
   }
}

</script>