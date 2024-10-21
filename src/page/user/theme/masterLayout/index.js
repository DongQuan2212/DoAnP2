import {memo} from "react";
import Header from "../header";
import Footer from "../footer";
import "./style.css"
const MasterLayout = ({ children , ...props} ) =>{
    return (
    <div{...props} >
        <div><Header/></div>
        <div> {children}</div>
        <div> <Footer/></div>
    </div>
    );
};

export default memo(MasterLayout);
