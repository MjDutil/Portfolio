import type { CSSProperties } from "react";
import {
  ArrowRight,
  BookOpen,
  Download,
  GraduationCap,
  Rocket,
  MapPin,
  Globe2,
  Sprout,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import maria from "../assets/maria.webp";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/profile";

// Atraso da animação de entrada de cada elemento (em ms).
const enter = (delay: number) => ({ "--enter-delay": `${delay}ms` }) as CSSProperties;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        {/* CONTEÚDO PRINCIPAL */}
        <div className="hero-grid">
          {/* ESQUERDA */}
          <div className="hero-content">
            <div className="hero-eyebrow enter" style={enter(0)}>
              {t.hero.hello}
            </div>

            <div className="hero-editorial">
              {/* COLUNA MARIA / DUTIL */}
              <div className="hero-name-left">
                <span className="hero-name-maria enter" style={enter(80)}>
                  Maria
                </span>

                <span className="hero-name-dutil enter" style={enter(200)}>
                  Dutil
                </span>

                <span className="handwritten hero-note-left enter" style={enter(700)}>
                  Nice
                  <br />
                  to meet
                  <br />
                  you! ♡
                </span>
              </div>

              {/* COLUNA JÚLIA / TEXTO */}
              <div className="hero-name-right">
                <span className="hero-name-julia enter" style={enter(140)}>
                  Júlia
                </span>

                <div className="hero-role enter" style={enter(320)}>
                  {t.hero.role.firstLine}
                  <br />
                  {t.hero.role.secondLine}
                </div>

                <p className="hero-intro enter" style={enter(400)}>
                  {t.hero.description}
                </p>

                <div className="hero-buttons enter" style={enter(480)}>
                  <a href="#projetos" className="button-primary">
                    {t.hero.projectsButton}
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  {profile.resume && (
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      <Download size={16} />
                      {t.hero.resumeButton}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* FOTO */}
          <div className="hero-photo-wrapper enter enter--scale" style={enter(150)}>
            <div className="hero-photo">
              <img
                src={maria}
                alt="Maria Júlia Dutil"
                width={900}
                height={1125}
                fetchPriority="high"
              />
            </div>

            {/* STICKER */}
            <span className="hero-sticker">{t.hero.sticker}</span>
          </div>

          {/* CARDS */}
          <div className="hero-cards" id="sobre">
            <article className="info-card info-card-green enter enter--side" style={enter(450)}>
              <GraduationCap size={25} />

              <div>
                <span className="info-card-label">{t.hero.cards.currently.label}</span>

                <h3>{t.hero.cards.currently.title}</h3>

                <p>{t.hero.cards.currently.description}</p>
              </div>
            </article>

            <article className="info-card info-card-peach enter enter--side" style={enter(560)}>
              <Rocket size={24} />

              <div>
                <span className="info-card-label">{t.hero.cards.shipped.label}</span>

                <h3>{t.hero.cards.shipped.title}</h3>

                <p>{t.hero.cards.shipped.description}</p>
              </div>
            </article>

            <article className="info-card info-card-lilac enter enter--side" style={enter(670)}>
              <BookOpen size={24} />

              <div>
                <span className="info-card-label">{t.hero.cards.learning.label}</span>

                <h3>{t.hero.cards.learning.title}</h3>

                <p>{t.hero.cards.learning.description}</p>
              </div>
            </article>
          </div>
        </div>

        {/* INFORMAÇÕES ABAIXO */}
        <div className="hero-meta enter" style={enter(800)}>
          <div className="hero-meta-item">
            <div className="hero-meta-icon">
              <MapPin size={19} strokeWidth={2.2} />
            </div>

            <div className="hero-meta-text">
              <span>{t.hero.meta.basedIn.label}</span>
              <strong> {t.hero.meta.basedIn.value}</strong>
            </div>
          </div>

          <div className="hero-meta-item">
            <div className="hero-meta-icon">
              <Globe2 size={20} strokeWidth={2.1} />
            </div>

            <div className="hero-meta-text">
              <span>{t.hero.meta.availableFor.label}</span>
              <strong> {t.hero.meta.availableFor.value}</strong>
            </div>
          </div>

          <div className="hero-meta-item">
            <div className="hero-meta-icon">
              <Sprout size={20} strokeWidth={2.2} />
            </div>

            <div className="hero-meta-text">
              <span>{t.hero.meta.interestedIn.label}</span>
              <strong> {t.hero.meta.interestedIn.value}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
