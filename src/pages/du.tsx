import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Car, Check, MapPin, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Header } from "../components/Header";
import { PhoneFrame } from "../components/PhoneFrame";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { duCode, duPalette, duRepository, duScreens } from "../data/du";
import { highlightLine, pad } from "../utils/code";

import "./Du.css";

// Destaque de sintaxe simples para o trecho de código opcional.
const tokenPattern =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`)|\b(const|let|await|async|return|new|if|import|from|export|type)\b|\b(\d+)\b/g;

// Faz o carrinho andar pela linha da rota conforme a página rola.
function useRoadProgress() {
  const roadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const road = roadRef.current;
    if (!road) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = road.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      road.style.setProperty("--road-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return roadRef;
}

export function Du() {
  const { t } = useLanguage();
  const c = t.duPage;
  const roadRef = useRoadProgress();
  const [signupStep, setSignupStep] = useState(0);

  useReveal();

  const signupTotal = duScreens.signup.length;

  // Cabeçalho de cada parada da rota
  const stop = (number: number, children: ReactNode, className = "") => (
    <article className={`du-stop ${className}`} data-reveal>
      <span className="du-stop-marker" aria-hidden="true">{pad(number)}</span>
      <span className="du-stop-label">{c.route.stop} {pad(number)}</span>
      {children}
    </article>
  );

  return (
    <>
      <Header />

      <main className="du-page">

        {/* =========================================
            APRESENTAÇÃO
        ========================================= */}
        <section className="du-hero" aria-labelledby="du-title">
          {/* Decoração do fundo: círculo lilás e uma rota tracejada com pino */}
          <div className="du-hero-circle" aria-hidden="true" />
          <svg
            className="du-hero-route"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M-20 170 C 220 70, 430 60, 640 120 S 1040 190, 1250 90 S 1400 40, 1460 60" />
          </svg>
          <span className="du-hero-pin" aria-hidden="true">
            <MapPin size={20} strokeWidth={2} />
          </span>

          <div className="du-container">

            <div className="du-hero-top">
              <div className="du-eyebrow">
                <span className="du-eyebrow-number">02 / 02</span>
                <span>{c.category}</span>
              </div>

              <Link to="/#projetos" className="du-back">
                <ArrowLeft size={17} />
                <span>{c.back}</span>
              </Link>
            </div>

            <div className="du-hero-grid">
              <div className="du-hero-copy">
                <h1 id="du-title" className="du-title">
                  {c.title}
                  <span className="du-title-spark" aria-hidden="true">✦</span>
                </h1>

                <p className="du-subtitle">{c.subtitle}</p>
                <p className="du-text">{c.description}</p>

                <span className="du-author">{c.author}</span>

                <div className="du-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>TypeScript</span>
                  <span>Zustand</span>
                </div>

                {duRepository && (
                  <a
                    href={duRepository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="du-github"
                  >
                    <FaGithub size={16} />
                    {c.repositoryButton}
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              {/* Três celulares em leque */}
              <div className="du-hero-phones">
                <span className="du-hero-blob" aria-hidden="true" />
                <span className="du-hero-spark" aria-hidden="true">✦</span>

                {/* Notificação flutuante, como as do app */}
                <div className="du-hero-toast" aria-hidden="true">
                  <span className="du-hero-toast-icon">
                    <Check size={14} strokeWidth={2.6} />
                  </span>
                  <div>
                    <strong>{c.toast.title}</strong>
                    <span>{c.toast.detail}</span>
                  </div>
                </div>
                <PhoneFrame src={duScreens.chat} label={c.screens.chat} className="du-fan du-fan--left" />
                <PhoneFrame src={duScreens.tracking} label={c.screens.tracking} className="du-fan du-fan--right" />
                <PhoneFrame src={duScreens.home} label={c.screens.home} className="du-fan du-fan--center" priority />
              </div>
            </div>

            <div className="du-meta">
              <div className="du-meta-item">
                <span>{c.meta.project}</span>
                <strong>{c.meta.projectValue}</strong>
              </div>
              <div className="du-meta-item">
                <span>{c.meta.platform}</span>
                <strong>{c.meta.platformValue}</strong>
              </div>
              <div className="du-meta-item">
                <span>{c.meta.technologies}</span>
                <strong>{c.meta.technologiesValue}</strong>
              </div>
              <a href="#du-trajeto" className="du-scroll">
                <span>{c.meta.scroll}</span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================
            O TRAJETO — PARADAS AO LONGO DA ROTA
        ========================================= */}
        <section className="du-route" id="du-trajeto" aria-labelledby="du-route-title">
          <div className="du-container">

            <div className="du-route-intro" data-reveal>
              <div>
                <span className="du-kicker">{c.route.kicker}</span>
                <h2 id="du-route-title">{c.route.heading}</h2>
              </div>
              <p>{c.route.introduction}</p>
            </div>

            <div className="du-road" ref={roadRef}>
              {/* Linha tracejada + trecho percorrido + carrinho */}
              <div className="du-road-line" aria-hidden="true">
                <span className="du-road-fill" />
                <span className="du-road-car">
                  <Car size={18} strokeWidth={2} />
                </span>
              </div>

              {/* PARADA 01 — PONTO DE PARTIDA */}
              {stop(1, (
                <div className="du-stop-grid du-stop-grid--start">
                  <div className="du-copy">
                    <h3>{c.start.title}</h3>
                    <p>{c.start.intro}</p>

                    <dl className="du-spec" aria-label={c.start.specTitle}>
                      <span className="du-spec-title" aria-hidden="true">{c.start.specTitle}</span>
                      {c.start.spec.map((row) => (
                        <div className="du-spec-row" key={row.key}>
                          <dt>{row.key}</dt>
                          <dd>{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="du-phone-with-note">
                    <PhoneFrame src={duScreens.invite} label={c.start.phoneLabel} />
                    <span className="handwritten du-note">{c.start.note}</span>
                  </div>
                </div>
              ))}

              {/* PARADA 02 — PROCESSO CRIATIVO */}
              {stop(2, (
                <div className="du-stop-grid du-stop-grid--creative">
                  <div className="du-copy">
                    <h3>{c.creative.title}</h3>
                    <p>{c.creative.paragraph}</p>

                    <ul className="du-decisions">
                      {c.creative.decisions.map((decision) => (
                        <li key={decision}>{decision}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="du-board">
                    {/* Tipografia do app */}
                    <div className="du-board-card du-type">
                      <span className="du-mini-title">{c.creative.typeTitle}</span>
                      <span className="du-type-heading">{c.creative.sample}</span>
                      <span className="du-type-name">{c.creative.headingFont}</span>
                      <span className="du-type-body">Aa Bb Cc 0123456789</span>
                      <span className="du-type-name">{c.creative.bodyFont}</span>
                    </div>

                    {/* Componentes reutilizáveis, redesenhados em miniatura */}
                    <div className="du-board-card du-pieces">
                      <span className="du-mini-title">{c.creative.piecesTitle}</span>

                      <div className="du-piece-row">
                        <span className="du-piece-button">{c.creative.pieces.button}</span>
                        <span className="du-piece-button du-piece-button--outline">{c.creative.pieces.outline}</span>
                      </div>

                      <div className="du-piece-row">
                        {c.creative.pieces.badges.map((badge, index) => (
                          <span key={badge} className={`du-piece-badge du-piece-badge--${index + 1}`}>{badge}</span>
                        ))}
                      </div>

                      <div className="du-piece-driver">
                        <span className="du-piece-avatar">MJ</span>
                        <div>
                          <strong>{c.creative.pieces.driver}</strong>
                          <span>{c.creative.pieces.route}</span>
                        </div>
                        <span className="du-piece-rating">
                          <Star size={13} fill="currentColor" />
                          {c.creative.pieces.rating}
                        </span>
                      </div>
                    </div>

                    {duPalette.length > 0 && (
                      <div className="du-board-card du-palette">
                        <span className="du-mini-title">{c.creative.paletteTitle}</span>
                        <ul>
                          {duPalette.map((color) => (
                            <li key={color.hex}>
                              <span style={{ backgroundColor: color.hex }} />
                              <strong>{color.name}</strong>
                              <code>{color.hex}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* PARADA 03 — CADASTRO NAVEGÁVEL */}
              {stop(3, (
                <div className="du-stop-grid du-stop-grid--flow">
                  <div className="du-copy">
                    <h3>{c.signup.title}</h3>
                    <p>{c.signup.paragraph}</p>

                    <ol className="du-steps">
                      {c.signup.steps.map((step, index) => (
                        <li key={step}>
                          <button
                            type="button"
                            className={index === signupStep ? "is-active" : ""}
                            aria-current={index === signupStep ? "step" : undefined}
                            onClick={() => setSignupStep(index)}
                          >
                            <span>{pad(index + 1)}</span>
                            {step}
                          </button>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="du-flow">
                    {/* Barra de progresso, como a do app */}
                    <div className="du-flow-progress" aria-hidden="true">
                      {duScreens.signup.map((_, index) => (
                        <span key={index} className={index <= signupStep ? "is-done" : ""} />
                      ))}
                    </div>

                    <PhoneFrame
                      key={signupStep}
                      src={duScreens.signup[signupStep]}
                      label={c.signup.steps[signupStep]}
                      className="du-flow-phone"
                    />

                    <div className="du-flow-controls">
                      <button
                        type="button"
                        onClick={() => setSignupStep((s) => s - 1)}
                        disabled={signupStep === 0}
                        aria-label={c.signup.previous}
                      >
                        <ArrowLeft size={16} />
                      </button>

                      <span aria-live="polite">
                        {pad(signupStep + 1)} / {pad(signupTotal)}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSignupStep((s) => s + 1)}
                        disabled={signupStep === signupTotal - 1}
                        aria-label={c.signup.next}
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* PARADA 04 — FITA COM AS 6 TELAS */}
              {stop(4, (
                <div className="du-offer">
                  <div className="du-copy du-offer-copy">
                    <h3>{c.offer.title}</h3>
                    <p>{c.offer.paragraph}</p>
                    <span className="handwritten du-offer-note">{c.offer.note}</span>
                  </div>

                  <ol className="du-filmstrip" tabIndex={0} aria-label={c.offer.title}>
                    {duScreens.offer.map((src, index) => (
                      <li key={src} style={{ "--i": index } as CSSProperties}>
                        <PhoneFrame src={src} label={c.offer.steps[index]} />
                        <span className="du-film-caption">
                          <b>{pad(index + 1)}</b> {c.offer.steps[index]}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ), "du-stop--wide")}

              {/* PARADA 05 — DESENVOLVIMENTO */}
              {stop(5, (
                <div className="du-stop-grid du-stop-grid--dev">
                  <div className="du-copy">
                    <h3>{c.development.title}</h3>
                    <p>{c.development.paragraph}</p>

                    <ol className="du-challenges">
                      {c.development.challenges.map((item, index) => (
                        <li key={item.problem}>
                          <span className="du-challenge-number">{pad(index + 1)}</span>
                          <div>
                            <span className="du-challenge-label">{c.development.challenge}</span>
                            <p className="du-challenge-problem">{item.problem}</p>
                            <span className="du-challenge-label">{c.development.solution}</span>
                            <p>{item.solution}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="du-dev-visual">
                    <div className="du-dev-phones">
                      <PhoneFrame src={duScreens.tracking} label={c.screens.tracking} />
                      <PhoneFrame src={duScreens.finish} label={c.screens.finish} />
                    </div>

                    {duCode.code.trim() && (
                      <figure className="du-code">
                        <figcaption>
                          <span className="du-code-dots" aria-hidden="true"><span /><span /><span /></span>
                          <span className="du-code-file">{duCode.file}</span>
                          <span className="du-code-note">{c.development.simplified}</span>
                        </figcaption>
                        <pre>
                          <code>
                            {duCode.code.trim().split("\n").map((line, index) => (
                              <span className="du-code-line" key={index}>
                                {highlightLine(line, tokenPattern)}
                                {"\n"}
                              </span>
                            ))}
                          </code>
                        </pre>
                      </figure>
                    )}
                  </div>
                </div>
              ))}

              {/* PARADA 06 — CHEGADA */}
              {stop(6, (
                <div className="du-stop-grid du-stop-grid--learned">
                  <div className="du-learned-intro">
                    <span className="du-kicker">{c.learned.kicker}</span>
                    <h3>{c.learned.title}</h3>
                    <span className="handwritten du-signature">{c.learned.signature}</span>
                  </div>

                  <ol className="du-learned-list">
                    {c.learned.items.map((item, index) => (
                      <li key={item.title}>
                        <span className="du-learned-number">{pad(index + 1)}</span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ), "du-stop--arrival")}
            </div>
          </div>
        </section>

        {/* =========================================
            PROJETO ANTERIOR
        ========================================= */}
        <section className="du-next" aria-labelledby="du-next-title">
          <div className="du-container">
            <div className="du-next-card">
              <div>
                <span className="du-kicker">{c.previousProject.label}</span>
                <h2 id="du-next-title">{c.previousProject.title}</h2>
                <p>{c.previousProject.description}</p>
              </div>

              <Link to="/projetos/geoshield" className="du-next-button">
                {c.previousProject.button}
                <ArrowUpRight size={16} />
              </Link>

              <span className="du-next-mark" aria-hidden="true">Geo.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
