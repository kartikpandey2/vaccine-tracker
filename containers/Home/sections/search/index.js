import { Component } from "react";
import cx from "classnames";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import InputContainer from "../../../../components/InputContainer";
import Calendar from "../../../../components/Calendar";
import Select from "../../../../components/Select";
import { getStates, getDistricts } from "../../../../network";
import styles from "./styles/index.module.css";

class Search extends Component {
  state = {
    activeButton: 2,
    pincode: "",
    state: "",
    district: "",
    date: "",
    allDistricts: [],
    allStates: [],
  };

  async componentDidMount() {
    await this.getStates();
  }

  getStates = async () => {
    try {
      let allStates = await getStates();

      allStates = allStates.map((s) => ({
        value: s.state_id,
        name: s.state_name,
      }));

      this.setState({ allStates });
    } catch (err) {}
  };

  getDistricts = async (stateId) => {
    try {
      let allDistricts = await getDistricts(stateId);

      allDistricts = allDistricts.map((d) => ({
        value: d.district_id,
        name: d.district_name,
      }));

      return allDistricts;
    } catch (err) {}
  };

  updateActiveButton = (newActiveButton) => {
    const { activeButton } = this.state;

    if (newActiveButton !== activeButton) {
      this.setState({ activeButton: newActiveButton });
    }
  };

  handlePincodeInput = (e) => {
    const value = e.target.value;

    this.setState({ pincode: value });
  };

  onDateSelect = (_date, dateString) => {
    this.setState({ date: dateString });
  };

  onStateSelect = async (stateId) => {
    const allDistricts = await this.getDistricts(stateId);

    this.setState({ state: stateId, allDistricts });
  };

  onDistrictSelect = (districtId) => {
    this.setState({ district: districtId });
  };

  renderFindByPinForm = () => {
    const { pincode } = this.state;

    return (
      <>
        <InputContainer label="Pincode" className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={this.handlePincodeInput}
            value={pincode}
          />
        </InputContainer>
      </>
    );
  };

  renderFindByDistrictForm = () => {
    const { allDistricts, allStates } = this.state;

    return (
      <>
        <InputContainer label="State" className={styles.inputContainer}>
          <Select
            showSearch={true}
            dataSource={allStates}
            onChange={this.onStateSelect}
          />
        </InputContainer>
        <InputContainer label="District" className={styles.inputContainer}>
          <Select
            showSearch={true}
            dataSource={allDistricts}
            onChange={this.onDistrictSelect}
          />
        </InputContainer>
      </>
    );
  };

  handleSearch = () => {};

  render() {
    const { activeButton } = this.state;

    return (
      <Card className={styles.search}>
        <div className={styles.buttonContainer}>
          <Button
            className={cx(
              styles.button,
              styles.pinButton,
              activeButton === 1 ? styles.activeButton : ""
            )}
            onClick={() => this.updateActiveButton(1)}
          >
            Find by PIN
          </Button>
          <Button
            className={cx(
              styles.button,
              styles.districtButton,
              activeButton === 2 ? styles.activeButton : ""
            )}
            onClick={() => this.updateActiveButton(2)}
          >
            Find by District
          </Button>
        </div>
        <div>
          {activeButton === 1
            ? this.renderFindByPinForm()
            : this.renderFindByDistrictForm()}
          <InputContainer label="Date" className={styles.inputContainer}>
            <Calendar onChange={this.onDateSelect} />
          </InputContainer>
          <Button
            type="primary"
            className={styles.searchButton}
            onClick={this.handleSearch}
          >
            Search
          </Button>
        </div>
      </Card>
    );
  }
}

export default Search;