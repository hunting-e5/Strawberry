import React, { Component } from 'react';
import store from '../../../store';

// userId를 변경할 수 있는 3개의 버튼 구현
// 로그인 구현 전까지 유저마다 다른 서비스 (쿠키) 구현할 때 활용 
export default class TestId extends Component {
    render() {
        return (
            <div className="TestId">
                <button onClick={function () {
                    store.dispatch({
                        type: 'userId',
                        currentUserID: 1
                    })
                }}>user1</button>
                <button onClick={function () {
                    store.dispatch({
                        type: 'userId',
                        currentUserID: 2
                    })
                }}>user2</button>
                <button onClick={function () {
                    store.dispatch({
                        type: 'userId',
                        currentUserID: 3
                    })
                }}>user3</button>
            </div>
        );
    }
}