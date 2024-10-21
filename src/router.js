import {ROUTERS} from "./utils/router";
import HomePage from "./page/user/HomePage";
import {Route, Routes} from "react-router-dom";
import MasterLayout from "./page/user/theme/masterLayout";
import ProfilePage from "./page/user/ProfilePage";
import Blog from "./page/user/Blog";
const renderUserRouter = () =>{
    const userRouters = [
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
