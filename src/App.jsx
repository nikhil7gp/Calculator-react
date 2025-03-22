import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const res = eval(calVal);
      setCalVal(res);
    } else {
      const newInitialVal = calVal + buttonText;
      setCalVal(newInitialVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display initialVal={calVal}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
