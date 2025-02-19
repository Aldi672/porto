import { useEffect, useRef, } from "react";
import { TypeAnimation } from "react-type-animation";

const Tentang = () => {

    const Saya = useRef()
    const Mana = useRef()
    const Ama = useRef()
    const Gambar = useRef()
    useEffect(() => {
        const handleScroll = () => {
            if (Saya.current) {
                let value = window.scrollY;
                Saya.current.style.transform = `translateY(${value * 0.20}px)`;
                Mana.current.style.transform = `translateY(${value * 0.22}px)`;
                Ama.current.style.transform = `translateY(${value * 0.22}px)`;
                Gambar.current.style.transform = `translateX(${value * -0.85}px)`;

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="h-[100vh] bg-gradient-to-r mt-0  from-slate-950 to-slate-950">
            <h1 ref={Saya} className=" text-5xl clip-path-[polygon(0%_20%,100%_0%,100%_80%,0%_100%)] px-10 font-extrabold text-green-200 ">


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

            <h4 ref={Mana} className="text-3xl w-[45%] px-10 clip-path-[polygon(0%_20%,100%_0%,100%_80%,0%_100%)] pb-[0.20rem] font-medium text-white">Web Developer</h4>
            <h5 ref={Ama} className="text-1xl w-[45%] px-10 clip-path-[polygon(0%_20%,100%_0%,100%_80%,0%_100%)] font-medium text-white">Menjadi Progremer Adalah Impian Saya Sejak Masih Di Bangku SMP</h5>
            <h3 className="px-5 py-[10px] ml-10 mt-[190px]  text-white bg-black rounded-full inline-block">Hubungi Saya</h3>

        </div>
    )
};


export default Tentang