import { DatePicker } from "antd";
import styles from "./styles/index.module.css";

const dateFormat = "DD-MM-YYYY";

const Calendar = (props) => {
  return (
    <DatePicker
      className={styles.calendar}
      suffixIcon={() => <div />}
      format={dateFormat}
      {...props}
    />
  );
};

export default Calendar;
