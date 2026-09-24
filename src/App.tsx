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

import { GeoShield } from "./pages/geoShield";
import { Du } from "./pages/du";
import { useReveal } from "./hooks/useReveal";

// ========================================
// PÁGINA INICIAL DO PORTFÓLIO
// ========================================

function ScrollToSection() {
  const { pathname, hash } = useLocation();

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
  }, [pathname, hash]);

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
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projetos/geoshield" element={<GeoShield />} />

        <Route path="/projetos/du" element={<Du />} />
      </Routes>
    </>
  );
}

export default App;
