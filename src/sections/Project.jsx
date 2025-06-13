import React, { useState } from "react";
import dashboard from "../assets/dashboard-app.webp";
import ecommerce from "../assets/e-commerce-app.png";
import food from "../assets/food-app.jpg";
import travel from "../assets/travel-app.jpg";
import RevealOnScroll from "../ui/RevealOnScroll";

const techIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Chartjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
  Supabase: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  Vercel: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Tailwind: "https://www.svgrepo.com/show/374118/tailwind.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Google_Finance_API: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  Yahoo_Finance_API: "https://upload.wikimedia.org/wikipedia/commons/2/24/Yahoo%21_logo_2019.png",
  Pygame: "https://images.seeklogo.com/logo-png/44/1/pygame-logo-png_seeklogo-442059.png",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Web_scrapping:"https://img.icons8.com/?size=100&id=iqNj6kTa7Fnw&format=png&color=000000"

};

function Project() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Stock Notifier",
      Brief:
        "A real-time stock notifier that combines API integrations (Google Finance, Yahoo Finance) with web scraping techniques to ensure accurate and up-to-date stock price alerts and visualizations.",
      github: "https://github.com/DragoAdiii/Stock_Notifier",
      techStack: ["Python", "Google_Finance_API","Web_scrapping"]
    },
    {
      image: ecommerce,
      name: "Music Player Web App",
      Brief:
        "Interactive music player with playlist creation, real-time audio visualization, and user authentication.",
      github: "https://musicplayer.tazerling.com/",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      image: food,
      name: "Flappy Bird",
      Brief:
        "A fully functional version of the classic Flappy Bird game, developed using Python and Pygame.",
      github: "https://github.com/DragoAdiii/Flappy-bird",
      techStack: ["Python", "Pygame"]
    },
    {
      image: travel,
      name: "Crazy Sneaker",
      Brief:
        "Interactive sneaker product slider showcasing the latest designs using HTML, CSS, and JavaScript.",
      github: "https://dragoadiii.github.io/SneakerCol/",
      techStack: ["HTML", "CSS", "JavaScript"]
    },
    {
      image: dashboard,
      name: "Grocery Store Management System",
      Brief:
        "Inventory and order management system built with HTML, CSS, JavaScript, Python, and MySQL for full-stack development.",
      github: "https://github.com/DragoAdiii/Python-GS-",
      techStack: ["HTML", "CSS", "JavaScript", "Python", "MySQL"]
    },
    {
      image: dashboard, // Keeping the same image as previous one for iOS Calculator project
      name: "iOS Calculator",
      Brief:
        "A replica of the iOS calculator with a clean UI, built using HTML, CSS, and JavaScript.",
      github: "https://dragoadiii.github.io/IOS_Calculator/",
      techStack: ["HTML", "CSS", "JavaScript"]
    }
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:translate-y-1 transition-all hover:bg-cyan-900"
            >
              <h3 className="font-semibold text-xl mb-4 text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4">{project.Brief}</p>
              
              <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
                {project.techStack?.map((tech, index) => (
                  <img
                    key={index}
                    src={techIcons[tech]}
                    alt={tech}
                    title={tech}
                    className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>

              <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] cursor-pointer rounded-xl">
                <p className="text-gray-200">View Project</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                >
                  <img src={project.image} alt={`${project.name} Image`} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default Project;
