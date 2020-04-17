/* 2020-04-09 21:34 태형 수정 */

import React, { Component } from 'react';

const axios = require('axios').default;

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            createdUserID: '',
            postCategoryID: '',
            nego: '',
            imgSrc: 'www',
            description: '',
            numLikes: 0,
            demandPostTitle: '',
            demandPostLocation: '',
            demandPostPrice: 0
        }
    }
    
    
    render() {
        return (
            <div>
                상품제목
                상품이미지
                상품가격
                빌려주기 or 빌리기
            </div>
        );
    }
}

export default CreatePost;
