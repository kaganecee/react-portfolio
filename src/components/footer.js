import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import ScrollToTop from '../utils/scrollToTop';
const Footer = () => {
    return (
        <>
            <ScrollToTop />
            <footer className="d-flex justify-content-center align-items-center">
                <div className=" d-flex justify-content-center align-items-center">
                    <ul className="container d-flex align-items-center">
                        <li>
                            Designed and Developed by{' '}
                            <a href="https://www.linkedin.com/in/bilgekaganece/">Bilge Kağan Ece</a>
                        </li>
                        <li>Copyright © 2022</li>
                        <li>
                            <ul className="d-flex gap-3">
                                <li className="socialIcons">
                                    <a href="https://github.com/kaganecee">
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="socialIcons">
                                    <a href="https://linkedin.com/in/bilgekaganece">
                                        <AiOutlineTwitter />
                                    </a>
                                </li>
                                <li className="socialIcons">
                                    <a href="https://twitter.com/kaganecee">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};
export default Footer;
