const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
    counter: 0
};

// Reducer
const rootReducer = (prevState = initialState,action) => {
    switch(action.type){
        case 'INC_COUNTER':
            return{
                ...prevState,
                counter: prevState.counter + 1
            }
        case 'ADD_COUNTER':
            return {
                ...prevState,
                counter: prevState.counter + action.value
            }
    }
    return prevState;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({
    type: 'INC_COUNTER'
});
store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
});

console.log(store.getState());
