import styles from './sectionHead.module.css';

const SectionHead = ({ subTitle, title, desc, secPosition }) => {
    return (
        <div className={styles.secHead} style={{textAlign: secPosition}}>
            <span className={styles.secHeadSubTitle}>{subTitle}</span>
            <h2 className={styles.secHeadTitle}>{title}</h2>
            <p className={styles.secHeadDesc}>{desc}</p>
        </div>
    )
}

export default SectionHead;