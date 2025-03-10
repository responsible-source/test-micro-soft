import React, { useState } from "react";
import styles from "./form.module.css";
import MyLogo from "../../images/microsoft-logo.png";
import { FaKey } from "react-icons/fa";

const Form = () => {
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <div className={styles.formDiv}>
      <div className={styles.formCtn}>
        <div className={styles.logoCtn}>
          <img src={MyLogo} alt="logo" />
          <h2> Microsoft</h2>
        </div>

        <form action="">
          
          <h1>{!viewPassword ? 'Sign in' : 'Enter Password'}</h1>

          <div>
            <input
              type={!viewPassword ? 'email' : 'password'}
              name={!viewPassword ? 'email' : 'password'}
              id={!viewPassword ? 'email' : 'password'}
              placeholder={!viewPassword ? "Email, Phone or Skype" : "Password"}
            />
          </div>


          <div className={styles.formBtmDiv}>
            <p role="button">{!viewPassword ? 'No account?' : ''} <span className={styles.colorP}>{!viewPassword ? 'Create one!' : 'Forgot password?'}</span></p>
            <p className={styles.colorP} role="button"> {!viewPassword ? "Can't access your account?" : 'Email code to ikechukwuprosper8@gmail.com'}</p>
          </div>

          <div className={styles.btnDiv}>
            {/* <button type="button">Back</button> */}
            <button type="submit">{!viewPassword ? 'Next' : 'Sign In'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
