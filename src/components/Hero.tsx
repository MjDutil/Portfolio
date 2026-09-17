import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Rocket,
  MapPin,
  Globe2,
  Sprout,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import maria from "../assets/maria.png";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        {/* CONTEÚDO PRINCIPAL */}
        <div className="hero-grid">

          {/* ESQUERDA */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              {t.hero.hello}
            </div>

            <div className="hero-editorial">

              {/* COLUNA MARIA / DUTIL */}
              <div className="hero-name-left">

                <span className="hero-name-maria">
                  Maria
                </span>

                <span className="hero-name-dutil">
                  Dutil
                </span>

                <span className="handwritten hero-note-left">
                  Nice
                  <br />
                  to meet
                  <br />
                  you! ♡
                </span>

              </div>

              {/* COLUNA JÚLIA / TEXTO */}
              <div className="hero-name-right">

                <span className="hero-name-julia">
                  Júlia
                </span>

                <div className="hero-role">
                  {t.hero.role.firstLine}
                  <br />
                  {t.hero.role.secondLine}
                </div>

                <p className="hero-intro">
                  {t.hero.description}
                </p>

                <div className="hero-buttons">

                  <a href="#projetos" className="button-primary">
                    {t.hero.projectsButton}
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="https://github.com/MjDutil"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* FOTO */}
          <div className="hero-photo-wrapper">

            <div className="hero-photo">
              <img
                src={maria}
                alt="Maria Julia Dutil"
              />
            </div>

            <span className="handwritten hero-note-photo">
              Same
              <br />
              big ideas,
              <br />
              smaller
              <br />
              screens ♡
            </span>

          </div>

          {/* CARDS */}
          <div className="hero-cards">

            <article className="info-card info-card-green">

              <GraduationCap size={25} />

              <div>
                <span className="info-card-label">
                  {t.hero.cards.currently.label}
                </span>

                <h3>
                  {t.hero.cards.currently.title}
                </h3>

                <p>
                  {t.hero.cards.currently.description}
                </p>
              </div>

            </article>

            <article className="info-card info-card-peach">

              <Rocket size={24} />

              <div>
                <span className="info-card-label">
                  {t.hero.cards.shipped.label}
                </span>

                <h3>
                  {t.hero.cards.shipped.title}
                </h3>

                <p>
                  {t.hero.cards.shipped.description}
                </p>
              </div>

            </article>

            <article className="info-card info-card-gray">

              <BookOpen size={24} />

              <div>
                <span className="info-card-label">
                  {t.hero.cards.learning.label}
                </span>

                <h3>
                  {t.hero.cards.learning.title}
                </h3>

                <p>
                  {t.hero.cards.learning.description}
                </p>
              </div>

            </article>

            <span className="handwritten hero-note-right">
              Good
              <br />
              interfaces,
              <br />
              happier people.
              <br />
              ♡
            </span>

          </div>

        </div>

        {/* INFORMAÇÕES ABAIXO */}
        <div className="hero-meta">

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