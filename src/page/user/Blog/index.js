import {memo} from "react";
import banner1 from './images/_KV-marvel-2.webp';
import banner2 from './images/_creme-brulee.webp';
import banner3 from './images/_creamy.webp';
import banner4 from './images/hieu_ed.webp';
import banner5 from './images/thinh.webp';
import "./style.css"
const Blog= ( ) => {
    return (
        <>
            <section >
            <section id="blog">
                <img src={banner1} />
            </section>

            <section id="blog-banner">
                <div className="title">
            <span>Được kết hợp từ Cloud (đám mây) và cofFee (cà phê), CloudFee gợi mở
                <br/>
                về một thế hệ cà phê mới, êm mượt như mây.</span>
                </div>
                <div className="banner">
                    <div className="inf">
                        <h2>CLOuDFEE</h2>
                        <h1>Creme Brulee</h1>
                        <span>Thức uống "chiều chuộng bản thân" bậc nhất cho những ai thích vị ngọt ngào hay muốn thưởng thức sự
                    kết
                    hợp độc đáo giữa món tráng miệng và thức uống.</span>
                        <br/>
                        <a href="/shop">Êm mượt như mây, Chill là ghiền ngay!</a>
                    </div>
                    <div className="img">
                        <img src={banner2}/>
                    </div>
                </div>
                <div className="banner1">
                    <div className="img">
                        <img src={banner3}/>
                    </div>
                    <div className="inf">
                        <h2>CLOuDFEE</h2>
                        <h1>Creamy</h1>
                        <span>Thức uống "đánh thức" năng lượng ngày mới hợp cho những ai mới bước
                    <br/>
                    vào thế giới cà phê hoặc
                    ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.</span>
                        <br/>
                        <a href="shop.html">Êm mượt như mây, Chill là ghiền ngay!</a>
                    </div>
                </div>
                <div className="blog-h1">
                    <div>
                        <h1>CÀ PHÊ CÓ DÀNH CHO TẤT CẢ <br/>MỌI NGƯỜI?</h1>
                    </div>
                    <div className="video">
                        <iframe width="840" height="472"
                                src="https://www.youtube.com/embed/HsL-M714o3o?si=Xa9A33qz1ZJWJdUt"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="p">
                        <p>Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế giới? Có người pha cùng
                            sữa, có
                            người rót <br/> thêm kem béo, hay kết hợp cùng… rượu whiskey, nhưng không phải ai cũng có
                            thể thưởng
                            thức
                            cà phê một <br/>
                            cách ngon lành. Bằng niềm khao khát mang ẩm thực thế giới vào từng ly cà phê bản địa,
                            Edward Teonadi - Giám đốc phát <br/> triển sản phẩm tại The Coffee House đã tạo nên thế hệ
                            cà phê mới
                            mang
                            tên CloudFee. Và giờ đây, bất kỳ ai ghé Nhà cũng có thể tìm thấy hương vị cà phê cho riêng
                            mình.</p>
                    </div>
                </div>
                <div className="banner2">
                    <div className="img">
                        <img src={banner5} alt=""/>
                    </div>
                    <div className="inf">
                        <h1>CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</h1>
                        <p>Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista của The Coffee House nhận
                            ra: Cà
                            phê
                            không nhất thiết phải đắng, phải chua thì mới ngon. Đôi khi một chút biến tấu, một chút ngọt
                            ngào
                            để
                            yêu chiều bản thân mới thật sự quan trọng. Và đó là cách CloudFee Creme Brulee ra đời.</p>
                        <button>
                            Bạn muốn nghe chi tiết...
                        </button>
                    </div>
                </div>
                <div className="banner3">

                    <div className="inf">
                        <h1>CÀ PHÊ ĐÂU CHỈ LÀ <br/>THỨC UỐNG</h1>
                        <p>Trong ly cà phê dành cho người mình thương có gì? Khi nghe Edward chia sẻ về thế hệ cà
                            phê <br/> mới bt
                            CloudFee, anh Nguyễn Hoàng Hiếu - barista của The Coffee House chợt nhớ tới vợ mình. Cô ngại
                            vị đắng
                            của cà phê, nhưng cần một thức uống tỉnh táo mỗi sáng. Và CloudFee Creamy là món quà anh
                            tặng cho
                            người phụ nữ anh yêu.</p>
                        <button>
                            Bạn sẽ biết khi xem video này
                        </button>
                    </div>
                    <div className="img">
                        <img src={banner4} alt=""/>
                    </div>
                </div>
            </section>
            </section>
        </>
    )
};
export default memo(Blog);
