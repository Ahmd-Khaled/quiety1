import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import styles from './serviceItem.module.css';

const ServiceItem = ({icon, iconColor, iconBColor, title, text1, extra}) => {
    return (
        <div className={styles.serviceItem}>
            <div className={styles.serviceItemTop}>
                <div className={styles.serviceItemIcon} style={{backgroundColor: iconBColor}} >
                    <FontAwesomeIcon icon={icon} style={{ color: iconColor}} />
                </div>
                <h3 className={styles.serviceItemTitle}>{title}</h3>
                <p className={styles.serviceItemTxt1}>{text1}</p>
                {extra &&
                    <div className={styles.serviceItemExtra}>
                        <p className={styles.serviceItemTxt1}>Professionally architect unique process improvements via optimal.</p>
                        <h4 className={styles.serviceItemExtraTitle}>Included with...</h4>
                        <ul className={styles.serviceItemExtraListItems}>
                            <li className={styles.serviceItemExtraListItem}>High-converting</li>
                            <li className={styles.serviceItemExtraListItem}>Personal branding</li>
                            <li className={styles.serviceItemExtraListItem}>Modernized prospecting</li>
                            <li className={styles.serviceItemExtraListItem}>Clean and modern</li>
                            <li className={styles.serviceItemExtraListItem}>Showcasing success</li>
                            <li className={styles.serviceItemExtraListItem}>Bootstrap latest version</li>
                        </ul>
                    </div>
                }
            </div>
            <div className={styles.serviceItemLink}>
                <a className={styles.serviceItemLinkA} href="/details">View Details</a>
                <FontAwesomeIcon className={styles.serviceItemLinkIcon} icon={faArrowRightLong} />
            </div>
        </div>
    )
}

export default ServiceItem;