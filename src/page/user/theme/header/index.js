import {memo} from "react";
import "./style.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import profile from './images/profile.png'
const Header = ( ) =>{

    const switchTheme = (e) =>{
        if(e.target.checked){
                document.querySelector('body').setAttribute('data-theme','dark')
            }
         else{
                document.querySelector('body').setAttribute('data-theme','light')
            }
    };

    return (
        <>
        <div>
            <section id="header">
                <a className="logo" href="">Coffee.js</a>
                <div>
                    <ul id="navbar">
                        <li><a  href="/home">Home</a></li>
                        <li><a href="/menu">Shop</a></li>
                        <li><a href="/blog">Cảm hứng</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a>Đăng nhập</a></li>
                        <div className="dark-mode">
                            <label className="switch">
                                <input type="checkbox" onChange={switchTheme}/>
                                <span className="slider round"></span>
                            </label>

                        </div>
                    </ul>
                </div>
            </section>
        </div>

        </>
    )
};
export default memo(Header);
