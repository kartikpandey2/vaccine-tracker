import cx from "classnames";
import styles from "./styles/index.module.css";

const Button = (props) => {
  const { className, children, type, ...rest } = props;

  let buttonClass;

  switch (type) {
    case "primary": {
      buttonClass = styles.primaryButton;
      break;
    }

    case "secondary": {
      buttonClass = styles.secondaryButton;
      break;
    }

    default: {
      break;
    }
  }

  return (
    <button className={cx(styles.button, buttonClass, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
