import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="flex flex-col lg:flex-row bg-[#074643] items-start justify-center min-h-screen px-10 md:py-36 py-10 relative overflow-hidden">
        <div className="flex flex-col z-20"> 
          <h1 className="md:text-4xl text-2xl font-bold text-black">
            HELLO I AM <br />
            <span className="text-4xl md:text-6xl text-gray-800">TAHA KHAN</span>
          </h1>
          <p className="mt-4 text-black">
            GENERATIVE AI CHATBOT, FLUTTER MOBILE APP & MERN STACK WEB Developer<br/>
            Aspiring Ai Enthusiast" <br/>  JavaScript |TypeScript | Html | CSS
          </p>

          <div className="flex mt-6 space-x-4">
            <a
              href="https:/github.com/TahaKhankoti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/taha-khan-823900291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://www.instagram.com/tk_tahakhan04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600"
            >
              <FaInstagram size={35} />
            </a>
            <a
              href="https://www.facebook.com/share/15H57tP2QR/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900"
            >
              <FaFacebook size={35} />
            </a>
          </div>
          <div className="flex mt-6 space-x-4">
            <Link
              href="\assets\Taha_Khan_CV.pdf"
              className="inline-flex px-6 py-2 bg-white text-[#074643] rounded-full border border-[#074643] hover:bg-[#398E8A] hover:text-white transition duration-300"
            >
              <span className="mr-2 text-sm">Resume</span>
              <FaDownload size={26} />
            </Link>
            <Link
              href="/Contact"
              className="inline-flex px-6 py-2 bg-white text-[#074643] rounded-full border border-[#074643] hover:bg-[#398E8A] hover:text-white transition duration-300"
            >
             <span className="mr-2 text-sm">Contact</span>
             <FaPhone size={25} />
            </Link>
          </div>
        </div>

        <section className="relative mt-12 lg:mt-0 lg:ml-12 flex-shrink-0 z-20">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                width={2000}
                height={2000}
                src="/assets/Logo.png"
                alt="Profile"
                className="w-96 h-96 rounded-full object-cover border-4 border-black"
              />
            </div>
          </div>
        </section>


        <div className="absolute top-0 left-0 w-full flex justify-center z-10">
          <Image
            width={1000}
            height={1000}
            src={"/assets/Vector 3.png"}
            alt="Vector"
            className="md:mt-64 mt-[710px] w-[100%] object-contain"
          />
        </div>
      </main>
</>    
  );
}
