import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo.svg";
import ActiveLink from "../../../hoc/activeLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.outro}>
        <h2>REACH US</h2>
        <p>
          You might already know what you’re looking for, we can make it come to
          live. Even you don’t know yet we’re great detectives. Write email to
          us <span>info@Cloudfift.com</span>{" "}
        </p>
        <Link href="/contact-us">
          <a className="btn-dark btn-medium">Shoot Us A Message</a>
        </Link>
      </div> */}

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
            <span>Cloudfift © 2014 - 2020</span>
          </div>
          {/* <div className={styles.extraLinks}>
            <div>
              <a href='/'>Privacy Policy</a>
            </div>
            <div>
              <a href='/'>Terms & Condition</a>
            </div>
            <div>
              <a href='/'>FAQ</a>
            </div>
          </div> */}
        </div>

        <div className={styles.second}>
          <h3>Company</h3>
          <ul>
            <li>
              <ActiveLink name='Who we are' href='/about-us' />
            </li>
            <li>
              <ActiveLink name='Client we serve' href='/clients' />
            </li>
            <li>
              <ActiveLink name='Our people' href='/our-people-and-leadership' />
            </li>
            <li>
              <ActiveLink name='Our Values' href='/what-we-believe' />
            </li>
            <li>
              <ActiveLink name='Partners' href='/partners-affiliation' />
            </li>
            <li>
              <ActiveLink name='Careers' href='/careers' />
            </li>
            <li>
              <ActiveLink name='Portfolio' href='/portfolio' />
            </li>
          </ul>
        </div>

        <div className={styles.third}>
          <h3>Support</h3>
          <ul>
            <li>
              <ActiveLink name='Cloud Security' href='/cloud-security' />
            </li>
            <li>
              <ActiveLink
                name='Infrastructure Support'
                href='/infrastructure-support'
              />
            </li>
            <li>
              <ActiveLink name='Product Design' href='/product-design' />
            </li>
            <li>
              <ActiveLink
                name='Application Re-engineering'
                href='/application-reengineering'
              />
            </li>
          </ul>
        </div>

        <div className={styles.last}>
          <h3>Social Platforms</h3>
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
          {/* <p>
            As a biz, expansion is such a milestone. It's a new month we are
            welcoming some new faces at cloudfift to give you an even better
            full service experience.
          </p>
          <a href='/'>
            <i className='fab fa-twitter'></i>
            <span>Follow</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
