import styles from './MainButton.module.css';

interface Props {
  children: React.ReactNode;
}

const MainButton: React.FC<Props> = ({ children }: Props) => {
  return (
    <button
      type="button"
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default MainButton;
