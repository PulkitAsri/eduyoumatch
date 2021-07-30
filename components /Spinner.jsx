import { StylesProvider } from "@material-ui/core";
import React from "react";
import Styles from "../styles/Spinner.module.css";

function Spinner() {
  return (
    <div className={Styles.spinner}>
      <div />
      <div />
    </div>
  );
}

export default Spinner;
