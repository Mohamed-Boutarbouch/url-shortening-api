import styles from './OutputLinks.module.css';
import CopyButton from '../UI/CopyButton';

interface ApiTypes {
  ok: boolean;
  result: Result;
}

interface Result {
  code: string;
  short_link?: string;
  full_short_link: string;
  short_link2?: string;
  full_short_link2?: string;
  share_link?: string;
  full_share_link?: string;
  original_link: string;
}

type Props = {
  shortenedLinksList: ApiTypes[];
};

const OutputLinks: React.FC<Props> = ({ shortenedLinksList }) => {
  console.log(shortenedLinksList);

  return (
    <div className={styles.wrapper}>
      {shortenedLinksList.map((link) => {
        const { result } = link;
        const { code, original_link: originalLink, full_short_link: fullShortLink } = result;
        return (
          <div key={code} className={styles.container}>
            <p className={styles['original-link']}>{originalLink.substring(0, 50)}...</p>
            <div className={styles['short-link-wrapper']}>
              <p className={styles['shortened-link']}>{fullShortLink}</p>
              <CopyButton>copy</CopyButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OutputLinks;
