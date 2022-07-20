import styles from './Hero.module.css';
import HeroSVG from '../../assets/illustration-working.svg';
import MainButton from '../UI/MainButton';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles['hero-text']}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&apos;s recognition and get detailed insights on how your links are
          performing.
        </p>
        <MainButton>get started</MainButton>
      </div>
      <div className={styles['hero-illustration']}>
        <img src={HeroSVG} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
