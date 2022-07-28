import { motion } from 'framer-motion';
import styles from './MainButton.module.css';

interface Props {
  children: React.ReactNode;
}

const MainButton: React.FC<Props> = ({ children }: Props) => {
  return (
    <motion.button
      type="button"
      className={styles.button}
      initial={{
        opacity: 0,
        scale: 0.2,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
        },
      }}
    >
      {children}
    </motion.button>
  );
};

export default MainButton;
