# Example App

The Example app demonstrates the usage of the Layer7 API Hub library. For more information about the library, see [the Layer7 API Hub Library README](../layer7-apihub/README.md).

The Example app is built on top of [Create React App (CRA)](https://create-react-app.dev/).

## Configure the Example App

The Example app configuration is set with global variables that are stored in the `window.APIHUB_CONFIG` object. The config files are in the `./config` folder of the Example app. Each file corresponds to a different environment. For example, the `config-dev.js` file corresponds to the configuration of the `dev` environment.

When deploying the app, copy the corresponding config file for the enviroment into the `./public` folder. These files are not involved in the webpack build process of the Example app.

For more information about how to use the `public` folder, see [the Create React App documentation](https://create-react-app.dev/docs/using-the-public-folder).

### Define a Configuration for a New Environment

**Follow these steps:**

1. Create a file named `config-XXX.js` in the `./config` folder, where `XXX` is the new environment name.

The following is an example of the `config.js` file:

``` js
window.APIHUB_CONFIG = {
    PAGE_TITLE: 'Layer7 API Hub | Broadcom', // The html page title
    APIHUB_URL: 'https://apim.dev.ca.com', // The Portal API (PAPI) domain
    TENANT_NAME: 'apim', // The tenant name
    ORIGIN_HUB_NAME: 'APIHub-Default',  // The identifier of the API Hub
    ENABLE_MOCK: false, // Enable/disable the Layer7 API Hub mock server
    MOCK_SERVER_INDICATOR_LINK:  // A link opened when clicking on the mock server running indicator
        'https://github.com/CAAPIM/APIHub/blob/master/packages/layer7-apihub-mock/README.md',
    USE_BRANDING_THEME: false, // Use the branding theme from PAPI
    USE_BRANDING_ICONS: true, // Use the branding favicon from PAPI
};
```

The `ORIGIN_HUB_NAME` variable is sent to PAPI servers to identify your API Hub. The Portal Admin uses this value in the `APIHUB_SETTINGS` to enable remote hosting.

2. Prefix the `deploy` command during the deploy process with `DEPLOY_ENV=XXX make deploy`.

**Tip:** You can override the `window.APIHUB_CONFIG` object directly in JavaScript in the browser before loading the Example app.

### Enable HTTPS

**Follow these steps:**

1. Update the `.env` file to match your node environment (`.env.development` matches `NODE_ENV=development`, for example).
2. Change or add the following keys:

```sh
PORT=443
HTTPS=true
```

### Customize the Example App

## Change the Page Title

Change the page title using `react` and `react-helmet` in the [/src/App.js](./src/App.js) file.

**Follow these steps:**

1. Update the default title in the `[/public/index.html](./public/index.html)` index file. You can define the page title before the Example app renders the page.
2. Update the page title defined by the Example app directly in the `config.js` file. The title is stored under the `window.APIHUB_CONFIG.PAGE_TITLE` key. You can define a different title for each environment.
For more information, see [Change the configuration](./README.md#change-the-configuration).

## Make Calls to the Layer7 API Hub Mock Server or Portal API (PAPI)

You can make calls to the Layer7 API Hub mock server without having to connect to API Portal. The mock server mimics PAPI responses to ease local development.

For more information about the mock server, see [Layer7 API Hub Mock Server](https://github.gwd.broadcom.net/ESD/APIHub/tree/develop/packages/layer7-apihub-mock).

### Use the Mock Server

To use the mock server, enable it in the configuration file. Set the `ENABLE_MOCK` variable to `true` (set to `false` to disable) in your configuration file.

For more information about how to change the configuration file, see [Define a Configuration for a New Environment](./README.md#define-a-configuration-for-a-new-environment).

### Use the PAPI

Use one of the following options to use the PAPI:

- Use react-admin resource hooks and components for APIs, applications, or documents.
- Use fetch directly.

#### Use react-admin Resource Hooks

Use react-admin resource [hooks](https://marmelab.com/react-admin/Actions.html#specialized-hooks) and components for APIs, applications, or documents.

#### Use fetch

Use [fetch](https://marmelab.com/react-admin/Actions.html#querying-the-api-with-fetch) directly. Include the required credentials and HTTP headers. Use the [getFetchJson wrapper](../layer7-apihub/src/fetchUtils.js) that is in API Hub, which includes the credentials and headers.

The following code is an example of a hook that fetches metrics from the PAPI. The `useLayer7Notify` hook wraps the react-admin `useNotify` hook and adds PAPI error parsing:

```js
import { getFetchJson, useApiHub, useLayer7Notify } from 'layer7-apihub';

export function useApiHitsMetrics({ startDate, endDate }) {
    const { urlWithTenant, originHubName } = useApiHub();
    const [data, setData] = useState();
    const notify = useLayer7Notify();
    const url = `${urlWithTenant}/analytics/metrics/v1/hits/apis/by-day?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;

    useEffect(() => {
        // Use to ensure we don't try to update the state on an unmounted
        // component
        let updateState = true;
        // Get the fetchJson function configured for our instance
        const fetchJson = getFetchJson(originHubName);

        const fetchData = () => {
            fetchJson(url)
                .then(({ json }) => {
                    // Don't update the state if the calling component has been unmounted
                    if (updateState && json.data) {
                        setData(json.data);
                    }
                }).catch(error => {
                    notify(error);
                });
        };

        fetchData();

        return () => {
            updateState = false;
        };
    }, [originHubName, urlWithTenant, url]);

    return data;
}
```

## Host the Example App on Another Domain

You can deploy and host your customized API Hub on your own domain in an upcoming release.

## Auto-detect the API Hub URL

API Hub attempts to detect the URL of your API by inspecting your application URL and extracting the first sub domain. For example, with the application URL `https://apim.dev.ca.com`:

- the tenant is `apim`,
- the PAPI endpoint is `https://apim.dev.ca.com/api/apim/service`
- the admin endpoint is `https://apim.dev.ca.com/admin`

However, you can also supply the tenant and the API URL yourself by providing the `url` and `tenantName` properties on the `<ApiHubAdmin>` component.

## Customization Tutorials

**Prerequisite:** You have read [the Layer7 API Hub Library README](../../packages/layer7-apihub/README.md).

### Add a Page

In this example, we add a custom contact-us form in a new page at this location `/#/contact-us`.

1. Create a contact-us form in the `ui` folder.

``` js
// in src/ui/ContactUs.js
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function ContactUs() {
    return (
        <Paper>
            <Typography variant="title">Contact Us</Typography>
            <form action="contact-us.php">
                <TextField label="First Name" name="first_name" variant="filled" />
                <TextField label="Last Name" name="last_name" variant="filled" />
                <TextField
                    label="Message"
                    name="message"
                    variant="filled"
                    multiline
                    rowsMax="4"
                />
                <Button type="submit" variant="contained">
                    Send
                </Button>
            </form>
        </Paper>
    );
}

// in src/ui/index.js
export * from './ContactUs'
```

2. Create a custom route to access the `contact-us` component:

```js
// in src/App.js
import React from 'react';
import { Route } from 'react-router';
import { ApiHubAdmin } from 'layer7-apihub';

import { ContactUs } from './ui'; // Import the component you've just created

const ContactUsRoute = () => {
    <Route
        path="/contact-us"
        component={ContactUs}
        noLayout // Do not use the layout from ApiHub
    />
}

const App = () => {
    return (
        <ApiHubAdmin
            customRoutes={[ContactUsRoute]}
        />
    );
}

export default App;
```

You can now access the custom route at URL `/#/contact-us`.


# BeSafe Bank App
BeSafe Bank app demonstrates the customization of the Example app. For setting up local environment, see [Quick Start](../../packages/layer7-apihub/README.md) on APIHub README.md. Once local environment is ready, clone Besafe Bank source code from `master` branch of [APIHub-example](https://github.com/KeikoShimizu/APIHub-example) repository to review Customized code. 

Also if you want to see the progress of development compare each step by installing source code from [Tag List](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#tag-list).   

>## Table of Contents:
> #### [Landing page](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#landing-page-1)
>  - [Create a new blank page without default <Layout> design (Header and Dashboard not include)](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#create-a-new-blank-page-without-default-design-header-and-dashboard-not-included)
>  - [Implement Local Switcher menu on Header](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#implement-local-switcher-menu-on-header)
>  - [Set new localized texts inside i18n (English, French, and Spanish)](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#set-new-localized-texts-inside-i18n-english-french-and-spanish)
>  - [Set new favicon and title on app Tab bar](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#set-new-favicon-and-title-on-tab-bar)
>
> #### [Authentication page (Login, Signup, and Reset-Password)](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#authentication-page-login-signup-and-reset-password-1)
>  - [Change main logo on header](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#change-main-logo-oh-header)
>  - [Customize multiple login option](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#customize-multiple-sign-in-potion)
>  - [Customize side content](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#customize-side-content)
>
> #### [Create new page (Products page)](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#create-a-new-page-products-page)
>  - [Create a new page with default <Layout> design (Header and Dashboard included)](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#create-a-new-page-products-page)
>  - [Add new page Link on Dashboard](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#add-new-page-link-on-dashboard)
>
> #### [Home page](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#home-page-1)
>  - [Customize Markdown text function](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#markdown-text-function)
>  - [Create contents of homepage](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#contents-of-home-page) 



    
## Landing page

### Create a new blank page without default design (Header and Dashboard not included)

#### Create new a folder called `landingpage` inside `example/src`.

- Each child components are imported inside of `Landingpage.js` then export from `index.js`.

        example/
        |-- src/
        |   |-- landingPage/
        |   |   |-- index.js/
        |   |   |-- LandingPage.js/
        |   |   |-- LandingPageFooter.js/
        |   |   |-- LandingPageHeader.js/
        |   |   |-- LandingPageMain.js/


#### Create a new blank page without default design (Header and Dashboard are not included)
    
- Set new router inside `example/src/App.js`. Set new `<Route />` inside of `customRoutes` props.
- Pass props `noLayout` in `Route` for creating a blank page. For more information, visit `CustomRoutes` documentation on [Material UI noLayout](https://marmelab.com/react-admin/CustomRoutes.html#nolayout)

```js
// in example/src/App.js
import React from 'react';
import { Route } from 'react-router';
import { ApiHubAdmin } from 'layer7-apihub';

import { LandingPage } from '../src/landingPage'; // Import the Landing page component you've just created

const App = () => {
    return (
        <ApiHubAdmin
            customRoutes={[
                <Route path="/landingpage" component={LandingPage} noLayout />, //noLayout (Set "noLayout" for create a blank page.)
                <Route path="/test" component={TestPage} />,
            ]}
        />

    );
}

export default App;
```

You can now access the custom route at URL `/#/landingpage`.

 
### Implement Local Switcher menu on Header

- Import the `ApiHubLanguageSwitcher` component from `layer7-apihub/src/ApiHubLanguageSwitcher.js` in the file you want to implement.

This is tied across the entire BeSafe Bank app, so changing the language will apply throughout the app.

```
import { ApiHubLanguageSwitcher } from 'layer7-apihub';
```


### Set new localized texts inside i18n (English, French, and Spanish)
- Create the language objects for the Landing page inside of `layer7-apihub/src/i18n`. Currently in BeSafe Bank app, we have 3 language options English, French and Spanish. 

        layer7-apihub/
        |-- src/
        |   |-- i18n/
        |   |   |-- LocaleSwitcherMenu.js/
        |   |   |-- en.js/ // English
        |   |   |-- es.js/ // Spanish
        |   |   |-- fr.js/ // French
        ......

  
This is the object for the English option in `en.js`. Each language file has the same key and different properties displayed in different languages. 
After adding the new language object to "en.js", copy the object key you created for the landing page and paste it into "fr.js" and "es.js" and enter the respective language in the property.

```js
//in layer7-apihub/src/i18n/en.js
// Landingpage / Here is the Object for language selection.
    landingpage: {
        header: {
            navigation: {
                New_Register_Now: 'New? Register Now',
                explore_apis: 'Explore APIs',
                support: 'Support',
            },
            button: {
                sign_in: 'sign in',
            },
        },
        main: {
            hero: {
                header: 'BeSafe is the best at keeping your transactions safe',
            },
            api_collection: {
                header: {
                    title: 'Start developing with BeSafe',
                    content:
                        "Start developing your APIs with BeSafe Bank's leading edge API Management Program that enables you to securely access banking data and wrap it with your corporate brand.",
                },
                api_card: {
                    learn_more: 'Learn more',
                },
            },
        },
        footer: {
            navigation: {
                explore_apis: 'Explore APIs',
                contact: 'Contact Us',
                faq: 'FAQ',
            },
            copyright: 'All Rights Reserved',
        },
    },
};

export default mergeTranslations(raMessages, apiHubMessages);
```

- Once you implemented language objects inside `i18n` folder, import [useTranslate](https://marmelab.com/react-admin/useTranslate.html) from `react-admin` and set localized text key you set in each language file(`en.js`, `fr.js` and `es.js`) by using `translate()` function in the element you want to display. This is an example of how to implement `translate()` in a `<Typography>` element.

```js
//in src/landingPage/LandingPageMain.js

import { useTranslate } from 'react-admin';

export const LandingPageMain = () => {

    const translate = useTranslate();

    return (
        <main>
            <section>
                <Typography variant="h2">
                    {translate('landingpage.main.hero.header')} // Implement localized text key with translate().
                </Typography>
                <img src="/besafebank-hero-dots.jpg" alt="bank hero" />
            </section>
        ...
        </main>
    );
};
```

   - If you want to add new languages, refer to [Add Additional Language Support in the Layer7 API Hub Library](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/layer7-apihub/README.md#add-additional-language-support-in-the-layer7-api-hub-library). 
   - For more information about Language Support, visit documentation on [`React-admin i18n Provider and Translations`](https://marmelab.com/react-admin/Translation.html).  


### Set new favicon and title on Tab bar
   - Store the favicon image inside `example/public` folder.
   - If you modify favicon's file name, access `link` tag in the `header` of file `example/public/index.html`.
     
     ```js
     // in example/public/index.html
     <head>
        <meta charset="utf-8" />
        <link
            id="favicon"
            rel="icon"
            href="%PUBLIC_URL%/favicon.ico" // Change file name "favicon.ico" to new file name, if nessesary.
            data-react-helmet="true"
        />
     ```
     
   - For setting title, refer [Change the Page Title](https://github.com/KeikoShimizu/APIHub-example/tree/master/packages/example#change-the-page-title) on Example App.




## Authentication page (Login, Signup, and Reset-Password)

### Change main logo oh Header

- Store a new Logo image inside `example/public` folder.
- Modify the Logo image path inside `BrandLogo.js`. Once you change the path, all the Logo on the `Authentication` pages and `Header` will change (Except Landing page).
 
```js
// in example/src/ui/icons/BrandLogo.js
    export const BrandLogo = props => {
        let path = props.img || 'XXX'; // Set you Logo image path in `XXX`.
        return <img className={props.className} src={path} alt={'Logo'} />;
    };
```

### Customize Multiple Sign-in potion

- We had multiple sign-in options in the original Example app. If you want to use or modify the multiple sign-in options which are used in the original Example app, refer `layer7-apihub/src/authentication/Login/AuthSchemeList.js` and implement in `layer7-apihub/src/authentication/Login/LoginForm.js`.

### Customize Side content

- We had an image on the side of Authentication section in the original Example app. If you want to implement new content as side content in all authentication pages, create new `SideContent.js` file in `example/src/authentication`. Then import `<SideContent />` component inside `example/src/authentication/ThemedAuthenticationLayout.js`.
  





## Create a new page (Products page)

- Create a new page with default design (Used React-admin [Layout](https://marmelab.com/react-admin/Layout.html#alternative-layouts)). This time, we implement `products` page with React-admin's `<Layout/>` styling. so no need to pass a props `noLayout` as we did for Landing page.
  
```js
// in example/src/App.js
        <ApiHubAdmin
            customRoutes={[
                <Route path="/products" component={Products} />, // New page called "products". Set router here
                <Route path="/landingpage" component={LandingPage} noLayout />, // Landing page router
                <Route path="/test" component={TestPage} />,
            ]}
        />
  ```

You can now access the custom route at URL `/#/products`.


## Add new page Link on Dashboard

- Navigation component is in `layer7-apihub/src/ApiHubMenu.js`. 

This `ApiHubMenu` component is passed as a props to create `menu` on React-admin's [Layout](https://marmelab.com/react-admin/Layout.html#alternative-layouts) in `layer7-apihub/src/ApiHubLayout.js`. 

```js
//in layer7-apihub/src/ApiHubLayout.js
import { Layout } from 'react-admin';
import { ApiHubAppBar } from './ApiHubAppBar';
import { ApiHubMenu } from './ApiHubMenu';
import { useSelector } from 'react-redux';

export const ApiHubLayout = ({
    appBar = ApiHubAppBar, // TopBar (Header part)
    menu = ApiHubMenu, // Dashboard (Left navigation part)
    ...rest
}) => {
    return <Layout appBar={appBar} menu={menu} {...rest} />;
};
```

- Document about React-admin `<Layout>`: https://marmelab.com/react-admin/Layout.html


### Create new page Link on Dashboard
- Add new `<MenuItemLink>`, set the router path, icon, and set primary text by using `translate()`.
  
```js
//in layer7-apihub/src/ApiHubMenu.js
<MenuItemLink
                key="apis" // Set new key name
                to="/apis" // Add new router path
                primaryText={translate(`resources.apis.name`, {
                    smart_count: 2,
                })}
                leftIcon={<ChromeReaderModeOutlinedIcon />} // Import from Material UI's Icon 
                onClick={onMenuClick}
                dense={dense}
                sidebarIsOpen={open}
            />
```

- Document about `<MenuItemLink>`: https://marmelab.com/react-admin/Buttons.html#menuitemlink

- Material Icons: https://mui.com/material-ui/material-icons/




## Home page

### Markdown text function

- If you want to use or modify Markdown text function which is used in the original example app, modify `layer7-apihub/src/homepage` folder.

    **Edit Button**:   `HomePageEditButton` component inside `layer7-apihub/src/homepage/HomePageButton.js` file.
  
    **Markdown Content Editor**:   `HomePageContentEditor` component inside `layer7-apihub/src/homepage/HomePageContent.js` file.

  (To review this source code, download the source code below version `besafebank-4.0.1` from the [Tag List](https://github.com/KeikoShimizu/APIHub-example/blob/master/packages/example/README.md#tag-list).)

### Contents of Home page
- All contents of "home" page are inside `layer7-apihub/src/homepage/HomePageContent.js`

   


# Tag List

Each customization stage is tagged following `besafebank` Prefix. Below are details about each tag. You can check the progress of development at that stage by importing the source code from each tag.

**Tag list on `API-Hub-example` repository**: https://github.com/KeikoShimizu/APIHub-example/tags

### [`besafebank-1.0.0`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-1.0.0)
**Overview**: Initial code for Besafebank from [`CAAPIM/APIHub`](https://github.com/CAAPIM/APIHub) Example app.

### [`besafebank-2.0.0`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-2.0.0)
**Overview**: Landing page (Draft)
- **Changes**:
  - Create a new blank page without default design (Header and Dashboard are not included)
  - Set new router inside `example/src/App.js` 
  - Implement a Local Switcher menu on header
  - Set new favicon and title on Tab bar

### [`besafebank-2.0.1`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-2.0.1)
**Overview**: Landing page (Final version)
- **Changes**:
  - Change title on Hero section from BSB to BeSafe

### [`besafebank-3.0.1`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-3.0.1)
**Overview**: Create a new page (Products）
- **Changes**:
  - Create a new page with default design (Header and Dashboard included)
  - Set new router inside `example/src/App.js`
  - Add new page Link on Dashboard

### [`besafebank-4.0.1`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-4.0.1)
**Overview**: Authentication pages (Login, Signup, and Reset-Password)
- **Changes**:
  - Change main logo on Header
  - Delete multiple login options
  - Delete side content

### [`besafebank-5.0.1`](https://github.com/KeikoShimizu/APIHub-example/releases/tag/besafebank-5.0.1)
**Overview**: Home page (Final version)
- **Changes**:
  - Delete Markdown text function
  - Contents of home page

 
