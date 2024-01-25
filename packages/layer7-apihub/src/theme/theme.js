import { defaultTheme } from 'react-admin';
import defaultMuiTheme from '@material-ui/core/styles/defaultTheme';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createPalette from '@material-ui/core/styles/createPalette';
import merge from 'lodash/merge';

import blue from '@material-ui/core/colors/blue';

const palette = createPalette(
    merge({}, defaultTheme.palette, {
        secondary: {
            light: '#F15A24',
            main: '#F9D9D2',
            dark: '#0069c0',
            contrastText: defaultMuiTheme.palette.common.white,
        },
    })
);

/**
 * Default Layer 7 Api Hub theme
 */
export const theme = createMuiTheme(
    merge({}, defaultTheme, {
        palette,
        overrides: {
            RaMenuItemLink: {
                root: {
                    color: '#F15A24',
                    borderLeftColor: 'transparent',
                    borderLeftWidth: defaultMuiTheme.spacing(0.5),
                    borderLeftStyle: 'solid',
                    paddingTop: defaultMuiTheme.spacing(2),
                    paddingBottom: defaultMuiTheme.spacing(2),
                },
                active: {
                    borderLeftColor: '#F15A24',
                    borderLeftWidth: defaultMuiTheme.spacing(0.5),
                    borderLeftStyle: 'solid',
                    backgroundColor: '#F9AF98',
                    color: '#F15A24',
                    '& svg': {
                        color: '#F15A24',
                    },
                },
                icon: {
                    color: '#F15A24',
                },
            },
            RaSidebar: {
                drawerPaper: {
                    backgroundColor: palette.secondary.main,
                    marginTop: '1.5em',
                    height: 'calc(100% - 1.5em)',
                    [defaultMuiTheme.breakpoints.up('xs')]: {
                        backgroundColor: palette.secondary.main,
                        marginTop: '0',
                        paddingTop: '1.5em',
                    },
                    [defaultMuiTheme.breakpoints.down('sm')]: {
                        marginTop: '0',
                        paddingTop: '1.5em',
                    },
                },
            },
            RaLayout: {
                // root: {
                //     display: 'flex',
                //     flexDirection: 'column',
                //     zIndex: 1,
                //     minHeight: '100vh',
                //     position: 'relative',
                //     minWidth: 'fit-content',
                //     width: '100%',
                // },
                // appFrame: {
                //     display: 'flex',
                //     flex: 1,
                //     flexDirection: 'column',

                //     [defaultMuiTheme.breakpoints.up('xs')]: {
                //         marginTop: defaultMuiTheme.spacing(6),
                //     },
                //     [defaultMuiTheme.breakpoints.down('xs')]: {
                //         marginTop: defaultMuiTheme.spacing(9),
                //     },
                // },
                // contentWithSidebar: {
                //     display: 'flex',
                //     flexGrow: 1,
                // },
                content: {
                    // display: 'flex',
                    // flexDirection: 'column',
                    // height: '100vh',
                    // flexGrow: 1,
                    // flexBasis: 0,
                    margin: '40px 20px 20px',
                    // [theme.breakpoints.up('md')]: {
                    //     margin: '70px 45px 0',
                },

                // padding: defaultMuiTheme.spacing(3),
                // padding: defaultMuiTheme.spacing(9),
                // paddingLeft: 0,
                // [defaultMuiTheme.breakpoints.up('xs')]: {
                //     paddingLeft: defaultMuiTheme.spacing(7),
                // },
                //     [defaultMuiTheme.breakpoints.down('sm')]: {
                //         padding: 0,
                //     },
                // },
            },
            MuiTab: {
                root: {
                    textTransform: 'capitalize',
                    '&$selected': {
                        color: palette.primary,
                        fontWeight: defaultMuiTheme.typography.fontWeightBold,
                    },
                },
            },
            MuiToolBar: {
                root: {
                    backgroundColor: '#E6E6E6',
                },
            },
        },
        props: {
            MuiFab: {
                color: 'primary',
            },
        },
    })
);
