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

function Login() {
    const classes = useStyles();

    return (
        <span id = 'login'>
            <span className={classes.root}>
                <Button>로그인</Button>
            </span>
        </span>
    );
}

export default Login;