import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './support.module.css';

const Support = () => {
    return (
        <section className={styles.support}>
            <div className='sectionContainer'>
                <div className={styles.supportContainer}>
                    <div className={styles.supportSecHead}>
                        <span className={styles.supportSubtitle}>Let's Try! Get Free Support</span>
                        <h2 className={styles.supportTitle}>Start Your 14-Day Free Trial</h2>
                        <p className={styles.supportDesc}>We can help you to create your dream website for better business revenue.</p>
                    </div>
                    <div className={styles.supportBtns}>
                        <a href="/contactus" className={styles.supportContactBtn}>Contact with Us</a>
                        <a href="/watch" className={styles.supportWatchBtn}>
                            <div className={styles.supportWatchBtnIcon}><FontAwesomeIcon icon={faPlay} /></div>
                            <span>watch video</span>
                        </a>
                    </div>
                    <ul className={styles.supportList}>
                        <li className={styles.supportListItem}>Free 14-day trial</li>
                        <li className={styles.supportListItem}>No credit card required</li>
                        <li className={styles.supportListItem}>Support 24/7</li>
                        <li className={styles.supportListItem}>Cancel anytime</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Support;