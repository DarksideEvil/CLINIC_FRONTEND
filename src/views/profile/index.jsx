import './profile.css';
import Navbar from "../../components/navbar";
import { GiRibbonMedal } from "react-icons/gi";
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const Profile = () => {

    const [validUser, setvalidUser] = useState(false);
    const [user, setUser] = useState({});
    const patient = JSON.parse(localStorage.getItem('user'));
    console.log(patient);
    
    useEffect(() => {
        if (patient) {
            setvalidUser(true);
            setUser(jwtDecode(patient));
        }
    }, [patient]);

    return (
        <>
            <Navbar />
            <div className="container pb-5 profile-contain">
                {
                    validUser ?
                    <div className="profile-wrapper">
                    <div className="row profile-wropper">
                        <div className="profile-header">
                            <div className="profile-header-left">
                                <img className='profile-logo' src="./clinic.png" alt="0" />
                                <h3>User of Clinic</h3>
                            </div>
                            <div className="profile-header-right">
                                <GiRibbonMedal size={35}/>
                            </div>
                        </div>
                        <div className="profile-body">
                            <div className="col-md-5 profile-img-place">
                                <img className='profile-img' src="https://morocoder.com/static/media/adil.a429e0c35d7a2a0b9847.png" alt="0" />
                            </div>
                            <div className="col-md-7">
                                <h3 className='profile-name'>FullName: {user?.fullname}</h3>
                                <h3 className='profile-address'>Address: {user?.address}</h3>
                                <h3 className='profile-email'>Email: {user?.email}</h3>
                                <h3 className='profile-phone'>Phone-Number: {user?.phone}</h3>
                                <h3 className='profile-age'>Age: {user?.age}</h3>
                                <h3 className='profile-spent'>Spent: {user?.spent} $</h3>
                                <h3 className='profile-balance'>Balance: {user?.balance} $</h3>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="no-user">
                    <div className="no-user-body">
                        <div className="no-user-img-place">
                            <img className='no-user-img' src="./register.png" alt="0" />
                        </div>
                        <div className="no-user-txt-place">
                            <h2>first, sign up/in</h2>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    );
}
 
export default Profile;