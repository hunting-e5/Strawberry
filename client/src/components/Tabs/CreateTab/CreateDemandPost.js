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
            imgSrc: '',
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
                <form>
                    <input type = 'text' name = 'title' placeholder = '제목을 입력하세요' />
                    <input type = 'text' name = 'description' placeholder = '내용을 입력하세요' />
                    <input type = 'text' name = 'price' placeholder = '가격을 입력하세요' />
                    <input type = 'text' name = 'location' placeholder = '위치을 입력하세요' />
                </form>
            </div>
        );
    }
}

export default CreatePost;
