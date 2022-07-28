import { motion } from 'framer-motion';
import styles from './Advanced.module.css';
import { advancedData } from '../../data/data';

const Advanced = () => {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>advanced statistics</h2>
        <p className={styles.text}>
          Track how your lins are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div className={styles.container}>
        {advancedData.map((feature, i) => {
          const { id, icon, heading, body } = feature;
          return (
            <motion.article
              key={id}
              className={styles.card}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: i * 0.4,
                },
              }}
            >
              <div className={styles.icons}>
                <img src={icon} alt="*" />
              </div>
              <h3>{heading}</h3>
              <p>{body}</p>
            </motion.article>
          );
        })}
        <span className={styles['decorative-thing']} />
      </div>
      <div className={styles.tst} />
    </section>
  );
};

export default Advanced;
