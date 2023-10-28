import styles from './works.module.css';

const Works = () => {
    return (
        <section className={styles.works}>
            <div className='sectionContainer'>
                <div className={styles.worksTxt}>
                    <h2 className={styles.worksTxtTitle}>Everything We Do it With Love</h2>
                    <p className={styles.worksTxtDesc}>
                        Progressively deploy market positioning catalysts for change and
                        technically sound authoritatively e-enable resource-leveling infrastructures.
                    </p>
                </div>
                <div className={styles.worksItems}>
                    <div className={styles.worksItem}>
                        <span className={styles.worksItemNum}>150+</span>
                        <span className={styles.worksItemTitle}>Completed Projects</span>
                        <span className={styles.worksItemInfo}>Rapidiously embrace distinctive best practices after B2B syndicate.</span>
                    </div>
                    <div className={styles.worksItem}>
                        <span className={styles.worksItemNum}>1.5k</span>
                        <span className={styles.worksItemTitle}>Happy Client</span>
                        <span className={styles.worksItemInfo}>Energistically impact synergistic convergence for leadership..</span>
                    </div>
                    <div className={styles.worksItem}>
                        <span className={styles.worksItemNum}>90%</span>
                        <span className={styles.worksItemTitle}>24/7 Support</span>
                        <span className={styles.worksItemInfo}>Synergistically revolutionize leadership whereas platform.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;