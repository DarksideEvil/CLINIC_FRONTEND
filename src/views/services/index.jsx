import './service.css';
import Navbar from '../../components/navbar';
import { useState, useEffect } from "react";
import axios from "axios";
import URL from '../../config';
import { useNavigate } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import Footer from '../../components/footer';

const Service = () => {

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getService = async () => {
            try {
                setLoading(true);
                const info = await axios.get(`${URL}/services`);
                setService(info?.data);
            } catch (err) {alert(err);}
            finally {setLoading(false);}
        }
        getService();
    }, []);

    const toAnother = (item) => {
        localStorage.setItem('service', JSON.stringify(item));
        navigate('/touching');
    }

    return (
        <>
            <Navbar />
            <div className="container pb-5">
                <div className="table my-5">
                    <div className="row d-flex justify-content-center">
                        {
                            loading ? <div className="custom-loader"></div> :
                            service.map((item, indx) => {
                                return (
                                    <div className="col-md-4 table-tana m-3" key={indx}>
                                        <div className="headerone">
                                            <div className="left-side">
                                                <img className='table-imag' src='./clinic.png' alt="0" />
                                                <h3>Medical Clinic</h3>
                                            </div>
                                            <div className="right-side">
                                                <GiConfirmed  size={35}/>
                                            </div>
                                        </div>
                                        <div className="table-bodiy px-4">
                                            <div className="header">
                                                <h2>Title: {item?.title}</h2>
                                            </div>
                                            <br />
                                            <div className="bottoms">
                                                <button onClick={() => toAnother(item)} className='detail-btn'>Details</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Service;