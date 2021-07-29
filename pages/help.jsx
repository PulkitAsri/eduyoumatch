import { Style } from "@material-ui/icons";
import React from "react";
import Navbar from "../components /Navbar";
import Styles from "../styles/Help/Help.module.css";

function help() {
  return (
    <div className={Styles.help_root}>
      {/* TO BE UPDATED BY LATEST NAVBAR */}
      <Navbar />
      <div className={Styles.help_body}>
        <div className={Styles.image_container}>
          <img src={"/helpImage1.svg"} />
        </div>

        {/* Body Center */}
        <div className={Styles.body_centre}>
          <img
            src={"/helpImage2.svg"}
            className={Styles.hidden_image_background}
          />
          <h2>Help And Support</h2>
          <span>How Can We Help You?</span>
          <div className={Styles.search_bar}>
            <input placeholder="Search" />
            <button>Search</button>
          </div>
          <h1>EduYouMatch</h1>
          <h2>For You, Always</h2>
          <h3>
            See Some Frequently Asked Questions <a>Here.</a>
          </h3>
        </div>
        <div className={Styles.image_container}>
          <img src={"/helpImage2.svg"} />
        </div>
      </div>
      <div className={Styles.help_footer}>
        <div className={Styles.card}>
          <h2>About us...</h2>
          <span>
            Everything you need to know about us, our company, our motive and
            target.
          </span>
        </div>
        <div className={Styles.card}>
          <h2>Your Account</h2>
          <span>Details about your account, setting up your account...</span>
        </div>
        <div className={Styles.card}>
          <h2>Privacy</h2>
          <span>Having some privacy issue? we can help you right away!</span>
        </div>
      </div>
    </div>
  );
}

export default help;
