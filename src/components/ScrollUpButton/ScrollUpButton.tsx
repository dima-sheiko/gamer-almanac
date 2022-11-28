import { useEffect, useState } from 'react';
import styles from './ScrollUpButton.module.css';
import back from '../../assets/back.png';

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleButton = () => {
    setIsVisible(window.scrollY > 1000);
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);

    return () => window.removeEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className={styles.button}
          onClick={handleScrollUp}
          type='button'
        >
          <img className={styles.arrow} src={back} alt='back to the top' />
        </button>
      )}
    </>
  );
};
