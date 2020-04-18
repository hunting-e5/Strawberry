/* 2020-04-09 21:34 태형 수정 */

import React, { Component } from 'react';

const axios = require('axios').default;

class CreateDemandPost extends Component {
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
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    
    handleFormSubmit(e){
        e.preventDefault();
    }
    handleValueChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleFormSubmit}>
                    <p>
                        <input type='text' name='title' value = {this.state.demandPostTitle} placeholder='제목을 입력하세요' onChange={this.handleValueChange} />
                    </p>
                    <p>
                        <input type='text' name='description' value = {this.state.description} placeholder='내용을 입력하세요' onChange={this.handleValueChange} />
                    </p>
                    <p>
                        <input type='text' name='price' value = {this.state.demandPostPrice} placeholder='가격을 입력하세요' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <input type='text' name='location' value = {this.state.demandPostLocation} placeholder='위치를 입력하세요' onChange={this.handleValueChange}/>
                    </p>
                    <p>
                        <input type='submit' />
                    </p>
                </form>
            </div>
        );
    }
}

export default CreateDemandPost;
