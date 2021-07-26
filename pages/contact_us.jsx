import Head from "next/head";
import React from "react";
import ContactUsForm from "../components /ContactUsForm";
import Navbar from "../components /Navbar";
import ContactUsStyles from "../styles/ContactUs.module.css";

function ContactUs() {
  return (
    <div className={ContactUsStyles.contact_us_root}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Next Education Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={ContactUsStyles.contact_us_showcase}>
        <Navbar />
        <h1 className={ContactUsStyles.contact_us_logo_heading}>EdYouMatch</h1>
      </div>
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
