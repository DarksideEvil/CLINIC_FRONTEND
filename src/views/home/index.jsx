import Navbar from "../../components/navbar";
import SlideShow from "../../components/slideShow";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from '../../config';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Home = () => {

    const [job, setJob] = useState([]);
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getJob = async () => {
            const info = await axios.get(`${URL}/jobs`).catch(err => alert(err));
            setJob(info?.data);
        }
        getJob();

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

    const aboutServe = (job) => {
        localStorage.setItem('serve', JSON.stringify(job));
        navigate('/touching');
    }

    return (
        <>
            <Navbar />
            <div className="container pb-5">
                <SlideShow />
                <div className="pieces">
                    <div className="row second-piece">
                        {
                            loading ? <div className="custom-loader"></div> :
                            job?.map((job, indx) => {
                                return (
                                    <div onClick={() => aboutServe(job)} className="col-md-5" key={indx}>
                                        <div className="piece my-3">{job?.title}</div>
                                    </div>
                                );
                            })
                        }
                        {
                            loading ? <div className="custom-loader"></div> :
                            service?.map((service, indx) => {
                                return (
                                    <div onClick={() => aboutServe(service)} className="col-md-5" key={indx}>
                                        <div className="piece my-3">{service?.title}</div>
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
 
export default Home;