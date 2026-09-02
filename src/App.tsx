import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import {
  About,
  Achievements,
  Contact,
  Experience,
  Focus,
  Footer,
  OpenSource,
  Research,
} from './components/Sections';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Focus />
        <Experience />
        <Research />
        <Achievements />
        <About />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
