import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ShortenedLinks from './components/ShortenedLinks/ShortenedLinks';
import Advanced from './components/Advanced/Advanced';
import BannerCTA from './components/BannerCTA/BannerCTA';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShortenedLinks />
      <Advanced />
      <BannerCTA />
      <Footer />
    </>
  );
};

export default App;
