
import { useState, useRef, } from "react";
import { competition, education } from "./Expan/expresion";


const Experience = () => {
    const [showSchool, setShowSchool] = useState(true);
    const pendidikanRef = useRef();
    const pengalamanRef = useRef();


    const handlePendidikan = () => {
        setShowSchool(true);

        pengalamanRef.current.classList.remove("btn-active");
        pendidikanRef.current.classList.add("btn-active");
    };

    const handlePengalaman = () => {
        setShowSchool(false);

        pengalamanRef.current.classList.add("btn-active");
        pendidikanRef.current.classList.remove("btn-active");
    };







    return (
        <section id="pengalaman" className=" pb-40 bg-black">

            <div className=" pt-10">
                <div className="flex flex-wrap">
                    <div className="w-full mx-30">
                        <h1 id="animation" className=" py-3 relative text-center text-3xl font-bold uppercase text-primary md:text-5xl lg:mb-6">
                            Experience
                        </h1>
                    </div>
                    <div className="flex w-full items-center justify-center px-4 py-4 lg:w-1/5 lg:flex-col lg:justify-start">
                        <button
                            ref={pendidikanRef}
                            onClick={handlePendidikan}
                            className="btn-active mx-2 px-2 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
                            Edukasi
                        </button>
                        <button
                            ref={pengalamanRef}
                            onClick={handlePengalaman}
                            className="mx-2 px-3 py-1 text-center font-poppins text-base font-bold text-primary lg:my-2 lg:text-lg">
                            Kompetisi
                        </button>
                    </div>
                    <div className="timeline w-full px-4 ">
                        {showSchool
                            ? education.map((education) => {
                                const perusahaan = education.description.split("|");
                                return (
                                    <div className="wrap right pendidikan show lg:w-4/5" key={education.id}>
                                        <div className="content">


                                            <h2 className="text-primary">{education.year}</h2>
                                            <p className="text-lg">{perusahaan[0]}</p>
                                            <p className="text-sm">{perusahaan[1]}</p>
                                        </div>
                                    </div>
                                )
                            })
                            : competition.toReversed().map((competition, index) => (
                                <div className="wrap right lomba show lg:w-1/3 " key={index}>
                                    <div className="content h-[30vh] text-center">

                                        <h2 className="text-primary">{competition.year}</h2>
                                        <p className="text-lg">{competition.description}</p>
                                        <img src={competition.image} alt={competition.title} className={`${competition.id === 5 ? "w-64" : ""}`} />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
