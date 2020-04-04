import React, { Component } from 'react';
import './button.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavLink } from 'react-router-dom'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 80,
    left: 'auto',
    position: 'fixed',
};

class CreateButton extends Component {
    render() {
        return (
            <NavLink exact to={'create'}>
                <MuiThemeProvider>
                    <FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </MuiThemeProvider>
            </NavLink>

        );
    }
}

export default CreateButton;