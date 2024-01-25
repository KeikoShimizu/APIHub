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

    const buttons = [
        { label: 'Explore APIs', router: '/apis' },
        { label: 'Explore Applications', router: '/applications' },
    ];

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Stack spacing={7} alignItems="center">
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
                                Start Developing with BeSafe!
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1">
                        Start developing your APIs with BeSafe Bank’s leading
                        edge API Management Program, that enables you to
                        securely access banking data and wrap it with your
                        corporate brand.
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
                            Start Developing with BeSafe!
                        </Typography>
                        <Typography variant="body1">
                            Start developing your APIs with BeSafe Bank’s
                            leading edge API Management Program, that enables
                            you to securely access banking data and wrap it with
                            your corporate brand.
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
            bottom: 10,
            left: 0,
            color: 'white',
            [theme.breakpoints.up('md')]: {
                margin: '40px',
            },
            '& > h2': {
                fontWeight: 700,
                [theme.breakpoints.up('md')]: {
                    fontSize: '2.5rem',
                },
            },
            '& > p:nth-child(2)': {
                width: '90%',
                color: 'white',
                marginTop: '30px',
                fontWeight: 700,
                [theme.breakpoints.up('md')]: {
                    fontSize: '24px',
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
            fontSize: '12px',
            maxWidth: '240px',
            width: '100%',
            textTransform: 'none',
            textAlign: 'center',
        },
    }),
    {
        name: 'Layer7HomePageContent',
    }
);
