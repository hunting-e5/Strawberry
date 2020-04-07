import { createStore } from 'redux';

var initstate = {
    currentUserId: "user1",
}

export default createStore(function(state=initstate, action){
    if(action.type==='userId'){
        return {currentUserId:action.currentUserId}
    }
    if(action.type==='favor'){ 
        var userIdList=[];
        return state
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// function reducer(state = initstate, action){

//  return state;
// }

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());