import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from "./actionTypes";

export const fetchLorem = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });

    fetch("https://api.lorem.com/ipsum")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ERROR,
          payload: error.message,
        });
      });
  };
};