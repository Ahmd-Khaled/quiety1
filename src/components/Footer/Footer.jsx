import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faDribbble, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='sectionContainer'>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLogo}>
                        <img className={styles.footerLogoImg} src="./assets/imgs/logo-color.png" alt="Logo" />
                        <p className={styles.footerTxt}>Our latest news, articles, and resources, we will sent to your inbox weekly.</p>
                        <form className={styles.footerForm}>
                            <input className={styles.footerFormInput} type="email" placeholder='Enter your email' />
                            <button className={styles.footerFormSubmit} type='submit'>Subscribe</button>
                        </form>
                        <div className={styles.footerRating}>
                            <p className={styles.footerRatingTxt}>10/10 Overall rating</p>
                            <div className={styles.footerRatingIcons}>
                                <FontAwesomeIcon className={styles.footerRatingIcon} icon={faStar} />
                                <FontAwesomeIcon className={styles.footerRatingIcon} icon={faStar} />
                                <FontAwesomeIcon className={styles.footerRatingIcon} icon={faStar} />
                                <FontAwesomeIcon className={styles.footerRatingIcon} icon={faStar} />
                                <FontAwesomeIcon className={styles.footerRatingIcon} icon={faStar} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.footerLinksBox}>
                            <h3 className={styles.footerLinksTitle}>Primary Pages</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinksListItem}><a href="/">Home</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">About Us</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Services</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Career</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Integrations</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Integrations Single</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerLinksBox}>
                            <h3 className={styles.footerLinksTitle}>Pages</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinksListItem}><a href="/">Pricing</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Blog</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Blog Details</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Contact</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Career Single</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Services Single</a></li>
                            </ul>
                        </div>
                        <div className={styles.footerLinksBox}>
                            <h3 className={styles.footerLinksTitle}>Template</h3>
                            <ul className={styles.footerLinksList}>
                                <li className={styles.footerLinksListItem}><a href="/">Contact</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Support</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Support Single</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Request for Demo</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Coming Soon</a></li>
                                <li className={styles.footerLinksListItem}><a href="/">Career Single</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyRights}>
                <div className='sectionContainer'>
                    <div className={styles.footerCopyRightsContainer}>
                        <span className={styles.footerCopyRightsTxt}>&copy; 2022 Quiety Rights Reserved. Designed By <a className={styles.footerCopyRightsDesigner} href="/">ThemeTags</a></span>
                        <div className={styles.footerSocial}>
                            <a className={styles.footerSocialIcon} href="/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a className={styles.footerSocialIcon} href="/">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className={styles.footerSocialIcon} href="/">
                                <FontAwesomeIcon icon={faDribbble} />
                            </a>
                            <a className={styles.footerSocialIcon} href="/">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;