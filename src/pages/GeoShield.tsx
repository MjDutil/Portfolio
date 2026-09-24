import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";

import { Header } from "../components/Header";
import { GeoShieldEditorialShowcase } from "../components/GeoShieldEditorialShowcase";
import { GeoShieldFolders } from "../components/GeoShieldFolders";
import { useLanguage } from "../context/LanguageContext";

import "./GeoShield.css";

export function GeoShield() {
  const { t } = useLanguage();
  const content = t.geoShieldPage;

  return (
    <>
      <Header />

      <main className="geoshield-page">
        {/* Apresentação: título à esquerda e duas capturas sobrepostas à direita. */}
        <section className="geoshield-hero" aria-labelledby="geoshield-title">
          <div className="geoshield-hero-circle" aria-hidden="true" />
          <svg
            className="geoshield-hero-wave"
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 150 C 240 60, 500 50, 760 110 S 1220 170, 1440 60 L 1440 120 C 1220 230, 980 190, 760 170 S 250 120, 0 210 Z" />
          </svg>

          <div className="geoshield-container">
            {/* Identificação do projeto e botão de retorno */}

            <div className="geoshield-hero-top">
              <div className="geoshield-hero-eyebrow">
                <span className="geoshield-hero-number">01 / 02</span>

                <span>{content.category}</span>
              </div>

              <Link to="/#projetos" className="geoshield-back">
                <ArrowLeft size={17} />
                <span>{content.back}</span>
              </Link>
            </div>

            <GeoShieldEditorialShowcase />

            <div className="geoshield-project-meta">
              <div className="geoshield-meta-item">
                <span>{content.project}</span>
                <strong>GeoShield</strong>
              </div>
              <div className="geoshield-meta-item">
                <span>{content.area}</span>
                <strong>{content.areaValue}</strong>
              </div>
              <div className="geoshield-meta-item">
                <span>{content.technologies}</span>
                <strong>React · TypeScript · Mapbox GL JS</strong>
              </div>
              <a href="#geoshield-about" className="geoshield-scroll-link">
                <span>{content.scroll}</span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Fichário com cinco fichas: do problema ao que eu aprendi. */}
        <GeoShieldFolders />

        {/* PRÓXIMO PROJETO */}
        <section className="gs-next" aria-labelledby="gs-next-title">
          <div className="geoshield-container">
            <div className="gs-next-card">
              <div className="gs-next-copy">
                <span className="gs-next-label">{content.nextProject.label}</span>
                <h2 id="gs-next-title">{content.nextProject.title}</h2>
                <p>{content.nextProject.description}</p>
              </div>

              <div className="gs-next-side">
                <Link to="/projetos/du" className="gs-next-button">
                  {content.nextProject.button}
                  <ArrowUpRight size={16} />
                </Link>

                <Link to="/#projetos" className="gs-next-all">
                  {content.nextProject.back}
                </Link>
              </div>

              <span className="gs-next-mark" aria-hidden="true">
                DU.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
