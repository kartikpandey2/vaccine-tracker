import cx from "classnames";
import styles from "./styles/index.module.css";

const InputContainer = (props) => {
  const { children, label, className } = props;

  return (
    <div className={cx(styles.inputContainer, className)}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  );
};

export default InputContainer;
