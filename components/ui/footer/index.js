import React from "react";
import Logo from "../../../public/images/logo.svg";
import ActiveLink from "../../../hoc/activeLink";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.socials}>
            <a href='/'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='/'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='/'>
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a href='/'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Copyright © 2020 Akara Marketplace</p>
            <p>All rights reserved</p>
          </div>
        </div>

        <div className={styles.second}>
          <h3>Company</h3>
          <ul>
            <li>
              <ActiveLink name='About Us' href='/about' />
            </li>
            <li>
              <ActiveLink name='Blog' href='/blog' />
            </li>
            <li>
              <ActiveLink name='Contact Us' href='/contact' />
            </li>
            <li>
              <ActiveLink name='Pricing' href='/pricing' />
            </li>
            <li>
              <ActiveLink name='Testimonials' href='/testimonials' />
            </li>
          </ul>
        </div>

        <div className={styles.third}>
          <h3>Support</h3>
          <ul>
            <li>
              <ActiveLink name='Help Center' href='/help-center' />
            </li>
            <li>
              <ActiveLink name='Terms of service' href='/terms-of-service' />
            </li>
            <li>
              <ActiveLink name='Product Design' href='/product-design' />
            </li>
            <li>
              <ActiveLink name='Privacy policy' href='/privacy-policy' />
            </li>
            <li>
              <ActiveLink name='Status' href='/status' />
            </li>
          </ul>
        </div>

        <div className={styles.last}>
          <h3>Social Platforms</h3>
          <div className={styles.socials}>
            <a href='/instagram'>
              <img src='/images/instagram.svg' alt='' />
            </a>
            <a href='/dribble'>
              <img src='/images/dribble.svg' alt='' />
            </a>
            <a href='/twitter'>
              <img src='/images/twitter.svg' alt='' />
            </a>
            <a href='/youtube'>
              <img src='/images/youtube.svg' alt='' />
            </a>
          </div>
          <div>
            <button
              className='btn-primary btn-large'
              onClick={() => router.push("/")}
            >
              Join Our Slack Community
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
