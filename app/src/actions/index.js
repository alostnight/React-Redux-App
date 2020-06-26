import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

const headers = {
  Accept: "application/json",
};

export const getQuote = () => (dispatch) => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get("https://programming-quotes-api.herokuapp.com/quotes/random", {
      headers,
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCHING_QUOTE_SUCCESS,
        payload: [res.data.en, res.data.author],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: err.response.message,
      });
    });
};
