import React,{Component} from 'react';
import store from '../../../store';
export default class TestId extends Component {
    render(){
        return (
            <div className="TestId">
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserId:"1"
                })
                }}>user1</button>
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserId:"2"
                })
                }}>user2</button>
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserId:"3"
                })
                }}>user3</button>
            </div>
        );
    }
}