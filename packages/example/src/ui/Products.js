import React from 'react';
import { Box } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { useTranslate } from 'react-admin';

export const Products = () => {
    const translate = useTranslate();

    return (
        <Box m={4}>
            <Typography variant="h2">
                {translate('resources.products.name')}
            </Typography>
            <Typography variant="subtitle">
                {translate('resources.products.contents')}
            </Typography>
        </Box>
    );
};
