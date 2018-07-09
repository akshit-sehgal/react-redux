import * as actionTypes from '../actions/actionTypes';
const initialState = {
    results:[]
}
const reducer = (currentState = initialState, action)=>{
    switch(action.type){
        case actionTypes.STORE_RESULT: return{
            ...currentState,
            results: currentState.results.concat({id:(new Date()).getMilliseconds(),value:action.result})
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