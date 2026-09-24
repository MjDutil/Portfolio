import type { CSSProperties } from "react";
import { ArrowUpRight, Bug, CloudRain, Flame, ShieldPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PhoneFrame } from "./PhoneFrame";
import { duScreens } from "../data/du";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="projects" id="projetos">
      <div className="projects-container">

        {/* CABEÇALHO */}
        <div className="projects-heading" data-reveal>
          <h2>{t.projects.heading}</h2>

          <div className="projects-heading-detail">
            <span>{t.projects.detail}</span>
            <div className="projects-heading-line" />
          </div>
        </div>

        {/* PROJETOS */}
        <div className="projects-grid">

          {/* ==============================
              PROJETO 01 — GEOSHIELD
          =============================== */}
          <article
            className="project-card project-card--geoshield"
            data-reveal
          >

            <Link
              to="/projetos/geoshield"
              className="project-card-link"
              aria-label={t.projects.GeoShield.linkLabel}
            />

            <div className="project-cover project-cover-mist">

              <span className="project-cover-brand">
                GEOSHIELD
              </span>

              <div className="project-cover-window">

                <div className="project-window-top">
                  <span>&lt;/&gt;</span>

                  <div>
                    <span className="window-dot dot-pink" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                </div>

                <h3>
                  Geo
                  <br />
                  Shield.
                </h3>

                <div className="project-window-bottom">
                  <span>
                    {t.projects.GeoShield.coverCategory}
                  </span>
                </div>

              </div>

              {/* Captura do mapa com os marcadores do app */}
              <div className="project-cover-map" aria-hidden="true">
                <img
                  src="/projects/geoshield/map-desktop.webp"
                  alt=""
                  loading="lazy"
                />

                <span className="map-pin map-pin--green">
                  <ShieldPlus size={14} strokeWidth={2.2} />
                </span>
                <span className="map-pin map-pin--orange">
                  <Bug size={14} strokeWidth={2.2} />
                </span>
                <span className="map-pin map-pin--red">
                  <Flame size={14} strokeWidth={2.2} />
                </span>
                <span className="map-pin map-pin--blue">
                  <CloudRain size={14} strokeWidth={2.2} />
                </span>

              </div>
            </div>

            <div className="project-info">
              <div>
                <h3>GeoShield</h3>

                <p>
                  {t.projects.GeoShield.description}
                </p>
              </div>

              <div className="project-year">
                2025
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Mapbox GL JS</span>
              <span>{t.projects.GeoShield.tags.responsive}</span>
            </div>

          </article>


          {/* ==============================
              PROJETO 02 — DU
          =============================== */}
          <article
            className="project-card project-card--du"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >

            <Link
              to="/projetos/du"
              className="project-card-link"
              aria-label={t.projects.du.linkLabel}
            />

            <div className="project-cover project-cover-lilac">

              <div className="project-placeholder">

                <span className="project-number">
                  PROJECT / 02
                </span>

                <h3>
                  DU
                  <br />
                  Driver
                  <br />
                  Universitário.
                </h3>

                <p>
                  {t.projects.du.coverDescription}
                </p>

                <div className="project-cover-phones" aria-hidden="true">
                  <PhoneFrame
                    src={duScreens.chat}
                    label={t.duPage.screens.chat}
                    className="phone--mini project-phone-back"
                  />
                  <PhoneFrame
                    src={duScreens.home}
                    label={t.duPage.screens.home}
                    className="phone--mini project-phone-front"
                  />
                </div>

              </div>

            </div>

            <div className="project-info">
              <div>
                <h3>DU — Driver Universitário</h3>

                <p>
                  {t.projects.du.description}
                </p>
              </div>

              <div className="project-year">
                2026
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="project-tags">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>Expo</span>
              <span>Mobile</span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}
