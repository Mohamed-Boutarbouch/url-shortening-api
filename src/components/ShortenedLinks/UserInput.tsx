/* eslint-disable operator-linebreak */
import { SyntheticEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { CircleNotch } from 'phosphor-react';

import styles from './UserInput.module.css';

interface Props {
  setUserLink: (val: string) => void;
  isLoading: boolean;
  linkError: boolean;
  setLinkError: (val: boolean) => void;
}

const UserInput: React.FC<Props> = ({ setUserLink, isLoading, linkError, setLinkError }) => {
  const [enteredLink, setEnteredLink] = useState('');
  const [isValidationError, setIsValidationError] = useState(false);

  const pattern =
    // eslint-disable-next-line no-useless-escape
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

  const urlValidator = pattern.test(enteredLink);

  const inputLinkHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    setEnteredLink(target.value);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (enteredLink.trim() === '') return setIsValidationError(true);

    if (!urlValidator) return setIsValidationError(true);

    setUserLink(enteredLink);
    return setEnteredLink('');
  };

  const inputStyles =
    isValidationError || linkError ? `${styles.input} ${styles['input-error']}` : styles.input;

  return (
    <motion.form
      onSubmit={submitHandler}
      className={styles.form}
      initial={{ opacity: 0, scale: 0.5, translateY: '-70px' }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
        },
      }}
      viewport={{ once: true }}
    >
      <input
        type="text"
        className={inputStyles}
        placeholder="Shorten a link here..."
        value={enteredLink}
        onChange={inputLinkHandler}
        onFocus={() => {
          setIsValidationError(false);
          setLinkError(false);
        }}
      />
      {isValidationError && <p className={styles['error-message']}>Please add a valid link.</p>}
      {linkError && (
        <p className={styles['error-message']}>
          This link you entered is blacklisted. <br /> Please add another link.
        </p>
      )}
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? <CircleNotch size={28} className={styles.spinner} /> : 'shorten it!'}
      </button>
    </motion.form>
  );
};

export default UserInput;
