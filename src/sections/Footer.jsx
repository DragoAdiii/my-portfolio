import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex justify-center mb-10">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl px-10 py-8 shadow-lg flex flex-col items-center gap-6 w-fit">
        <div className="flex gap-8 justify-center">
          <a
            href="https://www.linkedin.com/in/aditya-mamluskar-793204279/"
            className="border p-3 text-3xl rounded-full hover:scale-125 hover:shadow-lg hover:bg-blue-800 transition-all duration-300 ease-in-out bg-blue-700 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/DragoAdiii"
            className="border p-3 text-3xl rounded-full hover:scale-125 hover:shadow-lg hover:bg-gray-900 transition-all duration-300 ease-in-out bg-gray-800 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p className="text-2xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-pulse">
        Thanks for scrolling this far. Let’s connect professionally! 💼
        </p>
      </div>
    </footer>
  );
}

export default Footer;
