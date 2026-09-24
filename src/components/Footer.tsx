import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* IDENTIDADE */}
        <div className="footer-brand">
          <span className="footer-name">Maria Júlia</span>

          <div className="footer-brand-meta">
            <span>{t.footer.frontendDeveloper}</span>
          </div>
        </div>

        {/* FRASE CENTRAL */}
        <div className="footer-message">
          Small details. <em>A brighter web</em> ♡
        </div>

        {/* NAVEGAÇÃO */}
        <nav className="footer-nav">
          <a href="#inicio">{t.footer.home}</a>
          <a href="#projetos">{t.footer.projects}</a>
          <a href="#tecnologias">{t.footer.technologies}</a>
          <a href="#contato">{t.footer.contact}</a>
        </nav>

        <span className="footer-year">© 2026</span>
      </div>
    </footer>
  );
}
