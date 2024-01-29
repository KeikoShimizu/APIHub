import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { makeStyles, useMediaQuery } from '@material-ui/core';
import { useTranslate } from 'ra-core';

export const HomePageContent = () => {
    const classes = useStyles();
    const translate = useTranslate();

    const buttons = [
        { label: translate('home.buttons.explore_apis'), router: '/apis' },
        {
            label: translate('home.buttons.explore_applications'),
            router: '/applications',
        },
    ];

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Stack spacing={7} alignItems="center" className={classes.root}>
            {isSmall ? (
                <>
                    <Box className={classes.herocontainer}>
                        <img
                            src="/besafebank-home-hero.png"
                            alt="bank"
                            className={classes.image}
                        />
                        <Box className={classes.titlebox}>
                            <Typography variant="h2">
                                {translate('home.title')}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1">
                        {translate('home.description')}
                    </Typography>
                </>
            ) : (
                <Box className={classes.herocontainer}>
                    <img
                        src="/besafebank-home-hero.png"
                        alt="bank"
                        className={classes.image}
                    />
                    <Box className={classes.titlebox}>
                        <Typography variant="h2">
                            {translate('home.title')}
                        </Typography>
                        <Typography variant="body1">
                            {translate('home.description')}
                        </Typography>
                    </Box>
                </Box>
            )}
            <Box className={classes.buttoncontainer}>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        component={Link}
                        to={button.router}
                        variant="contained"
                        color="success"
                        size="medium"
                        className={classes.button}
                    >
                        {button.label}
                    </Button>
                ))}
            </Box>
        </Stack>
    );
};

const useStyles = makeStyles(
    theme => ({
        root: {
            paddingTop: '20px',
        },
        herocontainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
        },

        image: {
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
        },
        titlebox: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            color: 'white',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
                top: 'unset',
                bottom: 10,
                left: 0,
                margin: '40px',
                display: 'block',
            },
            '& > h2': {
                fontWeight: 700,
                fontSize: '2rem',
                textAlign: 'center',
                [theme.breakpoints.up('md')]: {
                    fontSize: '2.5rem',
                    textAlign: 'left',
                },
            },
            '& > p:nth-child(2)': {
                width: '90%',
                color: 'white',
                marginTop: '20px',
                fontWeight: 700,
                [theme.breakpoints.up('md')]: {
                    fontSize: '24px',
                    marginTop: '30px',
                },
            },
        },
        buttoncontainer: {
            display: 'flex',
            width: '100%',
            gap: '20px',
            justifyContent: 'center',
        },
        button: {
            maxWidth: '240px',
            width: '100%',
            textAlign: 'center',
            height: '61px',
            textTransform: 'uppercase',
        },
    }),
    {
        name: 'Layer7HomePageContent',
    }
);
