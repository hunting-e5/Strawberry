import React, {Component} from 'react';
import {Link} from "react-router-dom";

function list(props) {
    return (
        <ul className="itemlist">
            {props.List.map((item, index)=>(
                <li key={index}>
                    <Link to="/" className="link_items">
                        <img src={item.place} className="img_items" alt={item.title}/>
                        <div className="info_items">
                            <strong className="tit_items">
                                {item.title}
                            </strong>
                            {item.price}
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    );
}

export default list;