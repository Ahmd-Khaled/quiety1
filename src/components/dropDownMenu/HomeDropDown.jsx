import styles from './homeDropDown.module.css';

const HomeDropDown = () => {
    return (
        <div className={styles.dropDownMenu}>
            <div className={styles.dropDownMenuContainer}>
                <div className={styles.dropDownMenuLeft}>
                    <h4 className={styles.dropDownMenuTitle}>Different Home</h4>
                    <ul className={styles.dropDownMenuList}>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>1</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Sass Company 1</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>It's for SaaS Software Company</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>2</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Sass Company 2</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Modern Sass agency</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>3</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Desktop App</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Web Software Company</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>4</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>App Landing</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>App and Software Landing</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>5</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Software Application</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>IT solutions and SaaS Application</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>6</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Startup Agency</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Different type of Agency</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>7</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Data Analysis</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Software & Data Analysis</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.dropDownMenuRight}>
                    <h4 className={styles.dropDownMenuTitle}>Different Home</h4>
                    <ul className={styles.dropDownMenuList}>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>8</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>App Landing Two</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Software & Data Analysis</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>9</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>IT Solution</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>IT Solution and Sass Application</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>10</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Cyber Security</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Cyber Security Landing Page</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>11</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Crypto Currency</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Crypto Currency Landing Page</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>12</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Game Solution</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Crypto Server Landing Page</p>
                            </div>
                        </li>
                        <li className={styles.dropDownMenuListItem}>
                            <div className={styles.dropDownMenuListItemNum}>13</div>
                            <div className={styles.dropDownMenuListItemCont}>
                                <h6 className={styles.dropDownMenuListItemContTtl}>Payment Gatway</h6>
                                <p className={styles.dropDownMenuListItemContDesc}>Payment Landing Page</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeDropDown;