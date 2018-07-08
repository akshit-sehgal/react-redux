const initialState = { 
    counter: 0
}
const reducer = (prevState = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT': return {counter:prevState.counter+1};
        case 'DECREMENT': return {counter:prevState.counter-1};
        case 'ADD': return {counter: prevState.counter+action.value};
        case 'SUBTRACT': return {counter: prevState.counter+action.value};
    }
    return prevState;
};
export default reducer;