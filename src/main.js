import React,{Component} from 'react';
import axios from 'axios';
import ItemList from './components/itemlist/list';
import Header from "./components/itemlist/header";
import Category from "./components/itemlist/category";

function main(props) {
    constructor(props){ 
        super(props);
        this.state = { 
            category : 'life',
            ItemList : []
        }
    }
    componentDidMount(){ 
        this._getList();
    }
    _getList(){
        const apiUrl = 'dummy/ItemList.json'; 
        axios.get(apiUrl) .then(data => { 
             this.setState({ 
                 webtoonList : data.data.ItemList
                 }); }) 
                 .catch(error => { 
                     console.log(error); 
                    }); 
            }

    return (
        <div>
            <Header/>
            <Category/>

        </div>
    );
}

export default main;