import * as types from "./actionType";
import axios from "axios";

const getWatches = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios
    .get("https://api-pawan.herokuapp.com/hotels", params)
    .then((r) =>
      dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE, payload: e }));
};

export { getWatches };

