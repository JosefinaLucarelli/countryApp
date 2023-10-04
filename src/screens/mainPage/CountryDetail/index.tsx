import { useParams } from "react-router-dom";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import styles from "./styles.module.scss";

const CountryDetail = () => {
    const paramas = useParams();
    const countries  = ["Japan", "China", "South Korea"];
    const countriesMap = countries.map((country) => <Card img="https://flagcdn.com/jp.svg" label={country} />);

    return(
        <div className={styles.container}>
            <h1>{paramas.regionName}</h1>
            <Input />
            {countriesMap}
        </div>
    )
} 

export default CountryDetail;
