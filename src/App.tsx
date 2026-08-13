import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Performances } from '@/components/sections/Performances';
import { Schedule } from '@/components/sections/Schedule';
import { News } from '@/components/sections/News';
import { Gallery } from '@/components/sections/Gallery';
import { Video } from '@/components/sections/Video';
import { Reviews } from '@/components/sections/Reviews';
import { Partners } from '@/components/sections/Partners';
import { Support } from '@/components/sections/Support';
import { Contacts } from '@/components/sections/Contacts';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Performances />
        <Schedule />
        <News />
        <Gallery />
        <Video />
        <Reviews />
        <Partners />
        <Support />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
