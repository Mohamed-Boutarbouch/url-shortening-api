import { lazy, Suspense } from 'react';
import { CircleNotch } from 'phosphor-react';

const Hero = lazy(() => import('./components/Hero/Hero'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const ShortenedLinks = lazy(() => import('./components/ShortenedLinks/ShortenedLinks'));
const Advanced = lazy(() => import('./components/Advanced/Advanced'));
const BannerCTA = lazy(() => import('./components/BannerCTA/BannerCTA'));
const Footer = lazy(() => import('./components/Footer/Footer'));
// import Hero from './components/Hero/Hero';
// import Navbar from './components/Navbar/Navbar';
// import ShortenedLinks from './components/ShortenedLinks/ShortenedLinks';
// import Advanced from './components/Advanced/Advanced';
// import BannerCTA from './components/BannerCTA/BannerCTA';
// import Footer from './components/Footer/Footer';

const spinner = <CircleNotch size={50} className="spinner" />;

const App = () => {
  return (
    <Suspense fallback={spinner}>
      <Navbar />
      <Hero />
      <ShortenedLinks />
      <Advanced />
      <BannerCTA />
      <Footer />
    </Suspense>
  );
};

export default App;
