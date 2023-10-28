import styles from './integration.module.css';

const companies = [
    {
        id: 1,
        name: 'Airbnb',
        imgSrc: 'airbnb.png'
    },
    {
        id: 2,
        name: 'Figma',
        imgSrc: 'figma.png'
    },
    {
        id: 3,
        name: 'Facebook',
        imgSrc: 'facebook.png'
    },
    {
        id: 4,
        name: 'Sales Force',
        imgSrc: 'sales-force.png'
    },
    {
        id: 5,
        name: 'Atlassion',
        imgSrc: 'atlassian.png'
    },
    {
        id: 6,
        name: 'Dropbox',
        imgSrc: 'dropbox-2.png'
    },
    {
        id: 7,
        name: 'Dynamic-365',
        imgSrc: 'dynamic-365.png'
    },
    {
        id: 8,
        name: 'Erecruiter',
        imgSrc: 'erecruiter.png'
    },
    {
        id: 9,
        name: 'Evernote',
        imgSrc: 'evernote.png'
    },
    {
        id: 10,
        name: 'Google',
        imgSrc: 'google-icon.png'
    },
    {
        id: 11,
        name: 'Slack',
        imgSrc: 'slack.png'
    },
    {
        id: 12,
        name: 'Google Analytics',
        imgSrc: 'google-analytics.png'
    },
    {
        id: 13,
        name: 'Google Drive',
        imgSrc: 'google-drive.png'
    },
    {
        id: 14,
        name: 'Hubspot',
        imgSrc: 'hubspot.png'
    },
    {
        id: 15,
        name: 'Instagram',
        imgSrc: 'instagram.png'
    },
    {
        id: 16,
        name: 'Linkedin',
        imgSrc: 'linkedin.png'
    },
    {
        id: 17,
        name: 'Mailchimp',
        imgSrc: 'mailchimp.png'
    },
    {
        id: 18,
        name: 'Merekto',
        imgSrc: 'marekto.png'
    },
];

const Integration = () => {
    return (
        <section className={styles.integration}>
            <div className='sectionContainer'>
                <div className={styles.intContainer}>
                    <div className={styles.intTop}>
                        <div className={styles.intSecHead}>
                            <span className={styles.intSubTitle}>Integration</span>
                            <h2 className={styles.intTitle}>We Collaborate with Top Software Company</h2>
                            <p className={styles.intDesc}>Dynamically pursue convergence rather than 24/7 process improvements develop end-to-end customer service action items.</p>
                        </div>
                        <div className={styles.intButton}>
                            <button  className={styles.intBtn}>view all integrations</button>
                        </div>
                    </div>
                    <div className={styles.intGallery}>
                        {companies.map((comp) => {
                            return (
                                <div className={styles.intImgBox} key={comp.id}>
                                    <img className={styles.intCompImg}  src={`assets/imgs/gallery/${comp.imgSrc}`} alt={comp.name} />
                                    <span className={styles.intCompName}>{comp.name}</span>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Integration;