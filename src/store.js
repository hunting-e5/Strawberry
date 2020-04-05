import { createStore } from 'redux';

<<<<<<< HEAD
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
=======
var initState = {
    
}

function reducer(state = initState, action){
    var newState, newMyRooms;
    // if (action.type === 'create') {
    //     var currentMaxId = state.rooms.length;
    //     var newId = currentMaxId + 1;
    //     var post = { id: newId, title: action.title, price: action.price, dest: action.dest, desc: action.desc, joinedUsers: [state.userId], maxNum: action.maxNum };
    //     console.log(post);
    //     var newRooms = [...state.rooms, room];
    //     newMyRooms = [...state.myRooms, room]
    //     newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId, myRooms: newMyRooms };
    //     return newState;
    // }
}
>>>>>>> 72b79932f4b1fd0ee785309a98c360b3c836129a

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());