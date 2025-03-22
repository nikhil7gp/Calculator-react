import styles from "./Display.module.css";

const Display = ({ initialVal }) => {
  return (
    <input className={styles.display} type="text" value={initialVal} readOnly />
  );
};

export default Display;
