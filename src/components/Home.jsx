// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import bg from "../assets/images/bg.jpg"
import moon from "../assets/images/moon.png"
import road from "../assets/images/road.png"
import mountaid from "../assets/images/mountain.png"
import "../assets/css/index.css"

const Parallax = () => {
    const bgRef = useRef()
    const mountaidRef = useRef()
    const roadRef = useRef()
    const textRef = useRef()
    const moonrRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                let value = window.scrollY;
                bgRef.current.style.transform = `translateY(${value * 0.5}px)`;
                moonrRef.current.style.transform = `translateX(${-value * 0.5}px)`;
                roadRef.current.style.transform = `translateY(${value * 0.15}px)`;
                mountaidRef.current.style.transform = `translateY(${-value * 0.15}px)`;
                textRef.current.style.transform = `translateY(${value * 1}px)`;

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="sec" className="relative w-[100%] h-[100vh] overflow-hidden flex justify-center items-center">
            <img ref={bgRef} src={bg} />
            <img ref={moonrRef} src={moon} />
            <img ref={mountaidRef} src={mountaid} />
            <img id="Road" ref={roadRef} src={road} />
            <h2 ref={textRef} id="text">Portofolio</h2>
        </section>
    );
};

export default Parallax;
