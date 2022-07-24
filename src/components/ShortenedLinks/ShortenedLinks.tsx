import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import UserInput from './UserInput';
import OutputLinks from './OutputLinks';

import styles from './ShortenedLinks.module.css';

const URL = 'https://api.shrtco.de/v2/shorten?url=';

export interface ApiTypes {
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

const ShortenedLinks = () => {
  const [userLink, setUserLink] = useState<string>('');
  const [shortenedLinkList, setShortenedLinkList] = useState<ApiTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisallowedLinkError, setIsDisallowedLinkError] = useState<boolean>(false);

  useEffect(() => {
    const getLinkShortener = async (link: string) => {
      if (!link) return;

      setIsLoading(true);

      try {
        const { data } = await axios(`${URL}${link}`);

        setShortenedLinkList((prevState) => [...prevState, data]);
      } catch (error) {
        const err = error as AxiosError;
        // eslint-disable-next-line no-console
        console.log(err.response?.data);

        if (err.response?.status === 400) {
          setIsDisallowedLinkError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getLinkShortener(userLink);
  }, [userLink]);

  return (
    <main className={styles.main}>
      <UserInput
        setUserLink={setUserLink}
        isLoading={isLoading}
        linkError={isDisallowedLinkError}
        setLinkError={setIsDisallowedLinkError}
      />
      <OutputLinks shortenedLinksList={shortenedLinkList} />
    </main>
  );
};

export default ShortenedLinks;
