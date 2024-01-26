import React from 'react';
import { SaveButton } from 'react-admin';
import { ValidationError } from 'ra-core';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import get from 'lodash/get';

/**
 * The SignUp Toolbar displaying the submit button and the possible errors of signup form
 *
 * @param {string} button.color The color of the submit button
 * @param {string} button.variant The variant of the submit button
 * @param {string} button.size The size of the submit button
 *
 */
export const SignUpToolbar = props => {
    const { loading = false, error = null, ...rest } = props;
    const classes = useStyles(rest);

    const { button } = props;
    const variant = get(button, 'variant', 'outlined');

    return (
        <>
            {error ? (
                <Typography
                    variant="body1"
                    color="error"
                    className={classes.error}
                >
                    <ValidationError error={error} />
                </Typography>
            ) : null}
            <SaveButton
                icon={
                    loading ? (
                        <CircularProgress
                            className={classes.circularProgress}
                            size={15}
                        />
                    ) : (
                        <span />
                    )
                }
                label="resources.registrations.actions.submit"
                variant={variant}
                className={classes.signupButton}
                {...rest}
            />
        </>
    );
};

const useStyles = makeStyles(
    theme => ({
        signupButton: {
            backgroundColor: '#006837',
            width: '100%',
            marginTop: '20px',
            '&:hover': {
                backgroundColor: '#1b5e20',
            },
        },
        circularProgress: {
            color: theme.palette.grey[500],
        },
    }),
    {
        name: 'Layer7SignUpToolbar',
    }
);
