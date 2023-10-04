import CardDetail from "../../../components/CardDetail";
import styles from "./styles.module.scss";

const CoutryDetail = () => {
    return (
        <div className={styles.container}> 
            <div>
                <img src="https://flagcdn.com/jp.svg" alt="japan" width= "200px" />
                <h1 className={styles.title}>JAPAN</h1>
            </div>
            <CardDetail />
        </div>

    )
}

export default CoutryDetail;