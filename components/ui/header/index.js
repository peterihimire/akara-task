import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../nav";
import Logo from "../../../public/images/logo.svg";
import LogoDark from "../../../public/images/logo.svg";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

const Header = ({ isOpen, clicked }) => {
  const [bgChange, setBgChange] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        bgChange ||
        isOpen ||
        router.pathname === "/how-it-works" ||
        router.pathname === "/market-place" ||
        router.pathname === "/about"
          ? styles.bgDark
          : ""
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'>
            <a className=''>
              {bgChange ||
              isOpen ||
              router.pathname === "/how-it-works" ||
              router.pathname === "/market-place" ||
              router.pathname === "/about" ? (
                <LogoDark />
              ) : (
                <Logo />
              )}
            </a>
          </Link>
        </div>

        <Nav
          bgChange={bgChange}
          isOpen={isOpen}
          clicked={(payload) => dropHandler(payload)}
        />

        <div className={styles.hamburgerBtn}>
          <button
            type='button'
            aria-label='navigation button'
            onClick={clicked}
            className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}
          >
            <span className='hamburger-box'>
              <span
                className={`${
                  bgChange ||
                  router.pathname === "/how-it-works" ||
                  router.pathname === "/market-place" ||
                  router.pathname === "/about"
                    ? "hamburger-inner hamburger-inner-dark"
                    : "hamburger-inner hamburger-inner-light"
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
