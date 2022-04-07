import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import styles from "./styles.module.scss";

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  return (
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
              <img src='/images/slide-pix1.png' alt='' />
            </div>
            <div className={styles.cardFooter}>
              <h5>Comming Soon</h5>
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
              <h5>Comming Soon</h5>
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
              <h5>Comming Soon</h5>
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
              <h5>Comming Soon</h5>
              <h6>Akara Market</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
