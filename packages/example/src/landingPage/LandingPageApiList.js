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
import { makeStyles, useTheme } from '@material-ui/core';

export const ApiCard = ({ apiData, key }) => {
    const classes = useStyles();
    const theme = useTheme();

    //Landingpage ==== Language option menu ====
    // 1) Import "useTranslate" from react-admin.
    // 2) Set Object of translate script inside packages>layer7-apihub>src>i18n.
    // 3) Implement translate script by using "translate()" with Object path of translate script.
    const translate = useTranslate();

    return (
        <Card
            variant="outlined"
            sx={{ maxWidth: 360, backgroundColor: '#F9D9D2', border: 'none' }}
            key={key}
        >
            <CardContent>
                <Typography variant="h4" className={classes.cardtitle}>
                    {apiData.label}
                </Typography>
                <Typography>{apiData.content}</Typography>
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
                    <ArrowForwardOutlinedIcon className={classes.arrowicon} />
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
            label: 'API Hub1',
            content: 'This is the API 1 from APIHub by Broadcom.com.',
        },
        {
            label: 'API Hub2',
            content: 'This is the API 2 from APIHub by Broadcom.com.',
        },
        {
            label: 'API Hub 3',
            content: 'This is the API 3 from APIHub by Broadcom.com.',
        },
        {
            label: 'API Hub 4',
            content: 'This is the API 4 from APIHub by Broadcom.com.',
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
        padding: '10px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        justifyItems: 'center',
        alignItems: ' center',
        gap: '20px',
        maxWidth: '1179px',
        [theme.breakpoints.up('md')]: {
            padding: '100px 0',
            gap: '40px',
            margin: 'auto',
        },
    },
    cardtitle: {
        color: '#006837',
        fontSize: '10px',
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
    arrowicon: {
        width: '100px',
        marginLeft: '5px',
    },
}));
