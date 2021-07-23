import React from "react";
import NavbarStyles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className={NavbarStyles.navbar_root}>
        <Link href="/">
          <a className={NavbarStyles.navbar_item}>Home</a>
        </Link>
        <Link href="/contactus">
          <a className={NavbarStyles.navbar_item}>Contact Us</a>
        </Link>
        <Link href="/help">
          <a className={NavbarStyles.navbar_item}>help</a>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
