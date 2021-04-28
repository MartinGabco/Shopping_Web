import { createStore } from 'redux';

const productsReducer = (state= { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        }
    }
    return state;
};

const store = createStore(productsReducer);

export default store;