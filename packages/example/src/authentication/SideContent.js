import React from 'react';
import { makeStyles } from '@material-ui/core';

export const SideContent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img
                src="/besafebank-globe.png"
                alt="besafebank globe logo"
                className={classes.logo}
            />
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '700px',
            margin: theme.spacing(2),
        },
    },
    logo: {
        width: '80%',
        height: 'auto',
    },
}));
