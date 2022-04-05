import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Input from "../../ui/input";

import styles from "./styles.module.scss";

SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  return (
    <section className={styles.hero}>
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
                    // labelText='What’s your Email?'
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

            <div className={styles.countDown}>
              <div>
                <h3>30</h3>
                <p>Days</p>
              </div>
              <div>
                <h3>10</h3>
                <p>Hours</p>
              </div>
              <div>
                <h3>20</h3>
                <p>Seconds</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.carousel}>
              <Swiper
                // centeredSlides={true}
                // slidesPerView={4}
                spaceBetween={30}
                breakpoints={{
                  200: { slidesPerView: 1.5 },
                  // 500: { slidesPerView: 1.5 },
                  700: { slidesPerView: 2.5 },
                  // 900: { slidesPerView: 1.5 },
                  1200: { slidesPerView: 1.5 },
                  2500: { slidesPerView: 1.5 },
                }}
                loop
                pagination={{
                  el: ".custom-pag1",
                  clickable: true,
                  renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + "</span>";
                  },
                }}
                className={`swiper-wrapper ${styles.slideWrapper}`}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {/* <SwiperSlide>
                  <div className={styles.card}>
                    <div className={styles.imgDiv}>
                      <img src='/images/slide-pix19.png' alt='' />
                    </div>
                    <div className={styles.cardFooter}>
                      <h4>Comming Soon 1</h4>
                      <h6>Akara Market</h6>
                    </div>
                  </div>
                </SwiperSlide> */}

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
