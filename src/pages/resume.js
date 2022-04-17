import Footer from '../components/footer';
import Header from '../components/header';
import Pic from '../images/Siyah ve Altın Rengi Akademik Öz Geçmiş Kopyası.png';
const Resume = () => {
    return (
        <>
            <Header />
            <main className="container resumePage d-flex flex-column  align-items-center">
                <div style={{ marginTop: '3rem' }}>
                    <a href="../images/cv.pdf" download className="downloadLink">
                        Download Resume
                    </a>
                </div>
                <img alt="" src={Pic}></img>
            </main>
            <Footer />
        </>
    );
};
export default Resume;
