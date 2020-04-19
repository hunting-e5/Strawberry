/* 태형 수정 */

import React from 'react';
import './ItemInfo.css';

function Supply(props) {
    const item = props.item;

    return (
        <div class = 'supply'>
            가져가세요!
            <div class = 'price'>
                가격: {item.price}원
            </div>
        </div>
    );
}

export default Supply;