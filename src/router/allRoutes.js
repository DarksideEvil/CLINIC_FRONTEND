import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Service from "../views/services";
import Job from "../views/jobs";
import Profile from "../views/profile";
import Touching from "../views/touching";
import App from "../views/registration";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="job" element={<Job />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="touching" element={<Touching />} />
        <Route path="register" element={<App />} />
      </Routes>
    </>
  );
};

export default AllRoutes;