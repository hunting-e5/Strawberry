import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Login(props) {
    const classes = useStyles();

    return (
        <span className={classes.root}>
            <Button>로그인</Button>
        </span>
    );
}

export default Login;