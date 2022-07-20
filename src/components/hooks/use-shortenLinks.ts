import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const URL = 'https://api.shrtco.de/v2/shorten?url=';
// from https://shrtco.de/docs/
// https://api.shrtco.de/v2/shorten?url=https://www.google.com/

// {
//   "ok": true,
//   "result": {
//       "code": "KCveN",
//       "short_link": "shrtco.de/KCveN",
//       "full_short_link": "https://shrtco.de/KCveN",
//       "short_link2": "9qr.de/KCveN",
//       "full_short_link2": "https://9qr.de/KCveN",
//       "share_link": "shrtco.de/share/KCveN",
//       "full_share_link": "https://shrtco.de/share/KCveN",
//       "original_link": "http://example.org/very/long/link.html"
//   }
// }

// {
//   "ok": false,
//   "error_code": 2,
//   "error": "This is not a valid URL, for more infos see shrtco.de/docs"
// }

type LinkShortenerResponse = {
  // userId: number;
  // id: number;
  // title: string;
  // completed: boolean;
};

type TodoErrorResponse = {
  error: string;
};

const getLinkShortener = async (link: string) => {
  try {
    const { data } = await axios.get<LinkShortenerResponse>(`${URL}${link}`);
    // console.log(data);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      // console.log((err.response?.data as TodoErrorResponse).error);
    }
  }
};

const useShortenLinks = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<LinkShortenerResponse>('shortLink', getLinkShortener);
  return { data, isLoading, error };
};

export default useShortenLinks;
