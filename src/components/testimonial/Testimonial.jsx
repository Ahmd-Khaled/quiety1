import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonCard from '../personCard/PersonCard';
import SectionHead from '../SectionHead/SectionHead';
import styles from './testimonial.module.css';

const Testimonial = () => {
    return (
        <section className={styles.testimonial}>
            <div className='sectionContainer'>
                <div className={styles.testContainer}>
                    <div className={styles.testSectionHead}>
                        <SectionHead
                            secPosition={'center'}
                            subTitle={'Testimonial'}
                            title={'What They Say About Us'}
                            desc={'Dynamically initiate market positioning total linkage with clicks-and-mortar technology compelling data for cutting-edge markets.'}
                        />
                    </div>
                    <div className={styles.testCards}>
                        <div className={styles.testCardsLArrow}>
                            <FontAwesomeIcon className={styles.testAngleLeft} icon={faAngleLeft} />
                        </div>
                        <div className={styles.testCardsContainer}>
                            <PersonCard />
                            <PersonCard />
                        </div>
                        <div className={styles.testCardsRArrow}>
                            <FontAwesomeIcon className={styles.testAngleRight} icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;