import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { makeStyles } from '@material-ui/core';

export const ApiCard = ({ apiData, key }) => {
    const classes = useStyles();

    //Landingpage ==== Language option menu ====
    // 1) Import "useTranslate" from react-admin.
    // 2) Set Object of translate script inside packages>layer7-apihub>src>i18n.
    // 3) Implement translate script by using "translate()" with Object path of translate script.
    const translate = useTranslate();

    return (
        <Card
            variant="outlined"
            sx={{
                width: 380,
                backgroundColor: '#F9D9D2',
                border: 'none',
                padding: ' 12px',
            }}
            key={key}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    className={classes.cardtitle}
                    sx={{ color: '#006837', marginBottom: '10px' }}
                >
                    {apiData.label}
                </Typography>
                <Typography variant="body1" sx={{ height: '48px' }}>
                    {apiData.content}
                </Typography>
            </CardContent>
            <Divider
                light
                variant="middle"
                sx={{ backgroundColor: '#006837' }}
            />
            <CardActions className={classes.learnmore}>
                <Link to="/login">
                    {translate(
                        'landingpage.main.api_collection.api_card.learn_more'
                    )}
                    <ArrowForwardOutlinedIcon
                        className={classes.arrowicon}
                        sx={{ marginLeft: '5px' }}
                    />
                </Link>
            </CardActions>
        </Card>
    );
};

export const LandingPageApiList = () => {
    const classes = useStyles();

    // Landingpage ==== API data card collection ====
    // Modify data object for API data card on Landing page.
    const staticAPIDataList = [
        {
            label: 'Accounts API',
            content: 'Get a list of your current accounts',
        },
        {
            label: 'Account Balances API',
            content: 'Get your account balances',
        },
        {
            label: 'Account Transactions API',
            content: 'Get a list of your transactions for a specific account',
        },
        {
            label: 'Mortgage Rates API',
            content: 'Get a list of the current mortgage rates',
        },
    ];
    return (
        <Box className={classes.container}>
            {staticAPIDataList.map((data, index) => (
                <ApiCard apiData={data} key={index} />
            ))}
        </Box>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        padding: '30px 10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        justifyItems: 'center',
        alignItems: ' center',
        gap: '20px',
        maxWidth: '900px',
        [theme.breakpoints.up('md')]: {
            padding: '80px 0',
            gap: '40px',
            margin: 'auto',
        },
    },
    learnmore: {
        paddingLeft: '8px',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start',
        },
        '& a': {
            color: '#006837',
            display: 'flex',
            flexDirection: 'row',
            textDecoration: 'none',
            paddingLeft: '8px',
        },
    },
}));
