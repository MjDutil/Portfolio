import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Toolbox } from "./components/Toolbox";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <Toolbox />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;