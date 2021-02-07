import React from 'react';
import styles from "../styles/Home.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://twitter.com/vviace_"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Anyone that has Power
            </a>
            <small>
                &copy; Copyright infinity
            </small>
        </footer>
    );
};

export default Footer;
