/* eslint-disable no-undef */


import { useEffect } from "react";
import "../assets/css/index.css"

const About = () => {
    useEffect(() => {
        // Tambahkan script Finisher Header ke dalam halaman
        const script = document.createElement("script");
        script.src = "/public/Js/finisher-header.es5.min.js"; // URL CDN
        script.async = true;

        script.onload = () => {
            // Inisialisasi Finisher Header setelah script dimuat
            new FinisherHeader({
                count: 100,
                size: { min: 1, max: 20, pulse: 0 },
                speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.1 } },
                colors: {
                    background: "0d0b10", particles: [
                        "#ffffff",
                        "#87ddfe",
                        "#acaaff",
                        "#1bffc2",
                        "#f88aff"]
                },
                blending: "screen",
                opacity: { center: 0, edge: 0.4 },
                skew: 0,
                shapes: ["c"],
            });
        };

        document.body.appendChild(script);

        // Membersihkan script saat komponen di-unmount

    }, []);

    return (
        <section className="relative w-full h-screen">
            <div className="finisher-header" ></div>
            <div className="container relative mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="-mt-[60rem] z-10"> {/* Deskripsi dan keahlian */}
                        <h2 className="text-3xl font-bold text-white mb-4">| Tentang Saya |</h2>
                        <p className="text-lg text-white mb-4">
                            {/* Ganti dengan deskripsi singkat tentang Anda */}
                            Saya adalah seorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tanpa dasar komputer.
                            Namun, saya selalu berusaha untuk belajar sehingga dapat memahami alur pemrograman dan terus berkembang dengan pengalaman
                            dalam membangun aplikasi web yang interaktif dan responsif.
                            Saya senang mempelajari teknologi baru dan menerapkannya
                            dalam proyek-proyek saya.
                        </p>


                    </div>
                </div>
                {/* Tambahkan bagian pengalaman dan pencapaian di sini jika diperlukan */}
                <div className="-mt-[20rem]"> {/* Ajakan bertindak */}
                    <button className="group z-10 relative inline-flex h-12 w-12 items-center justify-center overflow-hidden    rounded-full bg-neutral-500 font-medium text-neutral-200 transition-all duration-300 hover:w-40">
                        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Hubungi Saya
                        </div>
                        <div className="absolute right-3.5">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </button>


                </div>

            </div>
        </section >
    );
};

export default About;