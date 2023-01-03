import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import styles from "./header.module.css";

const navData = [
  { id: 1, link: "Tu informacion" },
  { id: 2, link: "Privacidad" },
  { id: 3, link: "Seguridad" },
  { id: 4, link: "Pago y facturacion" },
  { id: 5, link: "Servicio y suscripciones" },
  { id: 6, link: "Dispositivos" },
  { id: 7, link: "Familia" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_logo}>
        <BsIcons.BsGrid3X3Gap className={styles.nav_icon} />
        <strong className={styles.nav_title}> Cuenta Microsoft </strong>
      </nav>
       <span className={styles.line}  ></span>
        <h3 className={styles.puntos} >...</h3>
      <nav className={styles.nav_links}>
        {navData.map((li) => (
          <Link to='/' key={li.id} className={styles.link_item}>
            {li.link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
