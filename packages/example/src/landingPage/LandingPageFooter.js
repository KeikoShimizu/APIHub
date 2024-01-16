import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Link from '@mui/material/Link';
import { useTranslate } from 'react-admin';

export const LandingPageFooter = () => {
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <footer>
            <Link href="#explore-api" color="inherit">
                {translate('landingpage.footer.navigation.explore_apis')}
            </Link>
            <Link href="#header" color="inherit">
                {translate('landingpage.footer.navigation.contact')}
            </Link>
            <Link href="#header" color="inherit">
                {translate('landingpage.footer.navigation.faq')}
            </Link>
            <img
                src="/besafebank-logo.png"
                alt="BeSafeBank Logo"
                className={classes.logo}
            />
            <Typography variant="p">
                ®︎2024 BesafeBank {translate('landingpage.footer.copyright')}
            </Typography>
        </footer>
    );
};

const useStyles = makeStyles(theme => ({
    logo: {
        width: '200px',
    },
}));
