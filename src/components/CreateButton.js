import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavLink } from 'react-router-dom'

class CreateButton extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <NavLink exact to={'/create'}>
                    <FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </NavLink>
            </MuiThemeProvider>
        );
    }
}

export default CreateButton;

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
};