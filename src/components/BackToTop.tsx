import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import "./BackToTop.css";

// Botão flutuante que aparece depois de rolar mais de uma tela e leva de volta ao topo.
export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight);
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

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "back-to-top--visible" : ""}`}
      onClick={scrollToTop}
      aria-label={t.backToTop}
      title={t.backToTop}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} />
    </button>
  );
}
