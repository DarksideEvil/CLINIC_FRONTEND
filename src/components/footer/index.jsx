import './footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer-wrapper p-3'>
            <div className="row footer-wropper">
                <div className="col-md-3">
                    <div className="header-txt">
                        <h4>CONTACT US</h4>
                    </div>
                    <div className="phone-place">
                        <div className="phone-header">
                            <FaPhoneAlt size={25}/>
                        </div>
                        <div className="phone-body">
                            <h5>Patients only:</h5>
                            <p className='phone-numbers'>(+1)5667686 (+1)2223242</p>
                            <h5>Visa Medical:</h5>
                            <p className='phone-numbers'>(+2)7874797 (+3)0809040</p>
                        </div>
                    </div>
                    <div className="location-place">
                        <div className="location-header">
                            <FaLocationDot size={25}/>
                        </div>
                        <div className="location-body">
                            <p>42 Sunshine street, Paris 100105, France</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end-txt">
                <p className='footers-txt'>© 2023 International Clinic. Privacy Policy.</p>
            </div>
        </div>
    );
}
 
export default Footer;