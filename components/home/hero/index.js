import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import styles from "./styles.module.scss";

SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.container}`}>
          <div className={styles.left}>
            <h2>Buy and Own awesome African NFTs</h2>

            <p>
              Welcome to Akara marketplace, you can buy and sell awesome artwork
              to enjoy cool feature form us.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.carousel}>
              <Swiper
                // centeredSlides={true}
                // slidesPerView={4}
                spaceBetween={50}
                breakpoints={{
                  200: { slidesPerView: 1 },
                  500: { slidesPerView: 1 },
                  700: { slidesPerView: 2 },
                  900: { slidesPerView: 1.5 },
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
                <SwiperSlide>
                  <div className={styles.card}>
                    <h5>Card One</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <h5>Card Two</h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <h5>Card Three</h5>
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
