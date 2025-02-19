


const About = () => {



    return (
        <section className="relative w-full h-screen bg-gray-100"
            style={{
                backgroundImage: `
            radial-gradient(circle at 10% 25%, rgba(121, 169, 247, 0.4) 100px, transparent 50px),
            radial-gradient(circle at 80% 90%, rgba(121, 169, 247, 0.5) 30px, transparent 30px),
            radial-gradient(circle at 90% 40%, rgba(213, 222, 247, 0.5) 50px, transparent 50px)
          `,
                paddingTop: '5rem',
            }}>
            <div className="container  mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div> {/* Deskripsi dan keahlian */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">| Tentang Saya |</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            {/* Ganti dengan deskripsi singkat tentang Anda */}
                            Saya adalah seorang pelajar dari SMKN 46 Jakarta yang awalnya masuk ke dalam dunia IT tanpa dasar komputer.
                            Namun, saya selalu berusaha untuk belajar sehingga dapat memahami alur pemrograman dan terus berkembang dengan pengalaman
                            dalam membangun aplikasi web yang interaktif dan responsif.
                            Saya senang mempelajari teknologi baru dan menerapkannya
                            dalam proyek-proyek saya.
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Keahlian</h2>
                        <ul className="list-disc list-inside text-lg text-gray-700"> {/* Ganti dengan keahlian Anda */}
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                {/* Tambahkan bagian pengalaman dan pencapaian di sini jika diperlukan */}
                <div className="mt-8 "> {/* Ajakan bertindak */}
                    <a

                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lihat CV Lengkap
                    </a>
                </div>

            </div>
        </section >
    );
};

export default About;