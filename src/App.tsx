import { Suspense, useEffect } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Partners from './components/Partners'
import Statisctics from './components/Statisctics'
import Company from './components/Company'
import Directions from './components/Directions'
import Competence from './components/Competence'
import Approach from './components/Approach'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

// Sections render only after translations load, so the target may not exist yet.
const HASH_SCROLL_ATTEMPTS = 100;
const HASH_SCROLL_INTERVAL = 50;

function App() {
  useEffect(() => {
    // getElementById instead of querySelector: hashes like "#2" are not valid
    // CSS selectors and would throw, unmounting the whole app.
    const id = location.hash.slice(1);
    if (!id) return;

    let attempts = 0;
    let timer: number | undefined;

    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (++attempts < HASH_SCROLL_ATTEMPTS) {
        timer = window.setTimeout(tryScroll, HASH_SCROLL_INTERVAL);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Suspense fallback="">
        <Header />
        <main className="main">
          <div className="background"></div>
          <Intro />
          <Partners />
          <Statisctics />
          <Company />
          <Directions />
          <Competence />
          <Approach />
          <Contacts />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
