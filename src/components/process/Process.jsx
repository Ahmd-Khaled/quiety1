import styles from './process.module.css';

const Process = () => {
    return (
        <section className={styles.process}>
            <div className='sectionContainer'>
                <div className={styles.processContainer}>
                    <div className={styles.processTop}>
                        <span className={styles.processSubTitle}>Process</span>
                        <h2 className={styles.processTitle}>
                            <span>We Follow Our Work </span>
                            <span>Process</span>
                        </h2>
                        <p className={styles.processDesc}>
                            <span>Conveniently mesh cooperative services via magnetic outsourcing. </span>
                            <span>Dynamically grow functionalized value whereas accurate e-commerce.</span>
                        </p>
                    </div>
                    <div className={styles.processBottom}>
                        <div className={styles.processBottomItem}>
                            <span className={styles.processBottomItemNum}>1</span>
                            <h5 className={styles.processBottomItemTitle}>Research</h5>
                            <p className={styles.processBottomItemDesc}>Uniquely pursue compelling initiatives expanded.</p>
                        </div>
                        <div className={styles.processBottomItem}>
                            <span className={styles.processBottomItemNum}>2</span>
                            <h5 className={styles.processBottomItemTitle}>Designing</h5>
                            <p className={styles.processBottomItemDesc}>Uniquely pursue compelling initiatives expanded.</p>
                        </div>
                        <div className={styles.processBottomItem}>
                            <span className={styles.processBottomItemNum}>3</span>
                            <h5 className={styles.processBottomItemTitle}>Building</h5>
                            <p className={styles.processBottomItemDesc}>Uniquely pursue compelling initiatives expanded.</p>
                        </div>
                        <div className={styles.processBottomItem}>
                            <span className={styles.processBottomItemNum}>4</span>
                            <h5 className={styles.processBottomItemTitle}>Deliver</h5>
                            <p className={styles.processBottomItemDesc}>Uniquely pursue compelling initiatives expanded.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process;