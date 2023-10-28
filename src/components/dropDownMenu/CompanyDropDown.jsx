import { faCircleQuestion, faClock } from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './companyDropDown.module.css';

const CompanyDropDown = () => {
    return (
        <div className={styles.homeDropDown}>
            <div className={styles.homeDropDownContainer}>
                <div className={styles.homeDropDownLeft}>
                    <h4 className={styles.homeDropDownTitle}>Useful Links</h4>
                    <ul className={styles.homeDropDownList}>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Contact Us</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Service Single</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Our Latest News</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>News Details</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Career</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Career Single</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Integrations</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Integrations Single</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.homeDropDownRight}>
                    <h4 className={styles.homeDropDownTitle}>Utility Pages</h4>
                    <ul className={styles.homeDropDownList}>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Help Center</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Help Details</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Request for Demo</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>User Login</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>User SignUp</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faCircleQuestion} />
                                <span className={styles.homeDropDownLinkTxt}>Recovery Account</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faTriangleExclamation} />
                                <span className={styles.homeDropDownLinkTxt}>404 Page</span>
                            </a>
                        </li>
                        <li className={styles.homeDropDownListItem}>
                            <a className={styles.homeDropDownLink} href="/">
                                <FontAwesomeIcon className={styles.homeDropDownLinkIcon} icon={faClock} />
                                <span className={styles.homeDropDownLinkTxt}>Coming Soon</span>
                            </a>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}

export default CompanyDropDown;