import React from "react";
import './register.css';
import axios from "axios";
import URL from '../../config';
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
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
      const success = await axios.post(`${URL}/login/patient`, state);
      if (success.status === 200) {
        localStorage.setItem('user', JSON.stringify(success?.data?.token));
        navigate('/');
      }

      for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }
    } catch (err) {alert(err?.response?.data?.message);}
  };

  return (
    <div className="form-container sign-in-container">
      <form className="forma" onSubmit={handleOnSubmit}>
        <h1 className="h1">Sign in</h1>
        <input
          type="email"
          className="inp"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="inp"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="buton">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;