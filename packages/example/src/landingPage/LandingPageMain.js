import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { LandingPageApiList } from './LandingPageApiList';
import { useTranslate } from 'react-admin';

export const LandingPageMain = () => {
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <main>
            <section>
                <Typography variant="h2">
                    {translate('landingpage.main.hero.header')}
                </Typography>
                <img
                    src="/besafebank-hero.png"
                    alt="bank hero"
                    className={classes.heroimage}
                />
            </section>
            <section id="explore-api">
                <Box>
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
                <div>
                    <LandingPageApiList />
                </div>
            </section>
        </main>
    );
};

const useStyles = makeStyles(theme => ({
    heroimage: {
        width: '100%',
        height: 'auto',
    },
}));
