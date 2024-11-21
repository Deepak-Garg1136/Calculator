import styles from "./Buttons.module.css";
function Buttons({ buttonText, onButtonClick }) {
  return (
    <button
      className={styles.buttons}
      onClick={() => onButtonClick(buttonText)}
    >
      {buttonText}
    </button>
  );
}

export default Buttons;
