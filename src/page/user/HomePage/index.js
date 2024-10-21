import {memo} from "react";
import { EffectCoverflow } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "./style.css"
import logo1 from './images/img1.jpg';
import logo2 from './images/img2.jpg';
import logo3 from './images/img3.jpg';
import product1 from './images/product1.webp';
import product2 from './images/product2.jpg';
import product3 from './images/product8.jpg';
const HomePage = () => {
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


            <div>
                <section id="product1" className="section-p1">
                    <h2>
                        Sản Phẩm Nổi Bật
                    </h2>
                    <p>Best Seller</p>
                    <div className="pro-container">
                        <div className="pro" onClick="window.location.href='sproduct.html'">
                            <img src={product1} alt=""/>
                            <div className="des">
                                <h5>Bạc xỉu</h5>
                                <h4>30.000 VNĐ</h4>
                            </div>
                            <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                        </div>
                        <div className="pro">
                            <img src={product2} alt=""/>
                            <div className="des">
                                <h5>Bạc xỉu</h5>

                                <h4>30.000 VNĐ</h4>
                            </div>
                            <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                        </div>
                        <div className="pro">
                            <img src={product3} alt=""/>
                            <div className="des">
                                <h5>Bạc xỉu</h5>

                                <h4>30.000 VNĐ</h4>
                            </div>
                            <a href="#"><i className="fa-solid fa-cart-plus cart"></i></a>
                        </div>
                    </div>
                </section>
            </div>


            <div id="saleoff">
                <div className="box-left">
                    <h1>
                        <span>GIẢM GIÁ LÊN ĐẾN</span>

                        <span>45%</span>
                    </h1>
                </div>
                <div className="box-right">
                </div>
            </div>


            <div class="product">
                <Swiper
                    effect={'coverflow'}

                    navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true}}
                    pagination={{el: '.swiper-pagination', clickable: true}}
                    loop={true}
                    slidesPerView={3}
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow ]}
                >
                    <SwiperSlide>
                        <li className="pro ">
                            <img src={product3} className="pro-img"/>
                            <h3 className="name">Cà phê muối</h3>
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
                        <li className="pro e">
                            <img src={product2} className="pro-img"/>
                            <h3 className="name">Cà phê muối</h3>
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
                            <img src={product1} className="pro-img"/>
                            <h3 className="name">Cà phê muối</h3>
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
                            <img src={product3} className="pro-img"/>
                            <h3 className="name">Cà phê muối</h3>
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


                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </Swiper>
            </div>
        </>
    )

};

export default memo(HomePage);
