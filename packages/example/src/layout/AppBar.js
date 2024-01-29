import React, { cloneElement, useEffect } from 'react';
import { HideOnScroll, LoadingIndicator, useTranslate } from 'react-admin';
import { useDispatch, useSelector } from 'react-redux';
import MuiAppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import LightModeIcon from '@material-ui/icons/Brightness7';
import DarkModeIcon from '@material-ui/icons/Brightness4';
import {
    ApiHubUserMenu,
    ApiHubLanguageSwitcher,
    SidebarButton,
    useApiHubPreference,
} from 'layer7-apihub';
import { BrandLogo } from '../ui';
import { changeTheme, useTheme } from '../theme';
import { Stack } from '@mui/material';

export const AppBar = ({
    children,
    classes: classesOverride,
    className,
    languagesMenu,
    logout,
    open,
    sidebarButton,
    title,
    userMenu,
    ...rest
}) => {
    const classes = useStyles({ classes: classesOverride });
    const { logo } = useTheme();
    return (
        <HideOnScroll>
            <MuiAppBar
                className={className}
                color="default"
                elevation={2}
                {...rest}
            >
                <Toolbar
                    disableGutters
                    variant="regular"
                    className={classes.toolbar}
                >
                    <Stack direction="row">
                        {cloneElement(sidebarButton, { open })}
                        <div className={classes.header}>
                            <BrandLogo
                                className={classes.logo}
                                fill="#fff"
                                img={logo}
                            />
                        </div>
                    </Stack>
                    <Stack direction="row" className={classes.functionbox}>
                        <LoadingIndicator sx={{ color: '#006837' }} />
                        {!global.APIHUB_CONFIG.USE_BRANDING_THEME ? (
                            <ThemeModeButton />
                        ) : null}
                        {cloneElement(languagesMenu)}
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                        />
                        {cloneElement(userMenu, { logout })}
                    </Stack>
                </Toolbar>
            </MuiAppBar>
        </HideOnScroll>
    );
};

AppBar.defaultProps = {
    userMenu: <ApiHubUserMenu />,
    languagesMenu: <ApiHubLanguageSwitcher />,
    sidebarButton: <SidebarButton />,
};

const useStyles = makeStyles(
    theme => ({
        toolbar: {
            paddingRight: 24,
            backgroundColor: theme.palette.customHeader?.main,
            justifyContent: 'space-between',
            alignItems: 'center',
            color: theme.palette.getContrastText(
                theme.palette.customHeader?.main || theme.palette.common.white
            ),
        },
        header: {
            // flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        functionbox: {
            alignItems: 'center',
        },
        divider: {
            alignSelf: 'stretch',
            backgroundColor: theme.palette.primary.contrastText,
            height: 'auto',
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            marginTop: theme.spacing(2),
        },
        logo: {
            height: theme.spacing(7),
        },
    }),
    {
        name: 'ExampleAppBar',
    }
);

export const ThemeModeButton = () => {
    const classes = useThemeModeButtonStyles();
    const translate = useTranslate();

    const dispatch = useDispatch();
    const themeMode = useSelector(state => state.theme);
    const [themeModePreference, setThemeModePreference] = useApiHubPreference(
        'themeMode'
    );

    useEffect(() => {
        if (themeModePreference && themeModePreference !== themeMode) {
            dispatch(changeTheme(themeModePreference));
        }
    }, [themeModePreference, themeMode, dispatch]);

    const handleClick = () => {
        const newTheme = themeMode === 'light' ? 'dark' : 'light';
        setThemeModePreference(newTheme);
    };

    return (
        <Tooltip title={translate('example.action.toggle_dark_mode')}>
            <IconButton color="default" onClick={handleClick}>
                {themeMode === 'light' ? (
                    <DarkModeIcon className={classes.icon} />
                ) : (
                    <LightModeIcon className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};

const useThemeModeButtonStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.common.white,
    },
}));
