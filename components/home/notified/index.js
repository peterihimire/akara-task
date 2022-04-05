import React from "react";
import Input from "../../ui/input";

import styles from "./styles.module.scss";

const Notified = () => {
  return (
    <section className={styles.notified}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.contentWrapper}>
          <h3>Be notified when we launch</h3>

          <p>
            We recommended you to subscribe to our Akara newsletter, enter your
            email below to be notified when we launch
          </p>

          <div className={styles.subscribe}>
            <form>
              <div className={styles.formGroup}>
                <Input
                  // labelText='What’s your Email?'
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Email your email address '
                />
              </div>
              <div className={styles.submitBtn}>
                <button className='btn-primary btn-medium'>Subscribe now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notified;
