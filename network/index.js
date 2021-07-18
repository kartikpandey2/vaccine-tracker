import axios from "axios";

export const getStates = async () => {
  try {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/states`;
    const resp = await axios.get(url);

    return resp.data.states;
  } catch (err) {
    console.log(err);
  }
};

export const getDistricts = async (stateId) => {
  try {
    const url = `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`;
    const resp = await axios.get(url);

    return resp.data.districts;
  } catch (err) {
    console.log(err);
  }
};

export const getResultsByPin = async (data) => {
  try {
    const { pincode, date } = data;

    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`;
    const resp = await axios.get(url);

    return resp.data.sessions;
  } catch (err) {
    console.log(err);
  }
};

export const getResultsByDistrict = async (data) => {
  try {
    const { districtId, date } = data;

    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`;
    const resp = await axios.get(url);

    return resp.data.sessions;
  } catch (err) {
    console.log(err);
  }
};
