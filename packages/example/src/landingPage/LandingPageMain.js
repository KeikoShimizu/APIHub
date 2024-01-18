import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import { useTranslate } from 'react-admin';
import { LandingPageApiList } from './LandingPageApiList';

export const LandingPageMain = () => {
    const classes = useStyles();

    //Landingpage ==== Language option menu ====
    // 1) Import "useTranslate" from react-admin.
    // 2) Set Object of translate script files inside packages>layer7-apihub>src>i18n.
    // 3) Implement translate script by using "translate()" with Object path of translate script.
    const translate = useTranslate();

    return (
        <main className={classes.root}>
            <section className={classes.herocontainer}>
                <Typography variant="h2">
                    {translate('landingpage.main.hero.header')}
                </Typography>
                <img src="/besafebank-hero-dots.jpg" alt="bank hero" />
            </section>

            <section id="explore-api" className={classes.apicontainer}>
                <Box className={classes.apititle}>
                    <Typography variant="h3">
                        {translate(
                            'landingpage.main.api_collection.header.title'
                        )}
                    </Typography>
                    <Typography variant="subtitle1">
                        {translate(
                            'landingpage.main.api_collection.header.content'
                        )}
                    </Typography>
                </Box>
                <LandingPageApiList />
            </section>
        </main>
    );
};

const useStyles = makeStyles(theme => ({
    herocontainer: {
        position: 'relative',
        height: 'auto',
        [theme.breakpoints.up('md')]: {
            position: 'unset',
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr',
            backgroundColor: '#F15A24',
            gap: '10px',
        },
        '& h2': {
            // textShadow: '3px 1px 2px #CEBFB9',
            // position: 'absolute',
            // width: '100%',
            // top: '0',
            // left: '0',
            // right: '0',
            // bottom: '0',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // textAlign: 'center',
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'grid',
                position: 'unset',
                textAlign: 'center',
                color: 'white',
                textShadow: 'unset',
                fontSize: '42px',
                margin: '0 10px',
            },
        },
        '& img': {
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: 'auto',
            height: 'auto',
        },
    },
    apicontainer: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
    },
    apititle: {
        backgroundColor: '#E6E6E6',
        padding: '10px 10px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        [theme.breakpoints.up('md')]: {
            padding: '20px 80px',
        },
        '& h3': {
            fontSize: '28px',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                fontSize: '40px',
            },
        },
        '& h6': {
            margin: '0',
            textAlign: 'center',
        },
    },
}));
