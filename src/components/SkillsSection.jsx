import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCplusplus,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbLetterC } from "react-icons/tb";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },

  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },

  { name: "C", icon: TbLetterC, color: "text-blue-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },

  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },

  {name: "TypeScript",icon: SiTypescript,color: "text-blue-500"},
  {name: "Redux",icon: SiRedux,color: "text-purple-500"},
];
export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 ">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-primary/20 bg-card p-3 w-30 h-30 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
              >
                <Icon className={`text-6xl ${skill.color} mb-4`} />

                <h3 className="font-semibold text-center">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
