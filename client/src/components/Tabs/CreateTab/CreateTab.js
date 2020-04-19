import React from 'react';
import CreateSupplyPost from './CreateSupplyPost';
import CreateDemandPost from './CreateDemandPost';
import './CreateTab.css';

function CreateTab(props) {
    return (
        <div>
            <div class = 'select_buttons_wrap'>
                <button class = 'select_demand_or_supply'>필요해요 글 만들기</button>
                <button class = 'select_demand_or_supply'>공유할게요 글 만들기</button>
            </div>
            <CreateDemandPost />
            <CreateSupplyPost />
        </div>
    );
}

export default CreateTab;