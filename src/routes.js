import Index from "./Pages/Index/Index";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import History from "./Pages/History/History";
import Team from "./Pages/Team/Team";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import ContactUs from "./Pages/ContactUs/ContactUs";
import UserPanel from "./Pages/UserPanel/UserPanel";
import Profile from "./Pages/UserPanel/Profile/Profile";
import Members from "./Pages/UserPanel/Members/Members";
import UserProjects from "./Pages/UserPanel/UserProjects/UserProjects";
import UserMessages from "./Pages/UserPanel/UserMessages/UserMessages";
import UserTransactions from "./Pages/UserPanel/UserTransactions/UserTransactions";
import UserPanelSetting from "./Pages/UserPanel/UserPanelSetting/UserPanelSetting";
import Login from "./Pages/Login/Login";


let routes = [
    { path: '/', element: <Index/> },
    { path: '/aboutus', element: <AboutUs/> },
    { path: '/services', element: <Services/> },
    { path: '/history', element: <History/> },
    { path: '/team', element: <Team/> },
    { path: '/pricing', element: <Pricing/> },
    { path: '/blogs', element: <Blogs/> },
    { path: '/blog-detail/:shortName', element: <BlogDetail/> },
    { path: '/contact-us', element: <ContactUs/> },
    { path: '/user-panel', element: <UserPanel/>,
        children: [
            {path: 'profile', element: <Profile/>},
            {path: 'members', element: <Members/>},
            {path: 'projects', element: <UserProjects/>},
            {path: 'messages', element: <UserMessages/>},
            {path: 'transactions', element: <UserTransactions/>},
            {path: 'setting', element: <UserPanelSetting/>},
        ]
    },
    { path: '/login', element: <Login/> }
]

export default routes