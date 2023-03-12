import {
  SINGLE_REQUEST,
  SINGLE_SUCCESS,
  SINGLE_FAIL,
  MULTIPLE_REQUEST,
  MULTIPLE_SUCCESS,
  MULTIPLE_FAIL,
} from "../constants/upload";

import axios from "axios";

export const createSingle = (formData) => async (dispatch, getState) => {
  try {
    dispatch({type:SINGLE_REQUEST})

    const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
    
      const { data } = await axios.post(
        "http://localhost:8080/api/singleFile",
        formData,
        config
      );

      dispatch({type:SINGLE_SUCCESS,payload:data})

  } catch (erorr) {
    dispatch({
      type: SINGLE_FAIL,
      payload:
      erorr.response && erorr.response.data.message
          ? erorr.response.data.message
          : erorr.message,
    });
  }
};

export const createMultiple = (formData,title) => async (dispatch, getState) => {
  try {
    dispatch({type:SINGLE_REQUEST})

    const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
    
      const { data } = await axios.post(
        "http://localhost:8080/api/multipleFiles",
          formData,
        config
      );

      dispatch({type:SINGLE_SUCCESS,payload:data})

  } catch (erorr) {
    dispatch({
      type: SINGLE_FAIL,
      payload:
      erorr.response && erorr.response.data.message
          ? erorr.response.data.message
          : erorr.message,
    });
  }
};
