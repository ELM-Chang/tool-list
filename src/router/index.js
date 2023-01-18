import { createRouter, createWebHashHistory } from 'vue-router'

//名稱要注意 如果取名為routers 會報錯
const routes = [
    { path: '/', name: 'Home', component:()=>import("../views/carouselSlide.vue") },
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router