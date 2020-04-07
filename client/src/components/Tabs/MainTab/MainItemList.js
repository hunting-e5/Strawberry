import React, { Component } from 'react';
import ItemLists from "./itemlist/ItemList";
import './Main.css';

class MainItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'life',
            supplyPostList: [],
            demandPostList: [],
            message: "Hello",
        }
    }

    /* 루트 디렉토리의 server.js에 하드코딩 되어있는 데이터 가져오기 */
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ supplyPostList: res.supplyPostList, demandPostList: res.demandPostList, message:"server responded" }))
            .catch(err => console.log(err));
    }


    callApi = async () => {
        const response = await fetch('/api/posts');
        const body = await response.json();
        return body; //비동기 방식으로 처리. response 기다리는 동안 다른 정보 가져오기
    }



    /* public 디렉토리의 dummy 데이터 가져오기 */
    // componentDidMount() {
    //     this._getList();
    // }
    // _getList() {
    //     const apiUrl = '/data/dummy/ItemList.json'; // 나중에 src/data/dummy/ItemList.json 절대경로로 수정하기
    //     console.log(apiUrl, "getList");

    //     axios.get(apiUrl)
    //         .then(data => { //가지고 온 리스트를 저장
    //             console.log(apiUrl, "saved");
    //             this.setState({
    //                 ItemList: data.data.ItemList,
    //                 category: 'life'
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        var demandPosts = [];
        var supplyPosts = [];
        demandPosts = this.state.demandPostList.filter(post => (
            post.category === this.state.category
        ))

        supplyPosts = this.state.supplyPostList.filter(post => (
            post.category === this.state.category
        ))

        return (
            <div class='main_wrap'>
                <div class='main'>
                    <div class='list_text'>빌려주세요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ</div>
                    <div id='demands'>
                        <ItemLists list={demandPosts} />
                    </div>
                    <div class='list_text'>빌려가세요~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                    <div id='supplies'>
                        <ItemLists list={supplyPosts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainItemList;
