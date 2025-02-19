// import { Typed } from "react-typed";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TypeAnimation } from "react-type-animation";
import gambar from "../assets/images/Ellipse14.svg"


gsap.registerPlugin(ScrollTrigger);

const Datadiri = () => {
    const Saya = useRef(null);
    const Mana = useRef(null);
    const Ama = useRef(null);
    const Gambar = useRef(null);
    const hub = useRef(null);

    useEffect(() => {
        gsap.to(Saya.current, {
            y: 190, // Maksimal 150px
            ease: "power2.out",
            scrollTrigger: {
                trigger: Saya.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2, // Efek mengikuti scroll
            },
        });

        gsap.to(Mana.current, {
            y: 200, // Maksimal 160px
            ease: "power2.out",
            scrollTrigger: {
                trigger: Mana.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            },
        });

        gsap.to(Ama.current, {
            y: 210, // Maksimal 170px
            ease: "power2.out",
            scrollTrigger: {
                trigger: Ama.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            },
        });
        gsap.to(hub.current, {
            y: 250, // Maksimal 170px
            ease: "power2.out",
            scrollTrigger: {
                trigger: hub.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            },
        });

        gsap.fromTo(Gambar.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                x: -400, // Bergerak ke kiri max -950px
                ease: "power2.out",
                scrollTrigger: {
                    trigger: Gambar.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
    }, []);
    return (
        <div className="h-[100vh] mt-0  bg-gradient-to-b from-slate-950 to-slate-500">
            <div className="container mx-auto px-4 py-16 " >
                <h1 ref={Saya} className=" text-5xl  font-extrabold text-green-200 ">


                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Hallo,',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Nama Saya',
                            1000,
                            'Aldi Kurniawan',
                            500,

                        ]}
                        wrapper="span"
                        speed={20}

                        repeat={Infinity}
                    />
                </h1>

                <h4 ref={Mana} className="text-3xl w-[45%]  pb-[0.20rem] font-medium text-white">Web Developer</h4>
                <h5 ref={Ama} className="text-1xl w-[45%]  font-medium text-white">Menjadi Progremer Adalah Impian Saya Sejak Masih Di Bangku SMP</h5>
                <h3 ref={hub} className="px-5 py-[10px]    text-white bg-black rounded-full inline-block">Hubungi Saya</h3>

                <img src={gambar} ref={Gambar} className="ml-[100%] -mt-10" />

            </div>
        </div >
    )
};
export default Datadiri 