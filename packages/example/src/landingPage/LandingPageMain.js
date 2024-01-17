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
                <img src="/besafebank-hero.png" alt="bank hero" />
            </section>

            <section id="explore-api">
                <Box className={classes.apitainer}>
                    <Typography variant="h3">
                        {translate(
                            'landingpage.main.api_collection.header.title'
                        )}
                    </Typography>
                    <p>
                        {translate(
                            'landingpage.main.api_collection.header.content'
                        )}
                    </p>
                </Box>
                <LandingPageApiList />
            </section>
        </main>
    );
};

const useStyles = makeStyles(theme => ({
    herocontainer: {
        position: 'relative',
        height: '370px',
        [theme.breakpoints.up('md')]: {
            position: 'unset',
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr',
            backgroundColor: '#F15A24',
        },
        '& h2': {
            textShadow: '3px 1px 2px #CEBFB9',
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            right: '50%',
            bottom: '50%',
            [theme.breakpoints.up('md')]: {
                position: 'unset',
                textAlign: 'center',
                color: 'white',
                textShadow: 'unset',
            },
        },
        '& img': {
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: 'auto',
            height: '370px',
        },
    },
    apitainer: {
        backgroundColor: '#E6E6E6',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        '& h3': {
            fontSize: '28px',
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                fontSize: '40px',
            },
        },
        '& p': {
            margin: '0',
            [theme.breakpoints.up('md')]: {
                fontSize: '20px',
            },
        },
    },
}));
