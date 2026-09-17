import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import mirrorball from "../assets/mirrorball.png";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <a
          href="#inicio"
          className="header-logo"
          aria-label="Maju Dutil"
        >
          <img
            src={mirrorball}
            alt=""
            className="header-logo-image"
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="header-nav">
          <a href="#projetos">{t.header.work}</a>
          <a href="#sobre">{t.header.about}</a>
          <a href="#notas">{t.header.notes}</a>
        </nav>

        {/* LADO DIREITO */}
        <div className="header-right">

          <div
            className="language-switch"
            aria-label={t.header.languageSelector}
          >
            <button
              type="button"
              className={language === "pt" ? "active" : ""}
              onClick={() => setLanguage("pt")}
            >
              PT
            </button>

            <span className="language-divider" />

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          <a href="#contato" className="header-cta">
            {t.header.contact}
            <ArrowRight size={16} />
          </a>

        </div>

      </div>
    </header>
  );
}