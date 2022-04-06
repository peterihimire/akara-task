import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Input from "../../ui/input";
import CountDownTimer from "../../ui/countDown";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/lotties/json-background.json";

import styles from "./styles.module.scss";

SwiperCore.use([Pagination, Autoplay]);

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
            <div className={styles.carousel}>
              <Swiper
                // centeredSlides={true}
                // slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                  200: { slidesPerView: 1.5 },
                  700: { slidesPerView: 2.5 },
                  1200: { slidesPerView: 1.5 },
                  2500: { slidesPerView: 1.5 },
                }}
                loop
                className={`swiper-wrapper ${styles.slideWrapper}`}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imgDiv}>
                      <img src='/images/slide-pix19.png' alt='' />
                    </div>
                    <div className={styles.cardFooter}>
                      <h4>Comming Soon 1</h4>
                      <h6>Akara Market</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imgDiv}>
                      <img src='/images/slide-pix2.png' alt='' />
                    </div>
                    <div className={styles.cardFooter}>
                      <h4>Comming Soon 2</h4>
                      <h6>Akara Market</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imgDiv}>
                      <img src='/images/slide-pix3.png' alt='' />
                    </div>
                    <div className={styles.cardFooter}>
                      <h4>Comming Soon 3</h4>
                      <h6>Akara Market</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imgDiv}>
                      <img src='/images/slide-pix4.png' alt='' />
                    </div>
                    <div className={styles.cardFooter}>
                      <h4>Comming Soon 4</h4>
                      <h6>Akara Market</h6>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
