import React from "react";
import './register.css'
import axios from "axios";
import URL from '../../config';
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [state, setState] = React.useState({
    fullname: "",
    phone: '',
    address: '',
    age: 0,
    email: "",
    password: "",
    balance: 0
  });

  const navigate = useNavigate();
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    try {
      state.balance = Number(state.balance);
      state.age = Number(state.age);
      state.phone = Number(state.phone);
      
      const success = await axios.post(`${URL}/patients`, state);
      if (success?.status === 201) {
        localStorage.setItem('user', JSON.stringify(success?.data?.token));
        navigate('/');
      }

    for (const key in state) {
      console.log(key);
      setState({
        ...state,
        [key]: ""
      });
    }
    } catch (err) {alert(err?.response?.data?.message);}
  };

  return (
    <div className="form-container sign-up-container">
      <form className="forma" onSubmit={handleOnSubmit}>
        <h3 className="h111">Create Account</h3>
        <input
          type="text"
          className="inp"
          name="fullname"
          value={state.fullname}
          onChange={handleChange}
          placeholder="Fullname"
        />
        <input
          type="number"
          className="inp"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="Phone:ex:/99891.."
        />
        <input
          type="text"
          className="inp"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <input
          type="number"
          className="inp"
          name="age"
          value={state.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="email"
          className="inp"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          className="inp"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="number"
          className="inp"
          name="balance"
          value={state.balance}
          onChange={handleChange}
          placeholder="Balance $"
        />
        <button className="buton">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;