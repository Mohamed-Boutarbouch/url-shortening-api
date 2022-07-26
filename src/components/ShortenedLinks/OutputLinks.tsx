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
  return (
    <div className={styles.wrapper}>
      {shortenedLinksList.map((link) => {
        const { result } = link;
        const { code: id, original_link: originalLink, full_short_link: fullShortLink } = result;
        return (
          <div key={id} className={styles.container}>
            <p className={styles['original-link']}>{originalLink}</p>
            <hr className={styles.hr} />
            <div className={styles['short-link-wrapper']}>
              <p className={styles['shortened-link']}>{fullShortLink}</p>
              <CopyButton shortLink={fullShortLink} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OutputLinks;
