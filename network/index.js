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

export const getResultsByPin = async () => {
  try {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=110001&date=31-03-2021`;
    const resp = await axios.get(url);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
