import React, { useState } from 'react';
import {
    Button,
    Divider,
    List,
    ListItem,
    makeStyles,
    Snackbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Alert from '@material-ui/lab/Alert';
import { useTranslate } from 'react-admin';
import { CALOGOSRC } from './CALogoSrc.png';

export const AuthSchemeList = props => {
    const { authSchemes, onClick, defaultAuthScheme, credsReqd } = props;
    const classes = useStyles(props);
    const [selectedScheme, setSelectedScheme] = useState(defaultAuthScheme);
    const translate = useTranslate();

    const onSelectScheme = scheme => {
        if (!scheme.credsReqd) {
            window.location = scheme.url;
            return;
        }

        if (selectedScheme && selectedScheme.uuid === scheme.uuid) {
            setSelectedScheme(null);
            onClick(null);
        } else {
            setSelectedScheme(scheme);
            onClick(scheme);
        }
    };

    const StartIcon = props => {
        const { selectedScheme, scheme } = props;
        if (scheme.logo) {
            return (
                <img
                    style={{ maxHeight: '36px', maxWidth: '36px' }}
                    src={scheme.logo}
                />
            );
        } else {
            return (
                <img
                    style={{ maxHeight: '36px', maxWidth: '36px' }}
                    src={CALOGOSRC}
                />
            );
        }
        if (scheme.credsReqd) {
            if (selectedScheme && selectedScheme.uuid === scheme.uuid) {
                return (
                    <img
                        style={{ maxHeight: '36px', maxWidth: '36px' }}
                        src={CALOGOSRC}
                    />
                );
            } else {
                return (
                    <img
                        style={{ maxHeight: '36px', maxWidth: '36px' }}
                        src={CALOGOSRC}
                    />
                );
            }
        }
        return null;
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={!!selectedScheme}
            >
                <Alert elevation={6} variant="outlined" severity="info">
                    {selectedScheme
                        ? `${translate(
                              'apihub.login.notifications.selected_scheme'
                          )} ${selectedScheme.name}`
                        : null}
                </Alert>
            </Snackbar>
        </div>
    );
};

const useStyles = makeStyles(
    theme => ({
        root: {
            marginTop: theme.spacing(3),
        },
        listButtonLabelName: {
            width: '100%',
            textAlign: 'center',
        },
        listButtonLabelDescription: {
            fontSize: '0.7rem',
            display: 'block',
            color: theme.palette.text.secondary,
            textTransform: 'none',
        },
        listButton: {
            width: '100%',
            justifyContent: 'start',
        },
    }),
    {
        name: 'Layer7LoginAuthSchemeList',
    }
);
