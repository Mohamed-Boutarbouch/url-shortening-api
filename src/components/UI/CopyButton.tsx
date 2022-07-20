import styles from './CopyButton.module.css';

interface Props {
  children: React.ReactNode;
}

const CopyButton: React.FC<Props> = ({ children }: Props) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default CopyButton;
