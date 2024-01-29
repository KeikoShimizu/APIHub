import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useTranslate } from 'react-admin';

export const Footer = () => {
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <div className={classes.root}>
            <Typography
                color="textSecondary"
                variant="body2"
                className={classes.copyright}
            >
                ®︎2024 BesafeBank {translate('landingpage.footer.copyright')}
            </Typography>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30px',
    },
    copyright: {
        fontSize: '0.75rem',
        textAlign: 'center',
    },
}));
