import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { useTranslate } from 'react-admin';

export const LandingPageFooter = () => {
    const classes = useStyles();

    //Landingpage ==== Language option menu ====
    // 1) Import "useTranslate" from react-admin.
    // 2) Set Object of translate script inside packages>layer7-apihub>src>i18n.
    // 3) Implement translate script by using "translate()" with Object path of translate script.
    const translate = useTranslate();

    return (
        <footer className={classes.root}>
            <ul className={classes.navigation}>
                <li>
                    <Link href="#explore-api" color="inherit">
                        {translate(
                            'landingpage.footer.navigation.explore_apis'
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="#header" color="inherit">
                        {translate('landingpage.footer.navigation.contact')}
                    </Link>
                </li>
                <li>
                    <Link href="#header" color="inherit">
                        {translate('landingpage.footer.navigation.faq')}
                    </Link>
                </li>
            </ul>
            <Box className={classes.container}>
                <img
                    src="/besafebank-logo.png"
                    alt="BeSafeBank Logo"
                    className={classes.logo}
                />
                <Typography variant="p" className={classes.copyright}>
                    ®︎2024 BesafeBank{' '}
                    {translate('landingpage.footer.copyright')}
                </Typography>
            </Box>
        </footer>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(/besafebank-footer-bg-1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        padding: '10px 10px 10px 90px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    navigation: {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: '20px',
        },
        '& a': { textDecoration: 'none' },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-start',
        },
    },
    copyright: {
        fontSize: '10px',
        paddingBottom: '5px',
    },
    logo: {
        width: '200px',
    },
}));
