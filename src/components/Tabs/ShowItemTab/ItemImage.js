import React from 'react';
import './ItemImage.css';

function ItemImage(props) {
    return (
        <div class = 'itemImg_wrap'>
            <img class = 'itemImg' alt = 'item' src = {props.src} /> 
        </div>
    );
}

export default ItemImage;