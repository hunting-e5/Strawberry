import React from 'react';
import '../Css/Header.css'
import Logo from './Header/Logo';
import SearchBox from './Header/SearchBox';
import Login from './Header/Login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }));

function Header() {
    const classes = useStyles();
    return (
        // <div >
        //     <Logo />
        //     <SearchBox />
        //     <Login />
        // </div>

        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Logo />
                    </Typography>
                    <SearchBox />
                    <Login />
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;