import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const CountDown = () => {
  const calcTimeLeft = () => {
    let year = new Date().getFullYear();

    // let mayFirst = new Date(year + "-05-1 00:00:00".replace(" ", "T") + "Z");
    let mayFirst = new Date(year + "-05-1 00:00:00".replace(/-/g, "/")); // Works for IOS

    const dateDifference = +mayFirst - +new Date();

    let timeLeft = {};
    if (dateDifference > 0) {
      timeLeft = {
        days: Math.floor(dateDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dateDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((dateDifference / 1000 / 60) % 60),
        seconds: Math.floor((dateDifference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
  });

  return timeLeft.days !== 20 ? (
    <div className={styles.countDown}>
      <div>
        <h3>{timeLeft.days}</h3>
        <p>Days</p>
      </div>
      <div>
        <h3>{timeLeft.hours}</h3>
        <p>Hours</p>
      </div>
      <div>
        <h3>{timeLeft.seconds}</h3>
        <p>Seconds</p>
      </div>
    </div>
  ) : (
    <div className={styles.timeUp}>
      <h4>We've Launched !!!</h4>
    </div>
  );
};

export default CountDown;
