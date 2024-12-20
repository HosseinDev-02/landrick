import Index from "./Pages/Index/Index";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import History from "./Pages/History/History";
import Team from "./Pages/Team/Team";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";


let routes = [
    { path: '/', element: <Index/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: '/services', element: <Services/> },
    { path: '/history', element: <History/> },
    { path: '/team', element: <Team/> },
    { path: '/pricing', element: <Pricing/> },
    { path: '/blogs', element: <Blogs/> },
    { path: '/blog-detail/:shortName', element: <BlogDetail/> },
]

export default routes