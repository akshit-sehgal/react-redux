import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../store/utility';
const initialState = {
    results:[]
}
const deleteResult = (currentState, action) =>{
    // const id = 2;
            // const newArray = [...currentState.results];
            // newArray.results.splice(id,1);
            const newArray = currentState.results
            .filter(
                (result)=> {
                return result.id !== action.resultElementId;
            });
            return updateObject(currentState, {
                results: newArray            
            });
}
const reducer = (currentState = initialState, action)=>{
    switch(action.type){
        case actionTypes.STORE_RESULT: 
        return updateObject(currentState, {
            results: currentState.results.concat({id:(new Date()).getMilliseconds(),value:action.result})
        });
        case actionTypes.DELETE_RESULT: 
            return deleteResult(currentState,action);
            
    }
    return currentState;
};
export default reducer;