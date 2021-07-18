import { Tag } from "antd";

const TagWrapper = (props) => {
  const { children, ...rest } = props;

  return <Tag {...rest}>{children}</Tag>;
};

export default TagWrapper;
