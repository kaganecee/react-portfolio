import Footer from '../components/footer';
import Header from '../components/header';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiJava,
    DiPython,
    DiGit,
    DiHtml5,
    DiCss3
} from 'react-icons/di';
import { SiRedux, SiPostman, SiNextdotjs } from 'react-icons/si';
import { VscCircleFilled } from 'react-icons/vsc';

const About = () => {
    return (
        <>
            <Header />
            <main className="container d-flex flex-column align-items-center gap-3">
                <h1 style={{ marginTop: '2rem' }}>ABOUT ME</h1>
                <div className="d-flex flex-column justify-content-start aboutme">
                    <div
                        style={{
                            borderBottom: '2px solid black',
                            height: '3rem',
                            fontSize: '2rem'
                        }}
                        className="d-flex align-items-center"
                    >
                        <span className="d-flex align-items-center" style={{ color: '#ED4C5C' }}>
                            <VscCircleFilled />
                        </span>
                        <span className="d-flex align-items-center" style={{ color: '#FDCB58' }}>
                            <VscCircleFilled />
                        </span>
                        <span className="d-flex align-items-center" style={{ color: '#78B159' }}>
                            <VscCircleFilled />
                        </span>
                    </div>
                    <div style={{ padding: '1rem', fontSize: '1.3rem' }}>
                        <p>Hi</p>
                        <p>
                            I'm Bimde Kağan Ece from Muğla,Turkey. I'm CS student at Muğla Sıtkı
                            Koçman University in Muğla. I'm junior full stack developer. You can see
                            the technologies I use below. You can also view the my resume from the
                            navbar.
                        </p>
                    </div>
                </div>
                <h2 style={{ padding: '3rem', fontSize: '2.5rem' }}>Skillset</h2>
                <div className="container ">
                    {/* <div className="row skillCards">
                    {iconList.map((idx)=>(
                        <div key={idx} className="col-md-3">
                        {idx}
                        </div>
                    ))}

                </div>   */}
                    <div className="row skillCards">
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiJavascript1 />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiReact />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiNodejs />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiMongodb />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiJava />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiPython />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiGit />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiHtml5 />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <DiCss3 />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <SiPostman />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <SiNextdotjs />
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <SiRedux />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
const iconList = [
    <DiJavascript1 />,
    <DiReact />,
    <DiNodejs />,
    <DiMongodb />,
    <DiJava />,
    <DiPython />,
    <DiGit />,
    <DiHtml5 />,
    <DiCss3 />
];
export default About;
