import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import HeroSVG from '../../assets/illustration-working.svg';
import MainButton from '../UI/MainButton';

const Hero = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, x: '-100px' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: 'tween',
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
        className={styles['hero-text']}
      >
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&apos;s recognition and get detailed insights on how your links are
          performing.
        </p>
        <MainButton>get started</MainButton>
      </motion.div>
      <motion.div
        className={styles['hero-illustration']}
        initial={{ opacity: 0, x: '100px' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: 'tween',
            duration: 0.6,
          },
        }}
        viewport={{ once: true }}
      >
        <img src={HeroSVG} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;
