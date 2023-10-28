import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './personCard.module.css';

const PersonCard = () => {
    return (
        <div className={styles.personCard}>
            <div className={styles.personCardTop}>
                <div className={styles.personCardImage}>
                    <img className={styles.personCardImg} src="assets/imgs/persons/1.jpg" alt="" />
                </div>
                <div className={styles.personCardInfo}>
                    <h4 className={styles.personCardName}>Mr.Rupan Oberoi</h4>
                    <p className={styles.personCardNameTitle}>Founder and CEO at Amaara Herbs</p>
                </div>
            </div>
            <div className={styles.personCardBottom}>
                <h5 className={styles.personCardTitle}>The Best Template You Got to Have it!</h5>
                <p className={styles.personCardTxt}>Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical</p>
            </div>
            <div className={styles.personCardRating}>
                <FontAwesomeIcon className={styles.personCardRatingIcon} icon={faStar} />
                <FontAwesomeIcon className={styles.personCardRatingIcon} icon={faStar} />
                <FontAwesomeIcon className={styles.personCardRatingIcon} icon={faStar} />
                <FontAwesomeIcon className={styles.personCardRatingIcon} icon={faStar} />
                <FontAwesomeIcon className={styles.personCardRatingIcon} icon={faStar} />
            </div>
        </div>
    )
}

export default PersonCard