import { motion } from 'framer-motion';
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
    <section className={styles.wrapper}>
      {shortenedLinksList.map((link, i) => {
        const { result } = link;
        const { code: id, original_link: originalLink, full_short_link: fullShortLink } = result;
        return (
          <motion.article
            key={id}
            className={styles.container}
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: i * 0.2,
              },
            }}
          >
            <p className={styles['original-link']}>{originalLink}</p>
            <hr className={styles.hr} />
            <div className={styles['short-link-wrapper']}>
              <p className={styles['shortened-link']}>{fullShortLink}</p>
              <CopyButton shortLink={fullShortLink} />
            </div>
          </motion.article>
        );
      })}
    </section>
  );
};

export default OutputLinks;
