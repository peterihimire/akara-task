import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";
// import AboutDrop from "./aboutUs";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);
  const [about, openAbout] = useState(false);

  const router = useRouter();

  useEffect(() => {
    openAbout(false);
  }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id='navbar'>
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink
            name='Home'
            href='/'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/about-us/who-we-are" ||
              router.pathname === "/about-us/our-vision" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='How It Works'
            href='/faq'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/about-us/who-we-are" ||
              router.pathname === "/about-us/our-vision" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='Market Place'
            href='/about-us'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='About'
            href='/contact-us'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/about-us/who-we-are" ||
              router.pathname === "/about-us/our-vision" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        {/* <div className={styles.login}>
          <Link href='/login'>
            <a
              className={`${
                isOpen ||
                bgChange ||
                router.pathname === "/contact-us" ||
                router.pathname === "/about-us" ||
                router.pathname === "/about-us/who-we-are" ||
                router.pathname === "/about-us/our-vision" ||
                router.pathname === "/faq"
                  ? "btn-transparent-dark btn-login"
                  : "btn-transparent btn-login"
              }`}
            >
              Log In
            </a>
          </Link>
        </div> */}
        <div className={styles.create}>
          {/* <Link href='/register'>
            <a className='btn-primary btn-large'>Join Our Slack Community</a>
          </Link> */}

          <button
            className='btn-primary btn-large'
            onClick={() => router.push("/")}
          >
            Our Slack Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
