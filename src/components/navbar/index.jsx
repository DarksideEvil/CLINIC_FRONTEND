import './navbar.css';
import { NavLink } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { IoLogInSharp } from "react-icons/io5";
import {Tooltip} from 'react-tooltip';

const Navbar = () => {

    const [validUser, setvalidUser] = useState(false);
    const clear = () => {
        localStorage.removeItem('serve');
        localStorage.removeItem('service');
        localStorage.removeItem('job');
    }
    const user = localStorage.getItem('user');

    useEffect(() => {
        if (user) {
            setvalidUser(true);
        }
        
    }, [user]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-4">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <li className='nav-item'>
                        <NavLink onClick={() => clear()} className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink onClick={() => clear()} className='nav-link' to='/service'>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink onClick={() => clear()} className='nav-link' to='/job'>Jobs</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink onClick={() => clear()} className='nav-link' to='/about'>About us</NavLink>
                    </li>
                    <li className='mx-1'>
                        <NavLink className='nav-link' to='/profile'>
                            <Tooltip id='profile' place='bottom' />
                            <IoMdPerson onClick={() => clear()} size={30}
                            data-tooltip-id='profile' data-tooltip-content="My Profile" />
                        </NavLink>
                    </li>
                    <li className='mx-1'>
                        <NavLink className='nav-link' to='/register'>
                            <Tooltip id='login' place='bottom' />
                            <Tooltip id='logout' place='bottom' />
                            {
                                validUser ? <IoLogOutSharp onClick={() => localStorage.clear()} 
                                data-tooltip-id='logout' data-tooltip-content="Logout" size={30}/> :
                                <IoLogInSharp onClick={() => localStorage.clear()} size={30}
                                data-tooltip-id='login' data-tooltip-content="Login" />
                            }
                        </NavLink>
                    </li>
            </div>
        </nav>
    );
}
 
export default Navbar;