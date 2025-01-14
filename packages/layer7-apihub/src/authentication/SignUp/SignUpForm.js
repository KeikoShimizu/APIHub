import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    email,
    required,
    SimpleForm,
    TextInput,
    useTranslate,
} from 'react-admin';
import { makeStyles, Link, Typography, useMediaQuery } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import isEmpty from 'lodash/isEmpty';
import { SignUpToolbar } from './SignUpToolbar';
import { ConfirmSlider } from '../../ui';
import { getErrorMessage } from '../../useLayer7Notify';

export const SignUpForm = props => {
    const classes = useStyles(props);
    const { onSubmit = () => {}, toolbarProps, serverError } = props;
    let showError = false;
    const {
        title,
        form,
        colorAlert,
        colorTextSecondary,
        confirmSliderHeader,
        ...sliderClasses
    } = classes;
    const translate = useTranslate();
    const [formConfirmed, setFormConfirmed] = useState(false);
    const [showSliderAlert, setShowSliderAlert] = useState(false);
    const [sliderLabelColor, setSliderLabelColor] = useState('textPrimary');
    const submit = data => {
        const { EmailConfirmation, ...registration } = data;

        if (!formConfirmed) {
            setShowSliderAlert(true);
            return;
        }

        onSubmit(registration);
    };

    const sliderChange = (event, value) => {
        if (value === 100) {
            setFormConfirmed(true);
            setSliderLabelColor('textSecondary');
            setShowSliderAlert(false);
        } else {
            setFormConfirmed(false);
        }
    };

    const validate = () => {
        if (!isEmpty(serverError) && !showError) {
            const { error } = serverError;
            const message = getErrorMessage(error);
            showError = true;
            return {
                OrganizationName: message,
            };
        }
    };
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const gridDirection = isSmall ? 'column' : 'row';

    console.log('Yes or No', isSmall);

    return (
        <>
            <SimpleForm
                className={classes.form}
                save={submit}
                toolbar={<SignUpToolbar {...toolbarProps} />}
                redirect={false}
                validate={validate}
            >
                <Stack direction={gridDirection} className={classes.inputBox}>
                    <TextInput
                        source="Email"
                        type="email"
                        label="resources.registrations.fields.email"
                        variant="outlined"
                        fullWidth
                        validate={ValidateEmail}
                    />
                    <TextInput
                        source="EmailConfirmation"
                        type="email"
                        label="resources.registrations.fields.email_confirmation"
                        variant="outlined"
                        fullWidth
                        validate={ValidateEmailConfirmation}
                    />
                </Stack>
                <Stack direction={gridDirection} className={classes.inputBox}>
                    <TextInput
                        source="OrganizationName"
                        type="text"
                        label="resources.registrations.fields.organization"
                        variant="outlined"
                        fullWidth
                    />
                    <TextInput
                        source="OrganizationDescription"
                        type="text"
                        label="resources.registrations.fields.organization_description"
                        variant="outlined"
                        fullWidth
                        multiline
                    />
                </Stack>
                <>
                    <ConfirmSliderHeader
                        classes={classes}
                        sliderLabelColor={sliderLabelColor}
                        showAlert={showSliderAlert}
                    />
                    <ConfirmSlider
                        confirmed={formConfirmed}
                        classes={sliderClasses}
                        onChange={sliderChange}
                        ThumbComponent={ConfirmSliderThumb}
                    />
                </>
            </SimpleForm>

            <Typography
                variant="body1"
                align="center"
                className={classes.movelogin}
            >
                <Link component={RouterLink} to="/login">
                    {translate('resources.registrations.actions.login')}
                </Link>
            </Typography>
        </>
    );
};

const ValidateEmail = [required(), email()];
const ValidateEmailConfirmation = [
    required(),
    email(),
    validateAreEqual('Email', 'EmailConfirmation'),
];

export function validateAreEqual(
    field1,
    field2,
    message = 'resources.registrations.notifications.email_confirmation_error'
) {
    return (value, allValues) => {
        return allValues[field1] === allValues[field2] ? undefined : message;
    };
}

const ConfirmSliderThumb = props => {
    const translate = useTranslate();
    return (
        <Typography variant="body2" align="center" {...props}>
            {props.confirmed
                ? translate('resources.registrations.slider.confirmed')
                : translate('resources.registrations.slider.unconfirmed')}
        </Typography>
    );
};

const ConfirmSliderHeader = ({
    classes,
    showAlert,
    sliderLabelColor,
    ...rest
}) => {
    const translate = useTranslate();
    return (
        <div className={classes.confirmSliderHeader}>
            <Typography
                gutterBottom
                color={sliderLabelColor}
                classes={{
                    colorTextSecondary: classes.colorTextSecondary,
                }}
            >
                {translate('resources.registrations.fields.robot')}
            </Typography>
            {showAlert && (
                <Typography
                    variant="caption"
                    gutterBottom
                    color="textPrimary"
                    classes={{ colorTextPrimary: classes.colorAlert }}
                >
                    {translate(
                        'resources.registrations.notifications.confirmation_required'
                    )}
                </Typography>
            )}
        </div>
    );
};

const useStyles = makeStyles(
    theme => ({
        form: {
            '& >:first-child': {
                padding: 0,
            },
        },
        inputBox: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                gap: '20px',
            },
        },
        movelogin: {
            marginTop: '30px',
            '& > a': {
                color: '#F15A24',
            },
        },
        title: {
            fontSize: theme.typography.fontSize * 2,
            marginBottom: theme.spacing(6),
            color: theme.palette.getContrastText(
                theme.palette.background.default
            ),
        },
        root: {
            margin: '-15px 0 20px 0',
            width: '50%',
        },
        thumb: {
            height: 38,
            width: '100%',
            backgroundColor: theme.palette.grey[500],
            color: theme.palette.grey[800],
            borderRadius: 2,
            marginTop: -2,
            marginLeft: 0,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
            '&:hover': {
                backgroundColor: theme.palette.grey[400],
            },
            '&$disabled': {
                height: 38,
                width: '100%',
                backgroundColor: '#006837',
                color: theme.palette.common.white,
                borderRadius: 2,
                marginTop: -2,
                marginLeft: 0,
            },
        },
        rail: {
            height: 34,
            borderRadius: 2,
            width: '200%',
            backgroundColor: theme.palette.grey[400],
        },
        track: {
            height: 34,
            borderRadius: 2,
            backgroundColor: theme.palette.grey[500],
        },
        disabled: {},
        colorTextSecondary: {
            color: theme.palette.success.dark,
        },
        colorAlert: {
            color: theme.palette.error.main,
        },
        confirmSliderHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
        },
    }),
    {
        name: 'Layer7SignUpForm',
    }
);
