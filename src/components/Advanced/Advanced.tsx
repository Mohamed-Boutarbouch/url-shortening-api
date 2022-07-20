import styles from './Advanced.module.css';
import { advancedData } from '../../data/data';

const Advanced = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>advanced statistics</h2>
        <p className={styles.text}>
          Track how your lins are performing across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div className={styles.container}>
        {advancedData.map((feature) => {
          const { id, icon, heading, body } = feature;
          return (
            <div key={id} className={styles.card}>
              <div className={styles.icons}>
                <img src={icon} alt="*" />
              </div>
              <h3>{heading}</h3>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.tst} />
    </div>
  );
};

export default Advanced;
