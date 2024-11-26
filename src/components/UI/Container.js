import Footer from '../layout/Footer';
import styles from './Container.module.css';

const Container = (props) => {
    return(
        <div>
            <div className={styles.container}>
                <h1>
                    Emotions to Music Prototype
                </h1>
                {props.children}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Container;