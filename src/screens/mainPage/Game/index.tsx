import Button from "../../../components/Button"
import styles from "./styles.module.scss"

const Game = () => {
    const answers = ["Mexico", "Argentina", "France", "Japan"];
    const answersMap = answers.map(answer => 
        <Button key={answer} label={answer}
        onclick={() => onSelectCountry(answer)}/>); // funcion anonima para poder pasarle una prop a la funcion OnselectCountry

    const onSelectCountry = (country : string) => {
        console.log(country);
    }
    return (
        <div className={styles.container}>
            <h1>Which country is this?</h1>
            <img src="https://flagcdn.com/jp.svg" alt="japan" width= "200px" />
            <div className={styles.answers}>
                {answersMap}
            </div>
        </div>
    )
}

export default Game;
