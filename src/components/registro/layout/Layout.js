import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import MainRegistro from '../mainRegistro/MainRegistro';
import styles from './layout.css';

export default function Layout() {
    return (
        <div className={styles.layout}  >
         <Header/>
         <MainRegistro/>
         <Footer/>
        </div>
    )
}
