import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { makeStyles } from '@material-ui/core';

import { ApiHubLanguageSwitcher } from 'layer7-apihub';

export const LandingPageHeader = () => {
    const classes = useStyles();

    //Landingpage ==== Language option menu ====
    //Import "ApiHubLanguageSwitcher" component from "layer7-apihub"
    // 1) Import "useTranslate" from react-admin.
    // 2) Set Object of translate script inside packages>layer7-apihub>src>i18n.
    // 3) Implement translate script by using "translate()" with Object path of translate script.
    const translate = useTranslate();

    const navMenuList = [
        {
            title: translate('landingpage.header.navigation.explore_apis'),
            route: '#explore-api',
        },
        {
            title: translate('landingpage.header.navigation.support'),
            route: '/landingpage',
        },
    ];

    //Language option color set
    const page = 'landingpage';

    return (
        <AppBar id="header" position="sticky">
            <Box className={classes.topSubNav}>
                <Link to="/signup" className={classes.link}>
                    {translate(
                        'landingpage.header.navigation.New_Register_Now'
                    )}
                </Link>
                <ApiHubLanguageSwitcher page={page} />
            </Box>
            <Grid className={classes.topMainNav}>
                <Box className={classes.imgnavbox}>
                    <Box className={classes.logobox}>
                        <img
                            src="/besafebank-globe.png"
                            alt="BeSafeBank Logo"
                            className={classes.logo}
                        />
                        <Typography variant="h1" className={classes.h1}>
                            BeSafeBank
                        </Typography>
                    </Box>
                    {navMenuList.map((navMenu, index) => (
                        <Link
                            to={navMenu.route}
                            className={classes.topNavLink}
                            key={index}
                        >
                            {navMenu.title}
                        </Link>
                    ))}
                </Box>
                <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="success"
                    size="medium"
                    className={classes.button}
                >
                    {translate('landingpage.header.button.sign_in')}
                </Button>
            </Grid>
        </AppBar>
    );
};

const useStyles = makeStyles(theme => ({
    topSubNav: {
        backgroundColor: '#E6E6E6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px',
        padding: '0 4px 0 10px',
        height: '40px',
        [theme.breakpoints.up('md')]: {
            padding: '0 60px',
        },
        '& a': {
            color: 'black',
            textDecoration: 'none',
        },
    },
    topMainNav: {
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: '10px',
        [theme.breakpoints.up('md')]: {
            height: '60px',
            padding: '0 60px',
        },
        '& div': {
            display: 'flex',
            alignItems: ' center',
            marginRight: '10px',
            [theme.breakpoints.up('md')]: {
                marginRight: '0',
                gap: '20px',
            },
        },
    },
    imgnavbox: {
        display: 'flex',
        flexDirection: 'Row',
        gap: '10px',
    },
    logobox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '1px',
    },
    logo: {
        width: '30px',
        [theme.breakpoints.up('md')]: {
            width: '40px',
        },
    },
    h1: {
        color: '#006837',
        fontSize: '22px',
        fontWeight: 'bold',
        [theme.breakpoints.up('md')]: {
            fontSize: '32px',
        },
    },
    topNavLink: {
        color: 'black',
        textDecoration: 'none',
    },
}));
