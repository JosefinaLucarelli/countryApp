import styles from './styles.module.scss'

type Props = {
    img: string,
    label: string
}
const Card = (props: Props) => {
    return (
<div className={styles.card}>
    <img src={props.img} alt='country image' width='100px' />
    <h1>{props.label}</h1>
</div>
    )
} 

export default Card;