import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">Gunawan Wibisono</h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
              Saya adalah seorang DevOps enthusiast dengan 2 tahun pengalaman sebagai System Administrator di Fleet Management System. Menguasai Linux, pemrograman (Python, Go, JavaScript), dan integrasi solusi DevOps, saya fokus pada pengelolaan infrastruktur dan optimalisasi sistem yang efisien. Siap menghadapi tantangan baru di dunia teknologi.
              </p>
              {/* <p>
                Dengan latar belakang yang kuat dalam pemrograman (Python, Go, JavaScript) saya mampu mengintegrasikan solusi DevOps yang inovatif dan efisien.
              </p>
              <p>
                Saya menguasai berbagai sistem operasi, dengan spesialisasi di Linux, dan selalu bersemangat untuk menghadapi tantangan baru dalam dunia teknologi yang terus berkembang.
              </p> */}
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#contact" className="inline-block bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">Get in Touch</a>
              <a href="/gunawan_resume.pdf" download="gunawan_resume.pdf" className="inline-block bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">Resume</a>
              {/* <a href="/resume.pdf" download className="inline-block bg-white text-gray-900 py-2 px-6 rounded-full border border-gray-900 hover:bg-gray-100 transition duration-300">Download CV</a> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/gunawan.png"
                alt="Gunawan Wibisono"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}