import { SyntheticEvent, useState } from 'react';
import styles from './UserInput.module.css';

interface Props {
  setUserLink: (val: string) => void;
}

const UserInput: React.FC<Props> = ({ setUserLink }) => {
  const [enteredLink, setEnteredLink] = useState('');

  const inputLinkHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    setEnteredLink(target.value);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    setUserLink(enteredLink);
    setEnteredLink('');
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Shorten a link here..."
        value={enteredLink}
        onChange={inputLinkHandler}
      />
      <p className={styles['error-message']}>Please add a link</p>
      <button type="submit" className={styles.button}>
        shorten it!
      </button>
    </form>
  );
};

export default UserInput;
