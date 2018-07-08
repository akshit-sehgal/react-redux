import * as actionTypes from './actions';
const initialState = { 
    counter: 0,
    results:[]
}
const reducer = (currentState = initialState, action)=>{
    switch(action.type){
        case actionTypes.INCREMENT: 
        // const newState = Object.assign({},currentState);
        // newState.counter = currentState.counter + 1;
        return {
            ...currentState,
            counter:currentState.counter+1
        };
        case actionTypes.DECREMENT: return {
            ...currentState,
            counter:currentState.counter-1
        };
        case actionTypes.ADD: return {
            ...currentState,
            counter: currentState.counter+action.value
        };
        case actionTypes.SUBTRACT: return {
            ...currentState,
            counter: currentState.counter+action.value
        };
        case actionTypes.STORE_RESULT: return{
            ...currentState,
            results: currentState.results.concat({id:(new Date()).getMilliseconds(),value:currentState.counter})
        } 
        case actionTypes.DELETE_RESULT: 
            // const id = 2;
            // const newArray = [...currentState.results];
            // newArray.results.splice(id,1);
            const newArray = currentState.results
            .filter(
                (result)=> {
                return result.id !== action.resultElementId;
            });
        return {
            ...currentState,
            results: newArray
        }
    }
    return currentState;
};
export default reducer;