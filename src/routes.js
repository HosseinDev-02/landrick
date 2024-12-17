import Index from "./Pages/Index/Index";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import History from "./Pages/History/History";
import Team from "./Pages/Team/Team";


let routes = [
    { path: '/', element: <Index/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: '/services', element: <Services/> },
    { path: '/history', element: <History/> },
    { path: '/team', element: <Team/> },
]

export default routes