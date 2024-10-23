import {memo} from "react";
import {EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "./StyleMenu.css"


import logo1 from './images/img1.jpg';
import logo2 from './images/img2.jpg';
import logo3 from './images/img3.jpg';
import Americano from './images/Americano Đá.png'
import BoArabica from './images/Bơ Arabica.png'
import Bacxiu from './images/Bạc Sỉu.png'
import Cafesua from './images/cafe_sua_da.png'
import Capuchino from './images/Cappuccino Đá.png'
import Caramel from './images/Caramel Macchiato Đá.png'
import Cafeden from './images/Cà Phê Đen Đá.png'
import teayuzu from './images/tea-yuzu.webp'
import suada from './images/The Coffee House Sữa Đá.png'
import traxanh from './images/Tra_xanh_espresso_marble.jpg'
import trasuaolong from './images/trà sữa olong.webp'
import travai from './images/trà vãi.webp'
import traxanhduongden from './images/trà xanh đường đen.webp'
import tradao from './images/Trà đào.webp'



const MenuPage = () => {
    return (
        <>

            <div className="hero">
                <div className="box-left">
                    <h1>
                        <span> ĐỒ UỐNG</span>
                        <br/>
                        <span>THƯỢNG HẠNG</span>
                    </h1>
                    <p>Tự hào sinh ra từ đất Việt. Nơi cao nào ở vóc dáng. Mà là ở góc nhìn rộng mở
                        Chuyên cung cấp các đồ uống đảm bảo ngon và hợp vệ sinh đến người dùng
                    </p>
                    <button>
                        Mua ngay
                    </button>
                </div>
                <div className="box-right">

                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo1}/>

                </div>
            </div>
            <section id="product1" className="section-p1">
                <h2>
                    Doanh mục sản phẩm
                </h2>
                <p>Product</p>
                <div className="pro-container">
                    <div className="pro" onClick="window.location.href='sproduct.html'">
                        <img src={Bacxiu} alt=""/>
                        <div className="des">
                            <h5>Bạc xỉu</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>24.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={Americano} alt=""/>
                        <div className="des">
                            <h5>Americano Đá</h5>
                            <h4>18.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={BoArabica} alt=""/>
                        <div className="des">
                            <h5>Bơ Arabica</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>33.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={Cafeden} alt=""/>
                        <div className="des">
                            <h5>Cafe Đen</h5>
                            <h4>18.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={Cafesua} alt=""/>
                        <div className="des">
                            <h5>Cafe sữa</h5>
                            <h4>22.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={Capuchino} alt=""/>
                        <div className="des">
                            <h5>Capuchino</h5>
                            <h4>28.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={Caramel} alt=""/>
                        <div className="des">
                            <h5>Caramel</h5>
                            <h4>28.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={suada} alt=""/>
                        <div className="des">
                            <h5>Sữa đá</h5>
                            <h4>22.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src={traxanh} alt=""/>
                        <div className="des">
                            <h5>Trà xanh espresso</h5>
                            <h4>35.000 VNĐ</h4>
                        </div>
                        <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                    </div>


                </div>
            </section>


            <div className="product">
                <h2>
                    Sản Phẩm Nổi Bật
                </h2>
                <p>Best Seller</p>
                <Swiper


                    navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true}}
                    pagination={{el: '.swiper-pagination', clickable: true}}
                    loop={true}
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                >
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={teayuzu} className="pro-img"/>
                            <h3 className="name">Trà hạt lựu</h3>
                            <i className="feedback">24.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="pro e">
                            <img src={trasuaolong} className="pro-img"/>
                            <h3 className="name">Trà sữa olong</h3>

                            <i className="feedback">28.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={travai} className="pro-img"/>
                            <h3 className="name">Trà vãi</h3>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <i className="feedback">24.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={Cafesua} className="pro-img"/>
                            <h3 className="name">Cà phê sữa</h3>

                            <i className="feedback">22.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={traxanhduongden} className="pro-img"/>
                            <h3 className="name">Trà xanh đường đen</h3>

                            <i className="feedback">32.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={tradao} className="pro-img"/>
                            <h3 className="name">Tr đaào</h3>
                            <i className="feedback">28.000 VNĐ</i>
                        </li>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </>

    )
};
export default memo(MenuPage);
