import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="projects" id="projetos">
      <div className="projects-container">

        {/* CABEÇALHO */}
        <div className="projects-heading">
          <h2>{t.projects.heading}</h2>

          <div className="projects-heading-detail">
            <span>{t.projects.detail}</span>
            <div className="projects-heading-line" />
          </div>

          <a href="#projetos" className="projects-view-all">
            {t.projects.viewAll}
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* PROJETOS */}
        <div className="projects-grid">

          {/* ==============================
              PROJETO 01 — GEOSHIELD
          =============================== */}
          <article className="project-card">

            <div className="project-cover project-cover-green">

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
                  <span>WEB · TECNOLOGIA · INTERFACE</span>

                  <ArrowUpRight size={28} />
                </div>

              </div>
            </div>

            <div className="project-info">
                <div>
                    <h3>Climate Shield</h3>

                    <p>
                    Plataforma para visualização de dados climáticos e geossociais
                    em cenários de risco.
                    </p>
                </div>

                <div className="project-year">
                    2025
                    <ArrowUpRight size={18} />
                </div>
                </div>

                <div className="project-tags">
                <span>React.js</span>
                <span>REST APIs</span>
                <span>Responsividade</span>
                <span>Acessibilidade</span>
                </div>

          </article>


          {/* ==============================
              PROJETO 02 — DU
          =============================== */}
          <article className="project-card">

            <div className="project-cover project-cover-soft">

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
                  Mobilidade pensada para o ambiente universitário.
                </p>

                <ArrowUpRight
                  className="project-placeholder-arrow"
                  size={32}
                />

              </div>

            </div>

            <div className="project-info">
                <div>
                    <h3>DU — Driver Universitário</h3>

                    <p>
                    Aplicação de mobilidade colaborativa para conectar e facilitar
                    o transporte entre universitários.
                    </p>
                </div>

                <div className="project-year">
                    2025
                    <ArrowUpRight size={18} />
                </div>
                </div>

                <div className="project-tags">
                <span>React Native</span>
                <span>JavaScript</span>
                <span>UI/UX</span>
                <span>Mobile</span>
                </div>

          </article>

        </div>

      </div>
    </section>
  );
}

function useLanguage(): {
  t: {
    projects: {
      heading: string;
      detail: string;
      viewAll: string;
    };
  };
} {
  const translations = {
    pt: {
      projects: {
        heading: "Projetos",
        detail: "Soluções digitais com foco em produto, experiência e impacto real.",
        viewAll: "Ver todos",
      },
    },
    en: {
      projects: {
        heading: "Projects",
        detail: "Digital solutions focused on product, experience, and real impact.",
        viewAll: "View all",
      },
    },
  } as const;

  const locale =
    typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("en")
      ? "en"
      : "pt";

  return { t: translations[locale] };
}
