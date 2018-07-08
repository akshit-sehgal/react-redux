const initialState = { 
    counter: 0,
    results:[]
}
const reducer = (currentState = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT': 
        // const newState = Object.assign({},currentState);
        // newState.counter = currentState.counter + 1;
        return {
            ...currentState,
            counter:currentState.counter+1
        };
        case 'DECREMENT': return {
            ...currentState,
            counter:currentState.counter-1
        };
        case 'ADD': return {
            ...currentState,
            counter: currentState.counter+action.value
        };
        case 'SUBTRACT': return {
            ...currentState,
            counter: currentState.counter+action.value
        };
        case 'STORE_RESULT': return{
            ...currentState,
            results: currentState.results.concat({id:new Date(),value:currentState.counter})
        } 
        case 'DELETE_RESULT': 
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