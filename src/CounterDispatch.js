import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./actions/counterActions";
import { changeLogin } from "./actions/loginActions";

function CounterDispatch(props) {
  const { counter, status } = props;

  const changeStatus = () => props.dispatch(changeLogin());
  const decrementNumber = () => props.dispatch(decrement());
  const incrementNumber = () => props.dispatch(increment(5));

  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={incrementNumber}>
        Add +
      </button>
      <button type="button" onClick={decrementNumber}>
        Reduce -
      </button>
      {status ? (
        <>
          <h1>Your status is: Online</h1>
          <h2>Your can see it AWESOME!</h2>
        </>
      ) : (
        <h1>Your status is: Offline</h1>
      )}

      <button type="button" onClick={changeStatus}>
        Change your status
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
  status: state.logged
});

export default connect(
  mapStateToProps,
  null
)(CounterDispatch);
