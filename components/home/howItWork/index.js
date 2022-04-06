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
              <p>Once you’ve set up your wallet of choice.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>Make your collection</h5>
              <p>
                Add social links, a description, profile & banner images adn
                name of your collection.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h5>Add your NFTs </h5>
              <p>
                Upload your artwork (image, 3D, videos) and customize with NFTs
                wit properties.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h5>List for sale</h5>
              <p>
                Choose between auctions, fixed-price listings, and
                declining-price listings.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWork;
