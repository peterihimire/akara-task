import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";

import styles from "./styles.module.scss";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  const router = useRouter();

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
              router.pathname === "/how-it-works" ||
              router.pathname === "/market-place" ||
              router.pathname === "/about"
                ? styles.lightText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='How It Works'
            href='/how-it-works'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/how-it-works" ||
              router.pathname === "/market-place" ||
              router.pathname === "/about"
                ? styles.lightText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='Market Place'
            href='/market-place'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/how-it-works" ||
              router.pathname === "/market-place" ||
              router.pathname === "/about"
                ? styles.lightText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='About'
            href='/about'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/how-it-works" ||
              router.pathname === "/market-place" ||
              router.pathname === "/about"
                ? styles.lightText
                : ""
            }`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.create}>
          <button
            className='btn-primary btn-large'
            onClick={() => router.push("/")}
          >
            Join Our Slack Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
