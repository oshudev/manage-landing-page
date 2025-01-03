import Header from '@/sections/header';
import Hero from '@/sections/hero';
import Features from '@/sections/features';
import Testimonials from '@/sections/testimonials';
import Footer from '@/sections/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
