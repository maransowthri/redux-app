const redux = require("redux");

const INC_COUNTER = "INC_COUNTER";
const DEC_COUNTER = "DEC_COUNTER";

const initState = {
  counter: 0,
};

const couterReducer = (state = initState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = redux.createStore(couterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

console.log(store.getState());
store.subscribe(counterSubscriber);
store.dispatch({ type: INC_COUNTER });
store.dispatch({ type: DEC_COUNTER });
