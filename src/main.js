import React, { Component } from 'react';
import axios from 'axios';
import ItemLists from "./components/itemlist/list";
import './Css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'life',
            ItemList: []
        }
    }
    componentDidMount() {
        this._getList();
    }
    _getList() {
        const apiUrl = 'dummy/ItemList.json';
        axios.get(apiUrl)
            .then(data => { //가지고 온 리스트를 저장
                this.setState({
                    ItemList: data.data.ItemList,
                    category: 'life'
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div id = 'main_wrap'>
                <div id = 'main'>
                    {this.state.ItemList.length > 0 ? (
                        <ItemLists list={this.state.ItemList.filter(item => (
                            item.category === this.state.category
                        ))}/>
                    ) : (
                            <span>
                                Loading..
                            </span>
                    )}
                </div>
            </div>
        );
    }
}

export default Main;
