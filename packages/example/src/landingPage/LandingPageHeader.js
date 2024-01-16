import React from 'react';

import { makeStyles } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { ApiHubLanguageSwitcher } from 'layer7-apihub';

export const LandingPageHeader = () => {
    const classes = useStyles();
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

    return (
        <AppBar id="header" position="sticky">
            <Box className={classes.topSubNav}>
                <Link to="/signup" className={classes.link}>
                    {translate(
                        'landingpage.header.navigation.New_Register_Now'
                    )}
                </Link>
                <ApiHubLanguageSwitcher />
            </Box>
            <Grid className={classes.topMainNav}>
                <Box>
                    <img
                        src="/besafebank-logo.png"
                        alt="BeSafeBank Logo"
                        className={classes.logo}
                    />
                    <Typography variant="h1" className={classes.h1}>
                        BeSafeBank
                    </Typography>

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
        backgroundColor: 'gray',
        textAlign: ' right',
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
        '& div': {
            display: 'flex',
            alignItems: ' center',
            gap: '10px',
        },
    },
    logo: {
        width: '200px',
    },
    topNavLink: {
        color: 'black',
        textDecoration: 'none',
    },
}));
