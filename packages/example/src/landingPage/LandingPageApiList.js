import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';

const ApiCard = ({ apiData, key }) => {
    const translate = useTranslate();

    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }} key={key}>
            <CardContent>
                <Typography variant="h4">{apiData.label}</Typography>
                <Typography>{apiData.content}</Typography>
            </CardContent>
            <Divider light variant="middle" />
            <CardActions>
                <Link to="/login">
                    {translate(
                        'landingpage.main.api_collection.api_card.learn_more'
                    )}
                    <ArrowForwardIcon />
                </Link>
            </CardActions>
        </Card>
    );
};

export const LandingPageApiList = () => {
    // ----> Modify data object for API data card in Landing page.
    const staticAPIDataList = [
        {
            label: 'API HUb1',
            content: 'This is the API 1 from APIHub by Broadcom.com.',
        },
        {
            label: 'API HUb2',
            content: 'This is the API 2 from APIHub by Broadcom.com.',
        },
        {
            label: 'API HUB 3',
            content: 'This is the API 3 from APIHub by Broadcom.com.',
        },
        {
            label: 'API HUB 4',
            content: 'This is the API 4 from APIHub by Broadcom.com.',
        },
    ];
    return (
        <>
            {staticAPIDataList.map((data, index) => (
                <ApiCard apiData={data} key={index} />
            ))}
        </>
    );
};
