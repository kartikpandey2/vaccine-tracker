import cx from "classnames";
import styles from "./styles/index.module.css";

const Card = (props) => {
  const { className, children } = props;

  return <div className={cx(styles.card, className)}>{children}</div>;
};

export default Card;
