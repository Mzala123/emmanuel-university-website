import { createRouter, createWebHistory } from 'vue-router'
import NavHome from  '../views/NavHome.vue'
import AboutView from '../views/AboutView.vue'
import AcademicsOverview  from '../views/AcademicsOverview.vue'
import AdmissionsOverview from '../views/AdmissionsOverview.vue'
import CampusLife from '../views/CampusLife.vue'
import DirectoryView from '../views/DirectoryView.vue'
import NewsEvents from '../views/NewsEvents.vue'
import HomeView  from '../views/HomeView.vue'


const routes = [
    {
        path:'/',
        name:NavHome,
        component: NavHome,
         children:[
          {
            path:'/',
            name:'home',
            component: HomeView
          },
           {
            path:'/about_emuni',
            name:'about-emuni',
            component: AboutView
           },
           {
            path:'/academic_overview',
            name:'academic-overview',
            component: AcademicsOverview
           },
           {
            path:'/admissions_overview',
            name:'admissions-overview',
            component: AdmissionsOverview
           },

           {
            path:'/campus_life',
            name:'campus-life',
            component: CampusLife
           },

           {
            path:'/directory',
            name:'directory',
            component: DirectoryView
           },

           {
            path:'/news_events',
            name:'news-events',
            component: NewsEvents
           },


         ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
    
  })
  
  export default router
  
