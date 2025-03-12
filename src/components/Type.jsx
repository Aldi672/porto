/* eslint-disable react/prop-types */
import aos from "aos";
import { FaCarrot } from "react-icons/fa6";
import { GiArmBandage, GiLoveInjection } from "react-icons/gi";
import { PiParkBold } from "react-icons/pi";
import { RiMentalHealthFill } from "react-icons/ri";

const Type = ({ onTypeClick }) => {
    aos.init({
        once: true
    });

    return (
        <div id="temasehat" className="relative flex -my-20 sm:my-0 flex-col sm:bg-transparent items-center py-2 lg:py-5 px-2 md:px-10">
            <h1 className="font-newamsterdam text-2xl hidden sm:block md:text-3xl py-2 z-20">Tema sehat</h1>
            <div className="flex flex-wrap justify-center gap-2 z-20">
                <div
                    data-aos="fade-up"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-5w-52 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-md transition-colors duration-300 shadow-lg group hover:bg-[#FFB200] cursor-pointer"
                    onClick={() => onTypeClick(3)}
                >
                    <GiLoveInjection className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
                    <div className="mt-1 text-[10px] sm:text-sm md:text-xl font-oswald text-center">Sehat Imunisasi</div>
                </div>

                <div
                    data-aos="fade-up"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-5w-52 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-md transition-colors duration-300 shadow-lg group hover:bg-[#6EACDA] cursor-pointer"
                    onClick={() => onTypeClick(1)}
                >
                    <GiArmBandage className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#6EACDA] group-hover:text-white group-hover:animate-bounce" />
                    <div className="mt-1 text-[10px] sm:text-sm md:text-xl font-oswald text-center">Sehat Fisik</div>
                </div>

                <div
                    data-aos="fade-up"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-5w-52 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-md transition-colors duration-300 shadow-lg group hover:bg-[#FFB200] cursor-pointer"
                    onClick={() => onTypeClick(4)}
                >
                    <FaCarrot className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
                    <div className="mt-1 text-[10px] sm:text-sm md:text-xl font-oswald text-center">Sehat Bergizi</div>
                </div>

                <div
                    data-aos="fade-up"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-5w-52 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-md transition-colors duration-300 shadow-lg group hover:bg-[#6EACDA] cursor-pointer"
                    onClick={() => onTypeClick(2)}
                >
                    <RiMentalHealthFill className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#6EACDA] group-hover:text-white group-hover:animate-bounce" />
                    <div className="mt-1 text-[10px] sm:text-sm md:text-xl font-oswald text-center">Sehat Jiwa</div>
                </div>

                <div
                    data-aos="fade-up"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-52 lg:h-5w-52 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-md transition-colors duration-300 shadow-lg group hover:bg-[#FFB200] cursor-pointer"
                    onClick={() => onTypeClick(5)}
                >
                    <PiParkBold className="text-xl sm:text-2xl md:text-4xl lg:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
                    <div className="mt-1 text-[10px] sm:text-sm md:text-xl font-oswald text-center">Sehat Lingkungan</div>
                </div>
            </div>
        </div>
    );
};

export default Type;
