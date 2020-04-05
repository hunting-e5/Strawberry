/* 물품 선택시 보여지는 화면 */

import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import './ShowItemTab.css'
import ItemImage from './ItemImage';
import ItemInfo from './ItemInfo';

class ShowItemTab extends Component { //나중에 함수 형태로 바꿀 예정. -th
    constructor(props) {
        super(props);
        this.state = {
            ItemList: []
        }
    }

    componentWillMount() { //있어야 하나? -th
        this._getList();
    }

    _getList() {
        const apiUrl = '/data/dummy/ItemList.json'; // 나중에 src/data/dummy/ItemList.json 절대경로로 수정하기
        axios.get(apiUrl)
            .then(data => { //가지고 온 리스트를 저장
                console.log(apiUrl, "saved");
                this.setState({
                    ItemList: data.data.ItemList
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        var inf = queryString.parse(this.props.location.search); //inf는 querystring을 객체 형태로 표현 -th
        var id = Number(inf.id)
        var selectedItem = this.state.ItemList.filter(item => (
            item.id === id
        ))[0]
        
        return (
            selectedItem !== undefined ? 
            <div class = 'showitem_wrap'>
                <div class = 'showitem'>
                    <ItemImage src = {selectedItem.src} />
                    <ItemInfo item = {selectedItem} />
                </div>
            </div>
            : ''
        );
    }
}

export default ShowItemTab;