export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* IDENTIDADE */}
        <div className="footer-brand">
          <span className="footer-name">
            {t("footer.name")}
          </span>

          <div className="footer-brand-meta">
            <span>{t("footer.frontendDeveloper")}</span>
          </div>
        </div>

        {/* FRASE CENTRAL */}
        <div className="footer-message">
          {t("footer.smallDetails")} <em>{t("footer.brightWeb")}</em> ♡
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="footer-nav">
          <a href="#inicio">{t("footer.home")}</a>
          <a href="#projetos">{t("footer.projects")}</a>
          <a href="#tecnologias">{t("footer.technologies")}</a>
          <a href="#contato">{t("footer.contact")}</a>
        </nav>

        <span className="footer-year">
          © 2026
        </span>

      </div>
    </footer>
  );
}

function useLanguage(): { t: (key: string) => string } {
  const translations: Record<string, string> = {
    "footer.frontendDeveloper": "Frontend Developer",
    "footer.home": "Início",
    "footer.projects": "Projetos",
    "footer.technologies": "Tecnologias",
    "footer.contact": "Contato",
    "footer.smallDetails": "Small details.",
    "footer.brightWeb": "A brighter web.",
    "footer.name": "Maria Júlia",
    "footer.lastname": "",
  };

  const translate = (key: string): string => {
    const value = translations[key];
    return value ?? key;
  };

  return { t: translate };
}
