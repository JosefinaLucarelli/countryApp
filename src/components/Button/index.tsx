import styles from './styles.module.scss'
type Props = {
    label: string
    onclick?: () => void;
}
const Button = ({label, onclick=() => {}}: Props) =>{
    return(
        <button className={styles.button}
        onClick={onclick}>{label}</button>
    )
}

export default Button;