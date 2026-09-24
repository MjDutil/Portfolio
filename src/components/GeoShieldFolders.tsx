import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { highlightLine, pad } from "../utils/code";
import "./GeoShieldFolders.css";

type FolderKey = "project" | "creative" | "development" | "mapbox" | "learned";

type Folder = {
  key: FolderKey;
  color: string;
};

// Cada ficha tem um tom pastel da paleta do portfólio.
const folders: Folder[] = [
  { key: "project", color: "#e5eee8" }, // sálvia
  { key: "creative", color: "#f6e6dd" }, // pêssego
  { key: "development", color: "#e2e9f5" }, // azul-névoa
  { key: "mapbox", color: "#ebe5f7" }, // lilás
  { key: "learned", color: "#f7eed2" }, // manteiga
];

// Posição (em %) dos números sobre a captura do mapa, na ficha 04.
const mapHotspots = [
  { x: 19.2, y: 4.8 },
  { x: 19.4, y: 50.8 },
  { x: 56, y: 35.5 },
];

const total = pad(folders.length);

// Destaque de sintaxe bem simples: comentários, textos, palavras-chave e números.
const tokenPattern =
  /(\/\/.*$)|("(?:[^"\\]|\\.)*"|`[^`]*`)|\b(const|let|await|async|return|new|if|useEffect)\b|\b(\d+)\b/g;

