import {ROUTERS} from "./utils/router";
import HomePage from "./page/user/HomePage";
import {Route, Routes} from "react-router-dom";
import MasterLayout from "./page/user/theme/masterLayout";
import ProfilePage from "./page/user/ProfilePage";
import Blog from "./page/user/Blog";
import Menu from "./page/user/Menu";
import Contact from "./page/user/Contact";
const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTERS.USER.HOMEUSER,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        },
        {
            path: ROUTERS.USER.BLOG,
            component: <Blog/>
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: <Contact/>
        },
        {
            path: ROUTERS.USER.MENU,
            component: <Menu/>
        }
    ]
    return(
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key ={key} path={ item.path} element={item.component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    )
}


const RouterCustom = () =>{
    return renderUserRouter();
};
export default RouterCustom;
