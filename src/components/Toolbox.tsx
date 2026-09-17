import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiDocker,
} from "react-icons/si";

import { FaGithub, FaGitAlt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export function Toolbox() {
  const tools = [
    {
      name: "React",
      icon: <SiReact size={24} />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={24} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={24} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
    },
    {
      name: "Figma",
      icon: <SiFigma size={24} />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={24} />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
    },
    {
      name: "Docker",
      icon: <SiDocker size={25} />,
    },
    {
      name: "APIs REST",
      icon: <TbApi size={25} />,
    },
    {
      name: "VS Code",
      icon: <VscCode size={24} />,
    },
  ];

  return (
    <section className="toolbox" id="tecnologias">
      <div className="toolbox-container">
        <div className="toolbox-heading">
          <h2>My Toolbox</h2>

          <div className="toolbox-heading-detail">
            <span>TECHNOLOGIES I WORK WITH (AND LOVE)</span>

            <div className="toolbox-line" />
          </div>

          <span className="handwritten toolbox-note">
            Tools to
            <br />
            turn ideas
            <br />
            into reality. ♡
          </span>
        </div>

        <div className="toolbox-list">
          {tools.map((tool) => (
            <div className="toolbox-item" key={tool.name}>
              <div className="toolbox-icon">
                {tool.icon}
              </div>

              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}