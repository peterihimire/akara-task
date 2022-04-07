import React from "react";
import Input from "../../ui/input";
import CountDownTimer from "../../ui/countDown";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/lotties/json-background.json";
import Carousel from "../../ui/carousel";

import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.lottieBg}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            right: 0,
          }}
        />
      </div>

      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.container}`}>
          <div className={styles.left}>
            <h1>
              Buy and Own <span>awesome</span> African NFTs
            </h1>

            <p>
              Welcome to Akara marketplace, you can buy and sell awesome artwork
              to enjoy cool feature form us.
            </p>
            <div className={styles.handCurve}>
              <img src='/images/handcurve.svg' alt='' />
            </div>
            <div className={styles.subscribe}>
              <form>
                <div className={styles.formGroup}>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    required
                    placeholder='Email your email address to be notified when we launch'
                  />
                </div>
                <div className={styles.submitBtn}>
                  <button className='btn-primary btn-medium'>Subscribe</button>
                </div>
              </form>
            </div>
            <CountDownTimer />
          </div>
          <div className={styles.right}>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
