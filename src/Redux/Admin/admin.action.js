// Product actions here

import axios from "axios";
import  {getAllProducts}  from "../products/action";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "./admin.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_ADMIN = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADING });
  // console.log("data")
  try {
    let res1 = await axios.get("https://wild-jay-shoulder-pads.cyclic.app/carts");
    let res2 = await axios.get("https://wild-jay-shoulder-pads.cyclic.app/user/users");

    let data = { carts: res1.data, users: res2.data };

    console.log(data);

    return dispatch({ type: GET_ADMIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ADMIN_ERROR, payload: err.message });
  }
};

export const ACTION_DELETE_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_LOADING });

    try {
      await axios.delete(`https://sample-backend-cvar.onrender.com/${payload.value}`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: payload.id,
          value: payload.value,
          name: payload.name,
        },
      });
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      console.log("i am here");
      return dispatch(getAllProducts());
    } catch (err) {
      dispatch({ type: DELETE_PRODUCT_ERROR, payload: err.message });
    }
  };

export const ACTION_ADD_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_LOADING });
    console.log(payload.area);
    try {
      await axios.post(`https://sample-backend-cvar.onrender.com/${payload.value}`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          area: payload.area,
        },
      });

      await axios.post(`http://localhost:8080/${payload.value}`, payload.area);

      return dispatch({ type: ADD_PRODUCT_SUCCESS });
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: err.message });
    }
  };

