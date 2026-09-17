import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contato">
      <div className="contact-container">

        <div className="contact-card">

          {/* ESQUERDA */}
          <div className="contact-title-area">

            <h2>{t.contact.title}</h2>

            <span className="contact-spark">
              ✦
            </span>

          </div>

          {/* CENTRO */}
          <div className="contact-content">

            <p>{t.contact.text}</p>

            <div className="contact-actions">

              <a
                href="mailto:mjuliadutil@gmail.com"
                className="contact-button"
              >
                {t.contact.button}
                <ArrowRight size={16} />
              </a>

              <div className="contact-socials">

                <a
                  href="https://github.com/MjDutil"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://linkedin.com/in/majudutil"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="mailto:mjuliadutil@gmail.com"
                  aria-label="E-mail"
                >
                  <Mail size={19} />
                </a>

              </div>

            </div>

          </div>

          {/* DIREITA — REFERÊNCIA TAYLOR */}
          <div className="contact-ribbon-area">

            <svg
              className="contact-ribbon"
              viewBox="200 -5 500 260"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="friendship-ribbon-path"
                  d="
                    M 220 -25
                    C 295 5, 310 50, 340 68
                    C 375 90, 402 70, 430 48
                    C 458 25, 492 20, 520 48
                    C 550 80, 555 125, 565 165
                    C 575 205, 592 228, 620 238
                    C 640 250, 685 245, 735 235
                  "
                />
              </defs>

              {/* FAIXA */}
              <use
                href="#friendship-ribbon-path"
                fill="none"
                stroke="#DDE2D5"
                strokeWidth="35"
                strokeLinecap="round"
              />

              {/* CONTORNO BEM SUTIL */}
              <use
                href="#friendship-ribbon-path"
                fill="none"
                stroke="#C9D1C2"
                strokeWidth="35"
                strokeLinecap="round"
                opacity="0.45"
              />

              {/* TEXTO */}
              <text
                className="ribbon-text"
                textAnchor="middle"
                dominantBaseline="middle"
                transform="translate(0 1)"
              >
                <textPath
                  href="#friendship-ribbon-path"
                  startOffset="50%"
                >
                  MAKE THE FRIENDSHIP BRACELETS WITH YOUR WORK ♡
                </textPath>
              </text>

            </svg>

          </div>

        </div>

      </div>
    </section>
  );
}