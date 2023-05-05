import styles from './styles.module.scss';

const Input = () => {
    return(
        <div className={styles.container}>
        <input className={styles.input}
            type="text"
            placeholder="Search Country"
        />
        </div>
        
    )
};

export default Input;