import * as actionTypes from './actionTypes';

export const saveResult = (result) =>{
    result *= 2;
    return {
        type: actionTypes.STORE_RESULT,
        result
    }
}
export const storeResult = (result) => {
    return (dispatch, getState) =>{
        setTimeout(()=>{
            const oldcounter = getState().counter.counter;
            console.log('[Thunk]',oldcounter);
            dispatch(saveResult(result));
        }, 2000);
    }    
};
export const deleteResult = (resultElementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId
    }
};