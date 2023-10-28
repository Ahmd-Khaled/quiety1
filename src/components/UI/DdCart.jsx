import styles from './ddCart.module.css';

const DdCart = (props) => {
    return (
        <div className={styles.ddCart}>{props.children}</div>
    )
}

export default DdCart