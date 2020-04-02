import React, {Component} from 'react';
import axios from 'axios';
import ItemLists from "./components/itemlist/list";
import Header from "./components/itemlist/header";
import Category from "./components/itemlist/category";

class main extends Component {
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
        axios.get(apiUrl)
        .then(data => { //가지고 온 리스트를 저장
             this.setState({ 
                 ItemList : data.data.ItemList,
                 category : 'life'
                 }); 
                }) 
                 .catch(error => { 
                     console.log(error); 
                    }); 
            }
    render(){
        return (
            <div>
            {this.state.ItemList.length>0 ?(
                <ItemLists list={this.state.ItemList.filter(item=>(
                    item.category===this.state.category
                ))}
                ></ItemLists>
            ): (
                <span>
                Lodaing..
                </span>
                )}
            </div>
        );
            }
}

export default main;