import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./styles.module.scss";

const MainPage = () => {
  const buttons = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const buttonsMap = buttons.map((continent) =>
    <Button label={continent} key={continent}/>
  )
    
  return (
    <div className={styles.container}>
      <Input />
      <div className={styles.buttons}>
        {buttonsMap}
      </div>
    </div>
  )
}

export default MainPage;
