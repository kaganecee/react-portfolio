import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (document.documentElement.scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-to-top">
                    <div>
                        <MdKeyboardArrowUp style={{ fontSize: '2rem' }} />
                    </div>
                </div>
            )}
        </>
    );
}
