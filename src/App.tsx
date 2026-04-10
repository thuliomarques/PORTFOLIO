import { CustomCursor } from './components/CustomCursor';
import { Grain } from './components/Grain';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Stack } from './components/Stack';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Grain />
      <CustomCursor />
      
      <main className="max-w-[1080px] mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <Work />

        <Stack />
        <Footer />
      </main>
    </>
  );
}