export function GeoShieldFolders() {
  const { t } = useLanguage();
  const copy = t.geoShieldPage.folders;
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const collectionRef = useRef<HTMLDivElement>(null);

  const active = folders[activeIndex];

  // Teclas de seta mudam a ficha; Tab continua a navegação normal da página.
  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % folders.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + folders.length) % folders.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = folders.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  // Botões "anterior / próxima" no rodapé da ficha.
  function goTo(index: number) {
    setActiveIndex(index);

    const top = collectionRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) {
      collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Captura de tela que abre em tamanho real numa nova aba.
  const screenshot = (image: string, label: string, alt: string, extra?: ReactNode) => (
    <figure className="gs-shot">
      <figcaption className="gs-shot-caption">
        <span>{label}</span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </figcaption>
      <div className="gs-shot-frame">
        <a
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          className="gs-shot-link"
          aria-label={`${copy.enlarge}: ${alt}`}
        >
          <img src={image} alt={alt} loading="lazy" />
        </a>
        {extra}
      </div>
    </figure>
  );

  function renderContent(key: FolderKey) {
    switch (key) {
      // FICHA 01 — ficha técnica + captura presa com clipe
      case "project": {
        const c = copy.project;
        return (
          <div className="gs-layout gs-layout--project">
            <div className="gs-copy">
              <h3>{c.title}</h3>
              <p>{c.intro}</p>

              <dl className="gs-spec" aria-label={c.specTitle}>
                <span className="gs-spec-title" aria-hidden="true">
                  {c.specTitle}
                </span>
                {c.spec.map((row) => (
                  <div className="gs-spec-row" key={row.key}>
                    <dt>{row.key}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="gs-clipped">
              <span className="gs-clip" aria-hidden="true" />
              {screenshot("/projects/geoshield/inicial.webp", c.imageLabel, c.imageAlt)}
            </div>
          </div>
        );
      }

      // FICHA 02 — mural com polaroids, paleta e decisões
      case "creative": {
        const c = copy.creative;
        return (
          <div className="gs-layout gs-layout--creative">
            <div className="gs-copy">
              <h3>{c.title}</h3>
              <p>{c.paragraph}</p>

              <span className="gs-mini-title">{c.decisionsTitle}</span>
              <ul className="gs-decisions">
                {c.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>

              <ul className="gs-chips" aria-label={c.paletteLabel}>
                {c.palette.map((color) => (
                  <li key={color.hex}>
                    <span className="gs-chip-color" style={{ backgroundColor: color.hex }} />
                    <span className="gs-chip-name">{color.name}</span>
                    <span className="gs-chip-hex">{color.hex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gs-mural">
              {c.polaroids.map((polaroid, index) => (
                <a
                  key={polaroid.image}
                  href={polaroid.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`gs-polaroid gs-polaroid--${index + 1}`}
                  aria-label={`${copy.enlarge}: ${polaroid.alt}`}
                >
                  <img src={polaroid.image} alt={polaroid.alt} loading="lazy" />
                  <span className="gs-polaroid-caption">{polaroid.caption}</span>
                </a>
              ))}

              <span className="gs-mural-note" aria-hidden="true">
                {c.note}
                <svg viewBox="0 0 60 40" className="gs-mural-arrow">
                  <path d="M4 6 C 20 30, 38 34, 54 30" />
                  <path d="M46 24 L 55 30 L 46 36" />
                </svg>
              </span>
            </div>
          </div>
        );
      }

      // FICHA 03 — trecho de código real + desafios
      case "development": {
        const c = copy.development;
        return (
          <div className="gs-layout gs-layout--development">
            <div className="gs-copy">
              <h3>{c.title}</h3>
              <p>{c.paragraph}</p>

              <ol className="gs-challenges">
                {c.challenges.map((item, index) => (
                  <li key={item.problem}>
                    <span className="gs-challenge-number">{pad(index + 1)}</span>
                    <div>
                      <span className="gs-challenge-label">{copy.challenge}</span>
                      <p className="gs-challenge-problem">{item.problem}</p>
                      <span className="gs-challenge-label">{copy.solution}</span>
                      <p>{item.solution}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure className="gs-code">
              <figcaption className="gs-code-top">
                <span className="gs-code-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="gs-code-file">{c.codeFile}</span>
                <span className="gs-code-note">{copy.simplified}</span>
              </figcaption>
              <pre>
                <code>
                  {c.code.split("\n").map((line, index) => (
                    <span className="gs-code-line" key={index}>
                      {highlightLine(line, tokenPattern)}
                      {"\n"}
                    </span>
                  ))}
                </code>
              </pre>
            </figure>
          </div>
        );
      }

      // FICHA 04 — captura do mapa com pontos numerados
      case "mapbox": {
        const c = copy.mapbox;
        return (
          <div className="gs-layout gs-layout--mapbox">
            {screenshot(
              "/projects/geoshield/map-desktop.webp",
              c.imageLabel,
              c.imageAlt,
              <>
                {mapHotspots.map((spot, index) => (
                  <span
                    key={index}
                    className="gs-hotspot"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                ))}
              </>
            )}

            <div className="gs-copy">
              <h3>{c.title}</h3>
              <p>{c.paragraph}</p>

              <ol className="gs-hotspot-list">
                {c.hotspots.map((item, index) => (
                  <li key={item.title}>
                    <span className="gs-hotspot gs-hotspot--static" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
      }

      // FICHA 05 — aprendizados (substitui a antiga caixa verde)
      case "learned": {
        const c = copy.learned;
        return (
          <div className="gs-layout gs-layout--learned">
            <div className="gs-learned-intro">
              <span className="gs-mini-title">{c.kicker}</span>
              <h3>{c.title}</h3>
              <span className="handwritten gs-signature">{c.signature}</span>
            </div>

            <ol className="gs-learned-list">
              {c.items.map((item, index) => (
                <li key={item.title}>
                  <span className="gs-learned-number">{pad(index + 1)}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        );
      }
    }
  }

  return (
    <section className="gs-folders-section" id="geoshield-about" aria-labelledby="gs-folders-title">
      <div className="geoshield-container">
        <div className="gs-folders-intro">
          <div>
            <span className="gs-folders-kicker">{copy.kicker}</span>
            <h2 id="gs-folders-title">{copy.heading}</h2>
          </div>
          <p>{copy.introduction}</p>
        </div>

        <p className="gs-folders-mobile-hint">{copy.mobileHint}</p>

        <div className="gs-folder-collection" ref={collectionRef}>
          {/* Etiquetas das fichas: sempre na mesma linha, como em um fichário. */}
          <div className="gs-folder-tabs" role="tablist" aria-label={copy.navigationLabel}>
            {folders.map((folder, index) => (
              <button
                key={folder.key}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`gs-folder-tab-${folder.key}`}
                aria-controls="gs-folder-panel"
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                className={`gs-folder-tab ${activeIndex === index ? "gs-folder-tab--active" : ""}`}
                style={{ backgroundColor: folder.color }}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span className="gs-folder-tab-name">{copy[folder.key].tab}</span>
                <span className="gs-folder-tab-index">{pad(index + 1)}</span>
              </button>
            ))}
          </div>

          {/* Folhas sobrepostas. Só a selecionada traz conteúdo à frente. */}
          <div className="gs-folder-stack">
            {folders.map((folder, index) => {
              const selected = index === activeIndex;
              const depth = index < activeIndex ? index + 1 : index;
              return (
                <div
                  key={folder.key}
                  className={`gs-folder-sheet ${selected ? "gs-folder-sheet--active" : ""}`}
                  style={{
                    backgroundColor: folder.color,
                    transform: selected ? "translateY(0)" : `translateY(${(depth + 1) * 6}px)`,
                    zIndex: selected ? 10 : depth + 1,
                  }}
                  aria-hidden={!selected}
                >
                  {selected && (
                    <div
                      className="gs-folder-panel"
                      id="gs-folder-panel"
                      role="tabpanel"
                      aria-labelledby={`gs-folder-tab-${folder.key}`}
                    >
                      <div className="gs-folder-panel-top">
                        <span>{copy[active.key].label}</span>
                        <span>GEOSHIELD / {pad(activeIndex + 1)}</span>
                      </div>

                      <div className="gs-folder-body" key={active.key}>
                        {renderContent(active.key)}
                      </div>

                      <div className="gs-folder-panel-bottom">
                        <button
                          type="button"
                          className="gs-folder-nav"
                          onClick={() => goTo(activeIndex - 1)}
                          disabled={activeIndex === 0}
                        >
                          <ArrowLeft size={15} />
                          <span>{copy.previous}</span>
                        </button>

                        <span className="gs-folder-count">
                          {pad(activeIndex + 1)} / {total}
                        </span>

                        <button
                          type="button"
                          className="gs-folder-nav gs-folder-nav--next"
                          onClick={() => goTo(activeIndex + 1)}
                          disabled={activeIndex === folders.length - 1}
                        >
                          <span>{copy.next}</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
