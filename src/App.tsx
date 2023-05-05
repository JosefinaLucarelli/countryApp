import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

const App = () => {
  return (
    <>
    <Input />
    <Button label="Africa"/>
    <Button label="Oceania"/>
    <Button label="America" />
    <Button label="Europa" />
    <Card img="https://flagcdn.com/ar.svg" label="Argentina" />
    <Card img="https://flagcdn.com/pr.svg" label="Puerto Rico" />
    <Card img="https://flagcdn.com/co.svg" label="Colombia" />
    </>
   )
}

export default App;
