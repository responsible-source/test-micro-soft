import React from "react";
import styles from "./form.module.css";
import MyLogo from "../../images/microsoft-logo.png";
import { FaKey } from "react-icons/fa";

const Form = () => {
  return (
    <div className={styles.formDiv}>
      <div className={styles.formCtn}>
        <div className={styles.logoCtn}>
          <img src={MyLogo} alt="logo" />
          <h2> Microsoft</h2>
        </div>

        <form action="">
          <h1>Sign in</h1>

          <div>
            <input
              type="email number skype"
              name=""
              id=""
              placeholder="Email, Phone or Skype"
            />
          </div>

          <p>&#65343;</p>

          <div>
            <p>No account? Create one</p>
            <p>Cant access your account?</p>
          </div>

          <div>
            <button type="button">Back</button>
            <button type="submit">Next</button>
          </div>
        </form>

        <div>
          <FaKey />
          <p>Sign in-options</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
