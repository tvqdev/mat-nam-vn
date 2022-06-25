import Home from "~/pages/Home/Home";
import Community from "~/pages/Community/Community";

// 
const publicRoutes = [
     { path: '/', component: Home },
     { path: '/community', component: Community }

     // layout: null : mất layout mặt định
     // { path: '/community', component: Community, layout: null }
     // { path: '/community', component: Community, layout: HeaderOnly }



]


// 
const privateRoutes = [

]

export { publicRoutes, privateRoutes }