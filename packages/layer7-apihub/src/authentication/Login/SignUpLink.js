import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { useTranslate } from 'react-admin';

export const SignUpLink = props => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <>
            <Typography
                variant="h2"
                className={classes.title}
                color="textSecondary"
            >
                {translate('apihub.login.actions.sign_up_title')}
            </Typography>
            <Button
                component={Link}
                to="/signup"
                variant="outlined"
                color="primary"
                className={classes.signupbutton}
            >
                {translate('apihub.login.actions.sign_up')}
            </Button>
        </>
    );
};

const useStyles = makeStyles(
    theme => ({
        title: {
            fontSize: theme.typography.fontSize * 2,
            textAlign: 'center',
            marginBottom: theme.spacing(2),
        },
        signupbutton: {
            color: '#006837',
            borderColor: '#006837',
        },
    }),
    {
        name: 'Layer7LoginSignUpLink',
    }
);
