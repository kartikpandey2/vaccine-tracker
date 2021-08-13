import { Component } from "react";
import cx from "classnames";
import Card from "../../../../components/Card";
import Tag from "../../../../components/Tag";
import styles from "./styles/index.module.css";

const allTags = [
  {
    key: "fee_type",
    color: "magenta",
    value: (v) => v,
    available: (d) => d === "Free",
  },
  {
    key: "available_capacity_dose1",
    color: "geekblue",
    value: (count) => `${count} First Dose Available`,
    available: (d) => d > 0,
  },
  {
    key: "available_capacity_dose2",
    color: "blue",
    value: (count) => `${count} Second Dose Available`,
    available: (d) => d > 0,
  },
  {
    key: "min_age_limit",
    color: "purple",
    value: (age) => `${age}+ Allowed`,
    available: (d) => d,
  },
];

class ResultCard extends Component {
  renderTags = (data) => {
    const availableTags = allTags.filter((t) => t.available(data[t.key]));

    return availableTags.map((t, index) => (
      <Tag color={t.color} key={index}>
        {t.value(data[t.key])}
      </Tag>
    ));
  };

  getAvailableDoseTagColor = (count) => {
    if (count > 50) {
      return "green";
    }

    if (count <= 50 && count > 10) {
      return "orange";
    }

    return "red";
  };

  render() {
    const { data, className } = this.props;

    const { name, address, from, to, vaccine, available_capacity, ...rest } =
      data;

    const slotTime = `${from} - ${to}`;

    return (
      <Card className={cx(styles.resultCard, className)}>
        <div className={cx("flex", "fSpaceBetween")}>
          <div className={styles.centerName}>{name}</div>
          <Tag
            color={this.getAvailableDoseTagColor(available_capacity)}
          >{`${available_capacity} Dose`}</Tag>
        </div>
        <div>
          <div>{address}</div>
          <div>{slotTime}</div>
          <div>{vaccine}</div>
        </div>
        <div>{this.renderTags(rest)}</div>
      </Card>
    );
  }
}

export default ResultCard;
