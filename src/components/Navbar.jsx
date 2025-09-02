import React, { useRef } from 'react'
import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                gsap.to(navRef.current, {
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    duration: 0.1,
                    ease: 'power1.out'
                });
            } else {
                gsap.to(navRef.current, {
                    backgroundColor: 'rgba(0,0,0,0)',
                    backdropFilter: 'blur(0px)',
                    WebkitBackdropFilter: 'blur(0px)',
                    duration: 0.1,
                    ease: 'fast.out'
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 50,
                transition: "background-color 0.3s, backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s"
            }}
        >
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
