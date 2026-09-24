import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// Abertura do estudo de caso: texto à esquerda e duas capturas sobrepostas à direita.
export function GeoShieldEditorialShowcase() {
  const { t } = useLanguage();
  const content = t.geoShieldPage;

  return (
    <div className="gs-showcase">
      <div className="gs-showcase-copy">
        <h1 id="geoshield-title" className="gs-showcase-title">
          {content.title}
          <span className="gs-showcase-title-spark" aria-hidden="true">
            ✦
          </span>
        </h1>

        <p className="gs-showcase-subtitle">{content.subtitle}</p>

        <p className="gs-showcase-text">{content.description}</p>

        <span className="gs-showcase-author">{content.author}</span>

        <div className="gs-showcase-tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Mapbox GL JS</span>
        </div>

        <a
          href="https://github.com/MjDutil/GeoShield"
          target="_blank"
          rel="noopener noreferrer"
          className="gs-showcase-github"
        >
          <FaGithub size={16} />
          {content.repositoryButton}
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="gs-showcase-media">
        <span className="gs-showcase-spark" aria-hidden="true">
          ✦
        </span>

        {/* Card de trás: aparece deslocado para baixo e para a direita. */}
        <figure className="gs-showcase-card gs-showcase-card--back">
          <img
            src="/projects/geoshield/inicial.webp"
            alt={content.showcaseAlt.back}
            width={1873}
            height={968}
          />
        </figure>

        {/* Card da frente: a tela principal do mapa. */}
        <figure className="gs-showcase-card gs-showcase-card--front">
          <img
            src="/projects/geoshield/map-desktop.webp"
            alt={content.showcaseAlt.front}
            width={1894}
            height={958}
            fetchPriority="high"
          />
        </figure>
      </div>
    </div>
  );
}
