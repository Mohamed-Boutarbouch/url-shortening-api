import MainButton from '../UI/MainButton';
import styles from './BannerCTA.module.css';

const BannerCTA = () => {
  return (
    <section className={styles.wrapper}>
      <h3>Boost your links today</h3>
      <MainButton>get started</MainButton>
    </section>
  );
};

export default BannerCTA;
