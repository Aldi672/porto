import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import gambar1 from "../assets/svg/javascript-logo-svgrepo-com.svg"
import gambar2 from "../assets/svg/python-svgrepo-com.svg"
import gambar3 from "../assets/svg/flutter-svgrepo-com.svg"
import { RiTailwindCssFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content2 = () => {
    const container = useRef();
    const tl = useRef();



    useGSAP(
        () => {
            const boxes = gsap.utils.toArray("#box");
            tl.current = gsap
                .timeline()
                .from(boxes, { opacity: 0, scale: 0, stagger: 0.2 }) // Animasi awal: muncul dengan scale
                .to(boxes, { x: 0, stagger: 0.2 }) // Animasi geser dan rotasi
                .to(boxes, { x: 0, stagger: 0.2 }, "<") // Animasi geser dan rotasi balik
                .to(boxes, { y: 6, stagger: 0.2 }); // Animasi geser ke atas

            // Tambahkan ScrollTrigger
            ScrollTrigger.create({
                trigger: container.current,
                start: "top center",
                end: "bottom top",
                animation: tl.current,
                scrub: 1,
            });
        },
        { scope: container }

    );


    return (

        <main className="bg-gray-100 py-20 h-[110vh]">
            <section ref={container} className="boxes-container">
                <h2 className="text-[3rem] font-bold text-center text-gray-800 mb-8">
                    KEAHLIAN

                </h2>
                <div className="flex gap-56 justify-center mt-0">
                    {/* Box untuk CSS */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className="text-white justify-center items-center ">
                            <img src={gambar1} alt="" />
                            <h1 className="mt-5 text-2xl px-1">JavaScript</h1>
                        </p>
                    </div>

                    {/* Box untuk Tailwind */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className="text-5xl">
                            <RiTailwindCssFill size={120} className="text-cyan-300" />
                            <h1 className="text-white mt-3 px-4 text-2xl ">Tailwind</h1>
                        </p>
                    </div>

                    {/* Box untuk React */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className=" text-5xl">
                            <FaReact className="text-cyan-500 mt-3" size={100} />
                            <h1 className="text-white mt-6 px-6 text-2xl ">React</h1>
                        </p>
                    </div>

                </div>
                <div className="flex gap-56 justify-center mt-20">
                    {/* Box untuk CSS */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className=" text-5xl">
                            <FaCss3Alt className="text-sky-600 mt-3" size={100} />
                            <h1 className="text-white mt-6 px-8 text-2xl ">Css</h1>
                        </p>
                    </div>

                    {/* Box untuk Tailwind */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className="text-white justify-center items-center ">
                            <img src={gambar2} className="" />
                            <h1 className="mt-5 text-2xl px-6">Python</h1>
                        </p>
                    </div>

                    {/* Box untuk React */}
                    <div id="box" className="h-50 w-40 bg-slate-900 gradient-blue p-6 rounded-lg shadow-md flex  justify-center">
                        <p className="text-white justify-center items-center ">
                            <img src={gambar3} className="" />
                            <h1 className="mt-5 text-2xl px-6">Flutter</h1>
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Content2;
