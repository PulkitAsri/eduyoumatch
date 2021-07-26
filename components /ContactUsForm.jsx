import React, { useState } from "react";
import ContactUsFormStyles from "./ContactUsForm.module.css";

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
    <div className={ContactUsFormStyles.contact_us_form_root}>
      <div className={ContactUsFormStyles.contact_us_form_wrapper}>
        <h1 className={ContactUsFormStyles.contact_us_form_heading}>
          Lets Connect
        </h1>
        <div className={ContactUsFormStyles.contact_us_form_nameFields}>
          <input
            name="name"
            placeholder="Name"
            className={ContactUsFormStyles.contact_us_form_input}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className={ContactUsFormStyles.contact_us_form_input}
            onChange={handleChange}
          />
        </div>
        <input
          name="subject"
          placeholder="Subject"
          className={ContactUsFormStyles.contact_us_form_input_subject}
          onChange={handleChange}
        />
        <textarea
          name="emailBody"
          placeholder="Your Query"
          className={ContactUsFormStyles.contact_us_form_textArea}
          onChange={handleChange}
        />
      </div>
      <button className={ContactUsFormStyles.contact_us_form_submitButton}>
        Send
      </button>

      {console.log(emailData)}
    </div>
  );
}

export default ContactUsForm;
