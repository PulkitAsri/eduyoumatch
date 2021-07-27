import React, { useState } from "react";
import Styles from "./ContactUsForm.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SendIcon from "@material-ui/icons/Send";

function ContactUsForm() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    emailBody: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className={Styles.contact_us_form_root}>
      <div className={Styles.contact_us_form_wrapper}>
        <h1 className={Styles.contact_us_form_heading}>Lets Connect</h1>
        <div className={Styles.contact_us_form_nameFields}>
          <input
            name="name"
            placeholder="Name"
            className={Styles.contact_us_form_input}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className={Styles.contact_us_form_input}
            onChange={handleChange}
          />
        </div>
        <input
          name="subject"
          placeholder="Subject"
          className={Styles.contact_us_form_input_subject}
          onChange={handleChange}
        />
        <textarea
          name="emailBody"
          placeholder="Your Query"
          className={Styles.contact_us_form_textArea}
          onChange={handleChange}
        />
      </div>
      <button
        className={Styles.contact_us_form_submitButton}
        type="submit"
        onClick={() => {
          console.log("Data sent=>");
          console.log(emailData);
        }}
      >
        <span>Send</span>
        <SendIcon />
      </button>
      <div className={Styles.contact_us_form_footer}>
        <div className={Styles.contact_us_form_footer_left}>
          <a href="">
            <FacebookIcon className={Styles.social_icon} />
          </a>
          <a href="">
            <InstagramIcon className={Styles.social_icon} />
          </a>
          <a href="">
            <LinkedInIcon className={Styles.social_icon} />
          </a>
        </div>
        <div className={Styles.contact_us_form_footer_right}>
          <div className={Styles.info_card}>
            <h2>Address</h2>
            <span>24/1,NORTH PARK AVENUE, loreium ipus</span>
          </div>
          <div className={Styles.info_card}>
            <h2>Support</h2>
            <span>abc@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
