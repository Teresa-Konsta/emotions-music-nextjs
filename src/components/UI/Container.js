import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './Container.module.css';

const Container = (props) => {
    return(
        <div className={styles.container}>
            <Header />
            {props.children}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Container;