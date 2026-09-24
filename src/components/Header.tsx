import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import mirrorball from "../assets/mirrorball.webp";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  // Fecha o menu com a tecla Esc.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`header ${menuOpen ? "header--menu-open" : ""}`}>
      <div className="header-container">
        {/* LOGO */}

        <Link to="/" className="header-logo" aria-label="Maria Júlia Dutil - Início">
          <img src={mirrorball} alt="" className="header-logo-image" width={40} height={40} />
        </Link>

        {/* NAVEGAÇÃO */}

        <nav
          className="header-nav"
          id="header-nav"
          aria-label={t.header.navigationLabel}
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/#projetos">{t.header.work}</Link>

          <Link to="/#sobre">{t.header.about}</Link>

          <Link to="/#contato" className="header-nav-cta">
            {t.header.contact}
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* LADO DIREITO */}

        <div className="header-right">
          {/* SELETOR DE IDIOMAS */}

          <div className="language-switch" role="group" aria-label={t.header.languageSelector}>
            <button
              type="button"
              className={language === "pt" ? "active" : ""}
              onClick={() => setLanguage("pt")}
              aria-pressed={language === "pt"}
            >
              PT
            </button>

            <span className="language-divider" aria-hidden="true" />

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          {/* CONTATO */}

          <Link to="/#contato" className="header-cta">
            {t.header.contact}

            <ArrowRight size={16} />
          </Link>

          {/* MENU MOBILE */}

          <button
            type="button"
            className="header-menu-button"
            aria-expanded={menuOpen}
            aria-controls="header-nav"
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
