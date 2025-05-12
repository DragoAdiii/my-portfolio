import React from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

function About() {
  const skills = [
    "Html",
    "css",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Github",
    "python",
    "C++",
    "Java",
    "MySQL",
    "flask",
  ];

  const skillIcons = {
    Html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Tailwind CSS": "https://www.svgrepo.com/show/374118/tailwind.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
  };


  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {" "}
              Hey there! I'm Aditya Mamluskar, a B.E. Computer Engineering student at Vidyalankar Institute of Technology. I started my journey with Web Development back in junior college and have since expanded my skillset across React, Python, C++, Java, MySQL, and now Cloud Computing. I’ve built full-stack projects, developed games with Python, and even used NLP in hackathons to automate workflows. I'm a certified Data Analyst (CDAC, Juhu) and constantly explore new domains like DSA and cloud infrastructure. Off the screen, I’m either playing football or jamming on the keyboard 🎹.
              {" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">Skills</h3>
              <div className="flex justify-center flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    className="flex items-center gap-2 bg-blue-500/50 text-blue-100 py-2 px-2 rounded-full hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition-all shadow-md backdrop-blur-sm hover:scale-105"
                    key={index}
                  >
                    <img
                      src={skillIcons[skill]}
                      alt={skill}
                      className="w-5 h-5 object-contain"
                      title={skill}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">Education</h3>
              <ul className="pl-5 list-disc list-inside text-lg text-blue-400 ">
                <li >
                  <strong>
                    {""}
                    <em>B.tech in Computer Science</em>{" "}
                  </strong>
                  Vidyalankar Institute of Technology [2022-2026]
                </li>
                <li>NHPS 12th Grade [2020-2022]</li>
              </ul>
            </div>
          </div>
          {/* <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  {""}
                  <em>Developer</em>{" "}
                </strong>
                <br />
                Remote | 2023 - Present
                <br />- Developed and maintained web applications using React.js
                adipisicing
              </li>
              <li>NHPS 12th Grade [2020-2022]</li>
            </ul>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
