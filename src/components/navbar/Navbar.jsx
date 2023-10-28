import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
import { useState } from 'react';
import HomeDropDown from '../dropDownMenu/HomeDropDown';
import CompanyDropDown from '../dropDownMenu/CompanyDropDown';

const Navbar = () => {
    const [homeClicked, setHomeClicked] = useState(false);
    const [companyClicked, setCompanyClicked] = useState(false);
    const [bodyClicked, setBodyClicked] = useState(false);

    const homeDropDownHandler = (event) => {
        event.preventDefault();
        setHomeClicked(!homeClicked);
        setCompanyClicked(false);
    };

    const companyDropDownHandler = (event) => {
        event.preventDefault();
        setCompanyClicked(!companyClicked);
        setHomeClicked(false);
    };

    // const bodyElement = document.getElementById('overlays');
    // bodyElement.onClick(setHomeClicked(false));
    // bodyElement.onclick(setCompanyClicked(false));
    
    return (
        <section className={styles.navbar}>
            <div className='sectionContainer'>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarLogo}>
                        <img className={styles.navbarLogoImg} src="./assets/imgs/logo-white.png" alt="Logo" />
                    </div>
                    <div className={styles.navbarLinks}>
                        <ul className={styles.navbarList}>
                            <li className={styles.navbarListItem} onClick={homeDropDownHandler}>
                                <a className={styles.home} href="/home">home</a>
                                <FontAwesomeIcon className={styles.navbarDownIcon} icon={faCaretDown} />
                            </li>
                            <li className={styles.navbarListItem}>
                                <a href="/about">about</a>
                            </li>
                            <li className={styles.navbarListItem}>
                                <a href="/services">services</a>
                            </li>
                            <li className={styles.navbarListItem}>
                                <a href="/pricing">pricing</a>
                            </li>
                            <li className={styles.navbarListItem} onClick={companyDropDownHandler}>
                                <a className={styles.company} href="/company">company</a>
                                <FontAwesomeIcon className={styles.navbarDownIcon} icon={faCaretDown} />
                            </li>
                        </ul>
                    </div>
                    {companyClicked && <CompanyDropDown />}
                    {homeClicked && <HomeDropDown />}
                    
                    <div className={styles.navbarBtns}>
                        <button className={styles.navbarSignBtn}>sign in</button>
                        <button className={styles.navbarGetStartedBtn}>get started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar