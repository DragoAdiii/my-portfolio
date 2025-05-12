import PP from "../assets/Photo.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/AdityaMamluskar-Resume.pdf";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const typingAnimationElement = document.getElementById("typing-animation");

    const typingTexts = [
      "Aspiring Data Analyst  ",
      "Full Stack Developer   ",
      "Cloud Computing Enthusiast  ",
      "Keyboardist  ",
      "Footballer  ",
    ];

    let timeoutIds = []; // Store timeout IDs for cleanup

    function playTypingAnimation(text) {
      // Clear existing text content before starting the animation
      typingAnimationElement.textContent = ""; 

      // Loop through each character and add it to the element
      for (let i = 0; i < text.length; i++) {
        const timeoutId = setTimeout(() => {
          typingAnimationElement.textContent += text[i];
        }, i * 100); // Adjust typing speed here
        timeoutIds.push(timeoutId);
      }

      // Once the animation is complete, reset the text and start over
      const cycleTimeoutId = setTimeout(() => {
        // Start the next typing animation cycle
        playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
      }, text.length * 200); // Adjust the cycle interval here
      timeoutIds.push(cycleTimeoutId);
    }

    // Start the typing animation loop
    playTypingAnimation(typingTexts[0]);

    // Cleanup function to clear timeouts
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-16 px-4 overflow-visible"
    >
      <div className="text-center z-0">
        <img
          src={PP}
          alt="profile img"
          className="w-[300px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[300px] object-cover object-bottom hover:translate-y-1 transition-all"
        />
      </div>

      <div className="text-center font-mono relative z-10 lg:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6 leading-snug">
          Hey! I'm Aditya Mamluskar 👋
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          <span id="typing-animation"></span>
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Aspiring Cloud Computing & Software Engineer currently pursuing Computer Engineering at VIT Mumbai.
          Passionate about full-stack development, problem-solving, and crafting impactful tech solutions —
          from web apps to hackathon prototypes. Let’s innovate and build something awesome!
        </p>

        <div className="flex justify-center items-center space-x-4 relative z-20">
          <a
            className="bg-gradient-to-r flex items-center from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative z-20 overflow-hidden"
            href="#contact"
          >
            Contact Me
          </a>
          <a
            className="bg-gradient-to-r flex items-center from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative z-20 overflow-hidden"
            href={resume}
            download
          >
            <p>Resume</p>
            <span className="h-5 ml-3 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
