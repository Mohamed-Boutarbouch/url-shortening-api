import axios from 'axios';
import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import UserInput from './UserInput';
import OutputLinks from './OutputLinks';
import styles from './ShortenedLinks.module.css';

const URL = 'https://api.shrtco.de/v2/shorten?url=';

// interface LinkArg {
//   (link: string): Promise<string>;
// }

interface Props {
  (ok: boolean): Promise<boolean>;
  result: {
    (code: string): Promise<string>;
    (full_short_link: string): Promise<string>;
    (original_link: string): Promise<string>;
  };
}

interface ErrorResponse {
  error: string;
}

const getLinkShortener = async (link: string): Promise<Props> => {
  try {
    const { data } = await axios.get(`${URL}${link}`);
    // return console.log(data);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      console.log((err.response?.data as ErrorResponse).error);
    }
  }
};

const ShortenedLinks = () => {
  const [userLink, setUserLink] = useState('');

  const fallback: void | never[] = [];

  // const {
  //   data = fallback,
  //   isLoading,
  //   isError,
  //   error,
  //   refetch,
  // } = useQuery(['shortLink', userLink], () => getLinkShortener(userLink), {
  //   enabled: userLink.length > 0,
  // });

  // console.log(data);
  // console.log(userLink);

  return (
    <main className={styles.main}>
      <UserInput setUserLink={setUserLink} />
      {/* refetch={refetch} */}
      <OutputLinks />
      {/* data={data} */}
      <div className={styles.tst} />
    </main>
  );
};

export default ShortenedLinks;
