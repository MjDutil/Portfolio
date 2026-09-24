import type { CSSProperties, ReactNode } from "react";
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
import { TbApi } from "react-icons/tb";

import { useLanguage } from "../context/LanguageContext";

type Tool = {
  name: string;
  icon: ReactNode;
};

// Ferramentas separadas por categoria.
// Cada grupo tem 5 itens para as linhas ficarem sempre completas.
const frontendTools: Tool[] = [
  { name: "React", icon: <SiReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "JavaScript", icon: <SiJavascript size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
];

const workflowTools: Tool[] = [
  { name: "Figma", icon: <SiFigma size={24} /> },
  { name: "Git", icon: <FaGitAlt size={24} /> },
  { name: "GitHub", icon: <FaGithub size={24} /> },
  { name: "Docker", icon: <SiDocker size={25} /> },
  { name: "APIs REST", icon: <TbApi size={25} /> },
];

export function Toolbox() {
  const { t } = useLanguage();

  const groups = [
    { key: "frontend", label: t.toolbox.groups.frontend, tools: frontendTools },
    { key: "workflow", label: t.toolbox.groups.workflow, tools: workflowTools },
  ];

  return (
    <section className="toolbox" id="tecnologias">
      <div className="toolbox-container">
        <div className="toolbox-heading" data-reveal>
          <h2>{t.toolbox.title}</h2>

          <div className="toolbox-heading-detail">
            <span>{t.toolbox.subtitle}</span>

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

        <div className="toolbox-groups">
          {groups.map((group, index) => (
            <div
              className={`toolbox-group toolbox-group--${group.key}`}
              key={group.key}
              data-reveal
              style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
            >
              <span className="toolbox-group-label">
                <span className="toolbox-group-number">0{index + 1}</span>
                {group.label}
              </span>

              <ul className="toolbox-list">
                {group.tools.map((tool) => (
                  <li className="toolbox-item" key={tool.name}>
                    <span className="toolbox-icon" aria-hidden="true">
                      {tool.icon}
                    </span>

                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
