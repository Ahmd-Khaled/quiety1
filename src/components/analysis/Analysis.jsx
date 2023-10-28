import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './analysis.module.css';

const Analysis = () => {
    return (
        <section className={styles.analysis}>
            <div className='sectionContainer'>
                <div className={styles.analysisContainer}>
                    <div className={styles.analysisDashboard}>
                        <img src="./assets/imgs/dashboard-img.png" alt="dashboard-img" />
                    </div>
                    <div className={styles.analysisInfo}>
                        <h2 className={styles.analysisInfoTitle}>Experience your product grow business</h2>
                        <p className={styles.analysisInfoDesc}>
                            Conveniently drive stand-alone total linkage for process-centric content.
                            Enthusiastically administrate robust initiatives quickly unleash
                            collaborative with client-focused.
                        </p>
                        <div className={styles.analysisInfoItems}>
                            <div className={styles.analysisInfoItem}>
                                <FontAwesomeIcon className={styles.analysisInfoItemIcon} icon={faUser} />
                                <h5>Customer analysis</h5>
                                <p>Objectively exceptional via customized intellectual.</p>
                            </div>
                            <div className={styles.analysisInfoItem}>
                                <FontAwesomeIcon className={styles.analysisInfoItemIcon} icon={faClock} />
                                <h5>Real time metrics</h5>
                                <p>Interactively integrate extensible directed developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Analysis;