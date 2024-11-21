import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  let buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((element) => {
        return (
          <Buttons
            key={element}
            buttonText={element}
            onButtonClick={onButtonClick}
          />
        );
      })}
    </div>
  );
}

export default ButtonsContainer;
