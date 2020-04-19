/* 태형 수정 */

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
            {item.isDemand ? <Demand item = {item} /> : <Supply item = {item} />} {/* 필요한 상품 시 Demand, 아니면 Supply Component로 */}
        </div>
    );
}

export default ItemInfo;