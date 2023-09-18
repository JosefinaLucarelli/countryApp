import styles from './styles.module.scss'

const CardDetail = () => {
const items = [
    {title: 'Population:', content: '26,378,275'},
    {title: 'Capital:', content: 'Yamoussoukro'},
    {title: 'Timezones:', content: 'UTC'},
    {title: 'Top level domain:', content: '.ci'},
    {title: 'Languages:', content: 'French'}
]

const translations = [
  {key: 1, value: 'Archantina'},
  {key: 2, value: 'Argentina'},
  {key: 3, value: '아르헨티나'},
  {key:4, value: 'Аргентина'}
]

// mapeo de ITEMS         el nombre que le da acada objeto del array 
const itemsMap = items.map((item) => {
    return (
        <div className={styles.item} key={item.title}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.content}>{item.content}</p>
        </div>
    )
})

const translationsMap = translations.map((translsation) => {
    return (
      <span className={styles.tag} key={translsation.key}>
            {translsation.value}
      </span>
    )
})

return (
    <section className={styles.cardDetail}>
      <div>
        {itemsMap}
        </div>
        <div className={styles.container}>
          {translationsMap}
        </div>
    </section>
)
};

export default CardDetail;
