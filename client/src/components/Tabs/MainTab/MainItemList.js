//태형 2020-04-07 21:40 수정
//상아 2020-04-19 18:35 수정

import React, { Component } from 'react';
import axios from 'axios';
import ItemList from "./itemList/ItemList";
import './MainItemList.css';


// 메인화면에서 DemandPost, SupplyPost를 보여주는 컴포넌트
class MainItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'life',
            demandPostList: [],
            message: "Hello",
        };
        this.callApi = this.callApi.bind(this);
    }

    /* res = {"demandPostList":[...]} */
    componentWillMount(){
        this.callApi();
    }

    // 루트 디렉토리의 server.js에서 mysql에 있는 데이터를 보내면, 이를 axios API로 객체로 받아서 리스트에 넣는다
    callApi = () => {
        axios.post('/api/readDemandPost')
        .then((res) => {
            console.log('data:', res.data);
            this.setState({demandPostList: res.data});})
    }

    render() {
        var demandPosts = this.state.demandPostList;
        // var demandPosts = this.state.demandPostList.filter(post => (
        //     post.currentCategory === this.state.currentCategory
        // ))

        // var supplyPosts = this.state.supplyPostList.filter(post => (
        //     post.currentCategory === this.state.currentCategory
        // ))

        return (
            <div class='mainItemList_wrap'>
                <div class='mainItemList'>
                    <div class='list_text'>빌려주세요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ</div>
                    <div id='demands'>
                        <ItemList list={demandPosts} />
                    </div>
                    {/* <div class='list_text'>빌려가세요~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                    <div id='supplies'>
                        <ItemList list={supplyPosts} />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default MainItemList;
