import Icon from './PlayIcon';

import styles from './Countdown.module.css';
import React, { useEffect, useMemo, useState } from 'react';

const Countdown = () => {
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  function getCountDownTime():string {
    const hours = Math.floor(timer/(60**2));
    const minutes = Math.floor((timer - (hours*60*60))/60);
    const seconds = timer - hours*60*60 - minutes*60;
    return `${hours<10 ? "0" : ""}${hours}:${minutes<10 ? "0" : ""}${minutes}:${seconds<10 ? "0" : ""}${seconds}`;
  }
  
  useEffect(() => {
    let timerInterval = 0;
    if(timerMinutes && playing) {
      timerInterval = setInterval(() => {
        setTimer(prev => {
          !prev && clearInterval(timerInterval)
          return prev === 0 ? prev : prev - 1
        });
      }, 100);
    }
    else {
      clearInterval(timerInterval)
    }
    return () =>
      {
        if(timerInterval) {
          clearInterval(timerInterval);
      }
    }
  }, [timerMinutes, playing]);

  const timerText = useMemo(getCountDownTime, [timer]);

  function handleTimerInput(e:React.SyntheticEvent) {
    const target = e.target as typeof e.target & {
      value: string
    }
    const numberRegex = /^-?\d+(\.\d+)?$/;
    if(!numberRegex.test(target.value) && target.value) return;
    setTimerMinutes(Number(target.value));
    setTimer(Number(target.value)*60)
  }

  function handleReset() {
    setPlaying(false);
    setTimerMinutes(0);
    setTimer(0);
  }

  return (
    <main className="timer-container">
      <div className={styles.inputContainer}>
        <label htmlFor={'counter-input'}>Enter Minutes</label>
        <input type="text" placeholder="Enter duration" onChange={handleTimerInput} value={timerMinutes}/>
      </div>
      <div className={styles.timerHandlers}>
        <button className={`${styles.iconBtn} ${playing ? styles.active : ''}`} onClick={() => setPlaying(prev => !prev)}>
          <Icon/>
        </button>
        <span className={styles.timerText}>{timerText}</span>
        <button className={`${styles.timerText} ${styles.resetBtn}`} type="button" name="reset" onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
};

export default Countdown;
