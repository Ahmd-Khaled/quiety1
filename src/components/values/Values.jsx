import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBezierCurve, faFingerprint, faGear, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './values.module.css';

const Values = () => {
    return (
        <section className={styles.values}>
            <div className='sectionContainer'>
                <div className={styles.valuesContainer}>
                    <div className={styles.valuesInfo}>
                        <span className={styles.valuesSubTitle}>Our Values</span>
                        <h2 className={styles.valuesTitle}>The Core Values that Drive Everything</h2>
                        <p className={styles.valuesDesc}>Quickly incubate functional channels with multidisciplinary architectures. Authoritatively fabricate formulate exceptional innovation.</p>
                        <div className={styles.valuesFeatures}>
                            <div className={styles.valuesFeature}>
                                <div className={styles.valuesFeatureIconBox}>
                                    <FontAwesomeIcon className={styles.valuesFeatureIcon} icon={faBezierCurve} />
                                </div>
                                <div className={styles.valuesFeatureTxt}>
                                    <h3>Pixel Perfect Design</h3>
                                    <p>Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed.</p>
                                </div>
                            </div>
                            <div className={styles.valuesFeature}>
                                <div className={styles.valuesFeatureIconBox}>
                                    <FontAwesomeIcon className={styles.valuesFeatureIcon} icon={faFingerprint} />
                                </div>
                                <div className={styles.valuesFeatureTxt}>
                                    <h3>Unique & Minimal Design</h3>
                                    <p>Dramatically administrate progressive metrics without error-free globally simplify standardized engineer efficient strategic.</p>
                                </div>
                            </div>
                            <div className={styles.valuesFeature}>
                                <div className={styles.valuesFeatureIconBox}>
                                    <FontAwesomeIcon className={styles.valuesFeatureIcon} icon={faGear} />
                                </div>
                                <div className={styles.valuesFeatureTxt}>
                                    <h3>Efficiency & Accountability</h3>
                                    <p>Objectively transition prospective collaboration and idea-sharing without focused maintain focused niche markets niches.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.valuesSteps}>
                        <div className={styles.valuesStepsImg}>
                            <img src="./assets/imgs/feature-img3.jpg" alt="featureImg" />
                            <div className={styles.valuesStepsItems}>
                                <div className={styles.valuesStepsItem}>
                                    <FontAwesomeIcon className={styles.valuesStepsItemIcon} icon={faCircleCheck} />
                                    <span className={styles.valuesStepsItemTitle}>Create a Free Account</span>
                                </div>
                                <div className={styles.valuesStepsItem}>
                                    <FontAwesomeIcon className={styles.valuesStepsItemIcon} icon={faCircleCheck} />
                                    <span className={styles.valuesStepsItemTitle}>Install Our Tracking Pixel</span>
                                </div>
                                <div className={styles.valuesStepsItem}>
                                    <FontAwesomeIcon className={styles.valuesStepsItemIcon} icon={faCircleCheck} />
                                    <span className={styles.valuesStepsItemTitle}>Start Tracking your Website</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;