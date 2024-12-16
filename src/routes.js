import Index from "./Pages/Index/Index";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";


let routes = [
    { path: '/', element: <Index/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: '/services', element: <Services/> },
]

export default routes