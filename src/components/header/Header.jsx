import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';

function Header() {
    return (
        <section className={styles.header}>
            <div className='sectionContainer'>
                <div className={styles.headerContainer}>
                    <div className={styles.headerTop}>
                        <div className={styles.headerTopLeft}>
                            <h1 className={styles.headerTitle}>
                                <span>Powerful</span>
                                <span>Solutions for Your</span>
                                <span>Business</span>
                            </h1>
                            <p className={styles.headerDesc}>
                                Proactively coordinate quality quality vectors vis-a-vis
                                supply chains client-centric web services.
                            </p>
                            <form className={styles.headerForm}>
                                <input className={styles.headerInput} type="email" placeholder='Enter Your Email Address' />
                                <button type='submit' className={styles.headerSubsBtn}>subscribe</button>
                            </form>
                            <div className={styles.headerTrial}>
                                <div>
                                    <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
                                    <span>Free 14-day trial</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon className={styles.checkIcon}  icon={faCheck} />
                                    <span>No credit card required</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerTopRight}>
                            <div className={styles.headerTopRightImg}>
                                <img className={styles.headerTopRightImgMob} src="./assets/imgs/phone-screen.png" alt="phone-screen-Img" />
                                <img className={styles.headerTopRightImgLap} src="./assets/imgs/mac-screen.png" alt="mac-screen-Img" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerBottom}>
                        <div className={styles.headerCompaniesImgs}>
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-1.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-2.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-3.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-4.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-5.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-6.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-7.svg" alt="CompanyImg" />
                            <img className={styles.headerCompanyImg} src="./assets/imgs/client-logo-8.svg" alt="CompanyImg" />
                        </div>
                        <div className={styles.headerCompaniesTxt}>
                            <span>Trusted More than 25,00+ Companies Around the World</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;