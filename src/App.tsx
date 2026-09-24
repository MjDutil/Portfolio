import "./App.css";

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Projects } from "./components/Projects";
import { Toolbox } from "./components/Toolbox";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

import { GeoShield } from "./pages/GeoShield";
import { Du } from "./pages/Du";
import { useReveal } from "./hooks/useReveal";

// ========================================
// PÁGINA INICIAL DO PORTFÓLIO
// ========================================

function ScrollToSection() {
  // A "key" muda a cada clique, mesmo quando o endereço é o mesmo.
  // Assim, clicar de novo em "Projetos" (ou no logo) volta a rolar até a seção.
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Se não houver uma seção específica,
    // posiciona a página no início.

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Localiza a seção indicada na URL.

    const sectionId = decodeURIComponent(hash.substring(1));

    // Aguarda a página de destino ser renderizada.

    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

function Home() {
  useReveal();

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Toolbox />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

// ========================================
// ROTAS DA APLICAÇÃO
// ========================================

function App() {
  return (
    <>
      <ScrollToSection />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projetos/geoshield" element={<GeoShield />} />

        <Route path="/projetos/du" element={<Du />} />
      </Routes>
    </>
  );
}

export default App;
