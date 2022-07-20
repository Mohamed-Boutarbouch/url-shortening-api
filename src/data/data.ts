import icon1 from '../assets/icon-brand-recognition.svg';
import icon2 from '../assets/icon-detailed-records.svg';
import icon3 from '../assets/icon-fully-customizable.svg';

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
