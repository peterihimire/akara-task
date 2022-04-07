import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

const CountDown = () => {
  const calcTimeLeft = () => {
    let year = new Date().getFullYear();
    let date = new Date();
    // console.log(year);
    // console.log(date);
    // let mayFirst = new Date(year + "-05-1 00:00:00".replace(" ", "T") + "Z");
    let mayFirst = new Date(year + "-05-1 00:00:00".replace(/-/g, "/"));
    // console.log(mayFirst);

    const dateDifference = +mayFirst - +new Date();
    // console.log(dateDifference);

    let timeLeft = {};
    if (dateDifference > 0) {
      timeLeft = {
        days: Math.floor(dateDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dateDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((dateDifference / 1000 / 60) % 60),
        seconds: Math.floor((dateDifference / 1000) % 60),
      };
    }
    // console.log(timeLeft);
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  // console.log(timeLeft);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
  });

  return (
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
  );
};

export default CountDown;
