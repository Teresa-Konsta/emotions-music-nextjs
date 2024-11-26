import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.txt}>
            <p>Copyright&copy;&nbsp;Tereza Konstari&nbsp;2019-2024</p>
            <p>
                <a href="https://www.linkedin.com/in/tereza-teresa-konstari-8b9594131/"><FaLinkedin/>&nbsp;LinkedIn</a>
                &nbsp;|&nbsp;<a href="https://github.com/Teresa-Konsta"><FaGithub/>&nbsp;GitHub</a>
            </p>
            <p>MIT License</p>
            </div>
        </div>
    );
};

export default Footer;