import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions";

const Quote = ({ getQuote, quote, isFetching, error }) => {
  useEffect(() => {
    getQuote();
  }, [getQuote]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>{quote}</h2>

      <button onClick={getQuote}>Inspire Yourself</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getQuote })(Quote);
