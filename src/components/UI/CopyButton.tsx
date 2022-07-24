/* eslint-disable consistent-return */
import { useState, useEffect, useRef } from 'react';
import styles from './CopyButton.module.css';

interface Props {
  shortLink: string;
}

const CopyButton: React.FC<Props> = ({ shortLink }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const btnCurrName = btnRef.current?.textContent;

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(true);
  };

  useEffect(() => {
    if (btnCurrName === 'copied!' || btnCurrName === undefined) return;
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [btnCurrName]);

  const copyButtonStyles = isCopied ? styles['button-copied'] : styles.button;

  return (
    <button ref={btnRef} type="button" className={copyButtonStyles} onClick={copyLinkHandler}>
      {isCopied ? 'copied!' : 'copy'}
    </button>
  );
};

export default CopyButton;
