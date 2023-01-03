import React from "react";
import styles from "./footer.module.css";
import * as FaIcons from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_espanol} >
        <FaIcons.FaGlobeAmericas className={styles.footer_icon} />
        <span className={styles.footer_title}  >Español (España. alfabetizacion internacional </span>
      </div>
      <div className={styles.footer_link} >
        <p className="footer_text">Privacidad y cookies</p>
        <p className="footer_text">Terminos de uso</p>
        <p className="footer_text">Contacto</p>
        <p className="footer_text">Microsoft</p>
      </div>
    </footer>
  );
}
