import './touching.css';
import Navbar from '../../components/navbar';
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { GiConfirmed } from "react-icons/gi";
import Footer from '../../components/footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import URL from '../../config';
import { jwtDecode } from 'jwt-decode';

const Touching = () => {

    const navigate = useNavigate();
    const serve = JSON.parse(localStorage.getItem('serve')) || JSON.parse(localStorage.getItem('service'))
    || JSON.parse(localStorage.getItem('job'));
    const clear = () => {
        localStorage.removeItem('serve');
        localStorage.removeItem('service');
        localStorage.removeItem('job');
        navigate('/');
    }
    const patient = JSON.parse(localStorage.getItem('user'));
    const [user, setuser] = useState({});
    const [data] = useState({
        senderAccountNumber: '',
        receiverAccountNumber: '',
        amount: 0,
        role: ''
    });

    useEffect(() => {
        if (patient) {
            setuser(jwtDecode(patient));
        }
    }, []);

    const transaction = async () => {
        try {
            if (!patient) {
                alert('first, sign in/up');
            } else {
                if (window.confirm(`Are you sure you want to buy "${serve?.title}" !?`)) {
                    data.senderAccountNumber = user?._id;
                    data.receiverAccountNumber = serve?._id;
                    data.amount = serve?.price;
                    data.role = serve?.role;
                    const payment = await axios.post(`${URL}/payments`, data, {
                        headers: {
                            Authorization: patient
                        }
                    });
                    alert(payment?.data?.message);
                } else {console.log('transaction cancelled !');}
            }
        } catch (err) {alert(err?.response?.data?.message);}
    }

    return (
        <>
            <Navbar />
            <div className="container pb-5">
                <div className="exit-place">
                    <RiArrowGoBackFill onClick={clear} className='back-btn' size={35}/>
                </div>
                <div className="table my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 table-skeleton">
                            <div className="headerone">
                                <div className="left-side">
                                    <img className='table-imag' src='./clinic.png' alt="0" />
                                    <h3>Medical Clinic</h3>
                                </div>
                                <div className="right-side">
                                    <GiConfirmed  size={35}/>
                                </div>
                            </div>
                            <div className="table-body px-4">
                                <div className="header">
                                    <h2>Title: {serve?.title}</h2>
                                </div>
                                <br />
                                <div className="bodiy">
                                    <h3>Description:</h3>
                                    <p>{serve?.desc}</p>
                                </div>
                                <div className="bottom">
                                    <h5>Doctor: <span>{serve?.doctor?.fullname}</span></h5>
                                    <h2>Price: {serve?.price} $</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buy-place">
                    <button onClick={transaction} className='buy-btn'>Buy</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Touching;