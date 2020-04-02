import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const ItemList=(props)=> {
    return (
        <ul className="mylist">
        {props.list.map((lists) =>
        <li className="list_items" key={lists.id}>
            <Link to="/" className="link_items">
            <img src={lists.src} className="img_items" alt={lists.title}/>
            <div className="info_items">
                <strong className="tit_items">
                    제품명 : {lists.title} <p></p>
                </strong>
                제품 가격 : {lists.price}
            </div>
            </Link>
        </li>
        )}
        </ul>
    );
}

export default ItemList;