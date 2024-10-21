import {memo} from "react";
import "./style.css"
const Footer= ( ) =>{
    return (
        <>
            <footer id="section-p1">
                <div className="col">
                    <h4>Thông tin liên hệ</h4>
                    <p><strong>Địa chỉ:</strong> 1 Võ Văn Ngân, Tp.Thủ Đức</p>
                    <p><strong>Số Điện Thoại:</strong> 0842212302</p>
                    <p><strong>Giờ hoạt động:</strong> 7am-22pm</p>
                </div>
                <div>
                    <h4>Tài khoản của tôi</h4>
                </div>
                <div>
                    <h4>Tải ứng dụng</h4>
                </div>
            </footer>
        </>
    )
};

export default memo(Footer);
