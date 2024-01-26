import React from 'react';
import { SaveButton, Toolbar } from 'react-admin';
import { ValidationError } from 'ra-core';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import get from 'lodash/get';

export const LoginToolbar = props => {
    const { loading = false, error = null, ...rest } = props;

    const classes = useStyles(rest);

    const { button } = props;
    // const color = get(button, 'color', 'primary');
    const variant = get(button, 'variant', 'outlined');
    // const size = get(button, 'size', 'small');

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
                label="apihub.login.actions.sign_in"
                disabled={loading}
                // color={color}
                variant={variant}
                // size={size}
                className={classes.signinButton}
                {...rest}
            />
        </>
    );
};

const useStyles = makeStyles(
    theme => ({
        signinButton: {
            backgroundColor: '#006837',
            width: '100%',
            '&:hover': {
                backgroundColor: '#1b5e20',
            },
        },
        circularProgress: {
            color: theme.palette.grey[500],
        },
    }),
    {
        name: 'Layer7LoginToolbar',
    }
);
