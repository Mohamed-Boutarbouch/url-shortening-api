import styles from './OutputLinks.module.css';
import CopyButton from '../UI/CopyButton';

interface Props {
  (ok: boolean): Promise<boolean>;
  result: {
    (code: string): Promise<string>;
    (full_short_link: string): Promise<string>;
    (original_link: string): Promise<string>;
  };
}

const OutputLinks: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <p className={styles['original-link']}>{data?.result?.original_link}</p>
      <p className={styles['shortened-link']}>{data?.result?.full_short_link}</p>
      <CopyButton>copy</CopyButton>
    </div>
  );
};

export default OutputLinks;
