import {memo} from "react";
import "./style.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = ( ) =>{
    return (
        <>
        <div>
            <section id="header">
                <a href="#"><img src="images/coffee-cup (2).png" className="logo" alt=""/></a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="/home">Home</a></li>
                        <li><a href="/menu">Shop</a></li>
                        <li><a href="/blog">Cảm hứng</a></li>
                        <li><a href="">Contact</a></li>
                        <li id="lg-bag"><a href=""><i><FaCartShopping /></i></a></li>
                    </ul>
                </div>
            </section>
        </div>

</>
)
};
export default memo(Header);
