import styles from './styles.module.scss'

const CardDetail = () => {
const items = [
    {title: 'Population:', content: '26,378,275'},
    {title: 'Capital:', content: 'Yamoussoukro'},
    {title: 'Timezones:', content: 'UTC'},
    {title: 'Top level domain:', content: '.ci'},
    {title: 'Languages:', content: 'French'}
]

// mapeo de ITEMS         el nombre que le da acada objeto del array 
const itemsMap = items.map((item) => {
    return (
        <div className={styles.item}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.content}>{item.content}</p>
        </div>
    )
})
return (
    <section className={styles.cardDetail}>
        {itemsMap}
    </section>
)
};

export default CardDetail;
