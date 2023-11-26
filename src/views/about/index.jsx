import './about.css';
import Navbar from '../../components/navbar';
import Maps from '../../components/googleMaps';
import Footer from '../../components/footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container pb-5">
                <div className="wrapper">
                    <svg className='animated-logo'>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                            Medical Clinic
                        </text>
                    </svg>
                </div>
                <div className="next-place">
                    <p>The International Clinic (TIC) is focused on providing outstanding health services for people of all ages. We have a comprehensive medical team with extensive primary care services, addressing all the health needs of expat families.
                        <br /> <br />
                        TIC takes a team approach to caring for you and your family and helps manage your health so you can be at your best. If you have asthma, diabetes, heart disease, or other chronic conditions, we’ll help you get ahead of your symptoms so you can live a better life with less worry about what might hold you back.
                        <br /> <br />
                        <strong>Languages:</strong> All our staff are fluent in English, but we also attend to our patients using Russian, Uzbek, German, Korean, Spanish and French when needed.</p>
                        <br /> <br />
                    <h5>You can find us this location:</h5>
                    <br />
                </div>
                <Maps />
            </div>
            <Footer />
        </>
    );
}
 
export default About;