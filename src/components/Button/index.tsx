import styles from './styles.module.scss'
type Props = {
    label: string
}
const Button = ({label}: Props) =>{
    return(
        <button className={styles.button}>{label}</button>
    )
}

export default Button;