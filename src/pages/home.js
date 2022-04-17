import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import pic from '../images/Adsız (780 × 1080 piksel) (1).png';
import pic2 from '../images/Adsız tasarım (16).png';
import pic3 from '../images/Adsız tasarım (17).png';
const Home = () => {
    return (
        <>
            <main className="d-flex flex-column gap-5 justify-content-center align-items-center">
                <h1>Hi I'm Bilge Kağan Ece</h1>

                <div className="container  gap-5 d-flex justify-content-center align-items-center">
                    <Link
                        className="d-flex justify-content-center align-items-center"
                        to="/projects"
                    >
                        <div className="navCards d-flex gap-4 flex-column justify-content-center align-items-center">
                            <img className="navCardsImage" src={pic2} alt=""></img>
                            <p>Projects</p>
                        </div>
                    </Link>
                    <Link className="d-flex justify-content-center align-items-center" to="/about">
                        <div className="navCards d-flex gap-4 flex-column justify-content-center align-items-center">
                            <img className="navCardsImage" src={pic3} alt=""></img>
                            <p>About</p>
                        </div>
                    </Link>
                    <Link className="d-flex justify-content-center align-items-center" to="/resume">
                        <div className="navCards d-flex gap-4 flex-column justify-content-center align-items-center">
                            <img className="navCardsImage" src={pic} alt=""></img>
                            <p>Resume</p>
                        </div>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
};
export default Home;
