import { faSignal, faFileLines, faUserGroup, faCodeCompare, faGear } from '@fortawesome/free-solid-svg-icons';
import ServiceItem from '../serviceItem/ServiceItem';
import styles from './services.module.css';

const servicesContent = [
    // {
    //     id: 1,
    //     icon: faSignal,
    //     iconColor: '#355CFF',
    //     iconBColor: '#CEDDFF',
    //     title: 'Advanced analytics',
    //     text1: 'Synergistically pursue accurate initiatives without economically sound imperatives.',
    //     extra: true,
    // },
    {
        id: 2,
        icon: faFileLines,
        iconColor: '#5cc9a7',
        iconBColor: '#DEF4ED',
        title: 'Automated Reports',
        text1: 'Synergistically pursue accurate initiatives without economically imperatives.',
        extra: false,
    },
    {
        id: 3,
        icon: faUserGroup,
        iconColor: '#f25767',
        iconBColor: '#F8DDE1',
        title: 'User Journey Flow',
        text1: 'Quickly productize prospective value before collaborative benefits.',
        extra: false,
    },
    {   
        id: 4,
        icon: faCodeCompare,
        iconColor: '#0b163f',
        iconBColor: '#C9C7F7',
        title: 'Compare A/B Testing',
        text1: 'Credibly disintermediate functional processes for team driven action.',
        extra: false,
    },
    {
        id: 5,
        icon: faGear,
        iconColor: '#ffb116',
        iconBColor: '#FCF1D8',
        title: 'Compare A/B Testing',
        text1: 'Credibly disintermediate functional processes for team driven action.',
        extra: false,
    },
]

const Services = () => {
    return (
        <section className={styles.services}>
            <div className='sectionContainer'>
                <div className={styles.servicesContainer}>
                    <div className={styles.servicesTop}>
                        <span className={styles.servicesTopSubTitle}>Services</span>
                        <h2 className={styles.servicesTopTitle}>Best Services Grow Your Business Value</h2>
                        <p className={styles.servicesTopDesc}>Globally actualize cost effective with resource maximizing leadership skills.</p>
                    </div>
                    <div className={styles.servicesBottom}>
                        <div className={styles.servicesBottomLeft}>
                            <ServiceItem 
                                icon={faSignal} 
                                iconColor={'#355CFF'}
                                iconBColor={'#CEDDFF'}
                                title={'Advanced analytics'} 
                                text1={'Synergistically pursue accurate initiatives without economically sound imperatives.'} 
                                extra={true}
                            />
                        </div>
                        <div className={styles.servicesBottomRight}>
                            {
                                servicesContent.map((item) => {
                                    return (
                                        <ServiceItem
                                            key={item.id} 
                                            icon= {item.icon}
                                            iconColor= {item.iconColor}
                                            iconBColor= {item.iconBColor}
                                            title=  {item.title}
                                            text1= {item.text1}
                                            extra= {item.extra}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;