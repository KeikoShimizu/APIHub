import React from 'react';
import { SaveButton } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';
import { ValidationError } from 'ra-core';
import get from 'lodash/get';

/**
 * The Reset Password Toolbar displaying the submit button
 *
 * @param {string} button.color The color of the submit button
 * @param {string} button.variant The variant of the submit button
 * @param {string} button.size The size of the submit button
 *
 */
export const ResetPasswordToolbar = props => {
    const classes = useStyles(props);

    const { button } = props;
    const { error } = props;
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
                icon={<span />}
                label="apihub.reset_password.actions.submit"
                variant={variant}
                className={classes.submitButton}
                {...props}
            />
        </>
    );
};

const useStyles = makeStyles(
    theme => ({
        submitButton: {
            backgroundColor: '#006837',
            width: '100%',
            marginTop: '20px',
            '&:hover': {
                backgroundColor: '#1b5e20',
            },
        },
    }),
    {
        name: 'Layer7ResetPasswordToolbar',
    }
);
