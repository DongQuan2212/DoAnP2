import {memo} from "react"
import "./StyleContact.css"
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const ContactPage = () => {
    return (
        <>
            <div className="hero1">
                <h1>Đừng ngần ngại liên hệ chúng tôi</h1>
            </div>

            <div id="contact-details" >
                <div className="details">
                    <span>LIÊN LẠC</span>
                    <h2>Ghé qua một trong những chi nhánh của chúng tôi hoặc liên hệ với chúng tôi ngay</h2>
                    <h3>Trụ sở chính</h3>
                    <div>
                        <li>
                            <i ><FaMap /></i>
                            <p>1 Võ Văn Ngân, Tp.Thủ Đức</p>
                        </li>
                        <li>
                            <i><MdEmail /></i>
                            <p>coffee@gmail.com</p>
                        </li>
                        <li>
                            <i><FaPhoneAlt /></i>
                            <p>084123643</p>
                        </li>
                        <li>
                            <i><FaClock /></i>
                            <p>Nguyên tuần: 9:00 sáng đến 22:00 tối</p>
                        </li>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4854676752075!2d106.769338174806!3d10.850632389302652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1729017154490!5m2!1svi!2s"
                        width="600" height="450"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
};
export default memo(ContactPage)
