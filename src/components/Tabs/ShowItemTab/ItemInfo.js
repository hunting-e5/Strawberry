import React from 'react';
import './ItemInfo.css';
import Demand from './Demand';
import Supply from './Supply';

function ItemInfo(props) {
    const item = props.item
    
    return (
        <div class = 'itemInfo_wrap'>
            <div class = 'title'>
                <h3>{item.title}</h3>
            </div>
            {item.isDemand ? <Demand item = {item} /> : <Supply item = {item} />}
        </div>
    );
}

export default ItemInfo;