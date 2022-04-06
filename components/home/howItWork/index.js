import React from "react";
import styles from "./styles.module.scss";

const HowItWork = () => {
  return (
    <section className={styles.howItWork}>
      <div className={`${styles.wrapper} wrapper`}>
        <h5>How it will work</h5>
        <ul className={styles.step}>
          <li>
            <div>
              <h5>Set up your wallet</h5>
              <p>
                Add social links, a description, profile & banner images adn
                name of your collection.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h5>Set up your wallet</h5>
              <p>
                Add social links, a description, profile & banner images adn
                name of your collection.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h5>Set up your wallet</h5>
              <p>
                Add social links, a description, profile & banner images adn
                name of your collection.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h5>Set up your wallet</h5>
              <p>
                Add social links, a description, profile & banner images adn
                name of your collection.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWork;
