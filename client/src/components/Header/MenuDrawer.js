/* 2020-04-07 23:49 태형 수정 */

import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MenuDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
    render() {
        return (
            <span class = 'menu_wrap'>
                <IconButton onClick={this.handleDrawerToggle}><MenuIcon/></IconButton>
                <Drawer className = 'drawer' open={this.state.toggle}>
                    <MenuItem onClick={this.handleDrawerToggle}>냉장고</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>전공책</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>킥보드, 자전거</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>가구</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>옷</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>원룸</MenuItem>
                </Drawer>
            </span>
        );
    }
}

export default MenuDrawer;