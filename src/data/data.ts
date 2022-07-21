import icon1 from '../assets/icon-brand-recognition.svg';
import icon2 from '../assets/icon-detailed-records.svg';
import icon3 from '../assets/icon-fully-customizable.svg';

import icon4 from '../assets/icon-facebook.svg';
import icon5 from '../assets/icon-twitter.svg';
import icon6 from '../assets/icon-pinterest.svg';
import icon7 from '../assets/icon-instagram.svg';

export const navbarLinks: string[] = ['features', 'pricing', 'resources'];

interface AdvancedTypes {
  id: number;
  icon: string;
  heading: string;
  body: string;
}

export const advancedData: AdvancedTypes[] = [
  {
    id: 1,
    icon: icon1,
    heading: 'Brand Recognition',
    body: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    id: 2,
    icon: icon2,
    heading: 'Detailed Records',
    body: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 3,
    icon: icon3,
    heading: 'Fully Customizable',
    body: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

interface FooterTypes {
  heading: string;
  links: SubLinksTypes[];
}

interface SubLinksTypes {
  label: string;
}

export const footerData: FooterTypes[] = [
  {
    heading: 'features',
    links: [{ label: 'link shortening' }, { label: 'branded links' }, { label: 'analytics' }],
  },
  {
    heading: 'resources',
    links: [{ label: 'blog' }, { label: 'developers' }, { label: 'support' }],
  },
  {
    heading: 'company',
    links: [{ label: 'about' }, { label: 'our team' }, { label: 'careers' }, { label: 'contact' }],
  },
];

interface FooterIconTypes {
  id: string;
  icon: string;
}

export const footerIcons:FooterIconTypes[] = [
  {
    id: 'facebook',
    icon: icon4,
  },
  {
    id: 'twitter',
    icon: icon5,
  },
  {
    id: 'pinterest',
    icon: icon6,
  },
  {
    id: 'instagram',
    icon: icon7,
  },
];
