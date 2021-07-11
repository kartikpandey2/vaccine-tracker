import styles from "./styles/index.module.css";
import { Select } from "antd";

const { Option } = Select;

const SelectWrapper = (props) => {
  const { dataSource = [], ...rest } = props;

  return (
    <Select
      bordered={false}
      showArrow={false}
      className={styles.select}
      {...rest}
    >
      {dataSource.map((o, index) => (
        <Option value={o.value} key={index}>
          {o.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectWrapper;
