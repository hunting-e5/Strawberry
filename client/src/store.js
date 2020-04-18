import { createStore } from 'redux';

var initstate = {
    currentUserID: 1,
}

function reducer(state=initstate, action){
    if(action.type==='userId'){
        return {currentUserID: action.currentUserID}
    }
    if(action.type==='favor'){ 
        var userIdList=[];
        return state
    }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
