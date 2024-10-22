import {memo} from "react";
import "./StyleHomePage.css"


import logo1 from './images/1663775498-best-coffee-drinks-red-eye-coffee.jpg';
import logo4 from './images/image002-3.webp';
import logo5 from './images/nathan-dumlao-6VhPY27jdps-unsplash_1600x.webp';
import logo3 from './images/roasted-coffee-beans-5831e5d35f9b58d5b1c85fa7_c0c65f148ce24be88d6724156a20651e_1024x1024.jpeg';
import logo7 from './images/banner1.jpg';
import logo8 from './images/banner2.webp';



import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
const HomePage = () => {


    return (
        <>
            <div className="body">
            <div className="container">
                <div id="slide">
                    <div className="item" style={{backgroundImage: `url(${logo4})`}}>
                        <div className="content">
                            <div className="name">Cà phê</div>
                            <div className="des">Cà phê – điểm tựa của những giấc mơ</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${logo1})`}}>
                        <div className="content">
                            <div className="name">Cà phê</div>
                            <div className="des">Năng lượng của ngày mới nằm trong một ly cà phê</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${logo5})`}}>
                        <div className="content">
                            <div className="name">Cà phê</div>
                            <div className="des">Nơi chia sẻ và lưu giữ những kỷ niệm đáng nhớ</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${logo8})`}}>
                        <div className="content">
                            <div className="name">Cà phê </div>
                            <div className="des">Cà phê – hương vị cuộc sống</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${logo7})`}}>
                        <div className="content">
                            <div className="name">Cà phê</div>
                            <div className="des">Cà phê – tinh túy của đất trời</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${logo3})`}}>
                        <div className="content">
                            <div className="name">Hạt cà phê</div>
                            <div className="des">Mỗi hạt cà phê là một câu chuyện về đam mê</div>
                            <button>See more</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button id="prev" onClick={function () {
                        let lists = document.querySelectorAll(".item");
                        document.getElementById("slide").prepend(lists[lists.length - 1]);
                    }}><GrFormPrevious/>
                    </button>
                    <button id="next" onClick={function () {
                        let lists = document.querySelectorAll(".item");
                        document.getElementById("slide").appendChild(lists[0]);}}><MdNavigateNext/></button>
                </div>
            </div>
            </div>

        </>

    )
};

export default memo(HomePage);
