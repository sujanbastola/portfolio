import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/LangContext';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(() => sessionStorage.getItem('visited') === 'true');

  const handleDone = () => {
    sessionStorage.setItem('visited', 'true');
    setLoaded(true);
  };

  return (
    <ThemeProvider>
      <LangProvider>
        <LoadingScreen onDone={handleDone} />
        {loaded && (
          <>
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Blog />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
