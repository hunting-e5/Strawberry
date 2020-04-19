import React,{Component} from 'react';
import store from '../../../store';

export default class TestId extends Component {
    render(){
        return (
            <div className="TestId">
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserID:1
                })
                }}>user1</button>
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserID:2
                })
                }}>user2</button>
                <button onClick={function(){
                    store.dispatch({type:'userId',
                    currentUserID:3
                })
                }}>user3</button>
            </div>
        );
    }
}