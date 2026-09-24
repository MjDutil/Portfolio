import { useLanguage } from "../context/LanguageContext";

// Faixa com texto correndo entre o hero e os projetos.
// O conteúdo aparece duas vezes para o loop não ter emenda;
// a segunda cópia fica escondida dos leitores de tela.
export function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  const group = (hidden: boolean) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <span
          key={`${item.text}-${index}`}
          className={`marquee-item ${item.serif ? "marquee-item--serif" : ""}`}
        >
          {item.text}
          <span className="marquee-star" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
