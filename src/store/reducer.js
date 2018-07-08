const initialState = { 
    counter: 0
}
const reducer = (prevState = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT': return {counter:prevState.counter+1};
    }
    return prevState;
};
export default reducer;