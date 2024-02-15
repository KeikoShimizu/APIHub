# Layer7 API Hub

**Prerequisite:** You have read the [Layer7 API Hub Overview](./OVERVIEW.md).

## Packages Directory

> This section provides an overview of the react-admin application structure, describes the key directories, and the content of these directories. The packages directory includes the following libraries and apps.

### Layer7 API Hub Library

[The Layer7 API Hub library README](./packages/layer7-apihub/README.md) includes the following information:

- [Add pages](./packages/layer7-apihub/README.md##add-a-pages)
- [Add additional language support](./packages/layer7-apihub/README.md##add-additional-language-support)

### Example App

The Example app has the same source code as the standard API Hub. [The Example app README](./packages/example/README.md) includes the following information:

- [Configure the Example app](./packages/example/README.md##configure-the-example-app)
- [Change the page title](./packages/example/README.md##change-the-page-title)
- [Make calls to the Layer7 API Hub Mock Server or Portal API (PAPI)](./packages/example/README.md##make-calls-to-the-layer7-api-hub-mock-server-or-portal-api-papi)
- [Host the Example app on another domain](./packages/example/README.md##host-the-example-app-on-another-domain)
- [Auto-detect the API Hub URL](./packages/example/README.md##auto-detect-the-api-hub-url)
- [Customization Tutorials](./packages/example/README.md##customization-tutorials)
- [BeSafe Bank App](./packages/example/README.md#besafe-bank-app)

### Healthcare App

[The Healthcare app](./packages/healthcare/README.md) demonstrates a possible customized variation of API Hub with a Healthcare theme. It includes the same developer features as the Example app. It further extends the API Hub to include custom pages and additional calls (PAPI and Portal Metrics API). You use this app with the mock server.

The Healthcare app README includes the following information:

- [Available users](./packages/healthcare/README.md##available-users)
- [Customize the Healthcare app](./packages/layer7-apihub-mock/README.md##customize-the-healthcare-app)

### Layer7 API Hub Mock Server

[The Layer7 API Hub mock server README](./packages/layer7-apihub-mock/README.md) includes the following information:

- [Start the mock server in your client application](./packages/layer7-apihub-mock/README.md##start-the-cock-server-in-your-client-application)
- [Available users](./packages/layer7-apihub-mock/README.md##available-users)
- [Customize the mock server](./packages/layer7-apihub-mock/README.md##customize-the-mock-server)

### Cypress End-To-End Testing

The end-to-end (E2E) tests are for the Example app.

For more information about this testing, see [the Cypress - End-To-End Testing README](./cypress/README.md).

## Getting Start with API Hub 

This topic is intended lead you to set local development environment to run the Layer7 API Hub app ( Example[BeSafe Bank] and Healthcare ). Follow the istruction before start:

Prerequisites and folder structure are listed on 
[Layer7 API Developer Portal - 5.2](https://techdocs.broadcom.com/us/en/ca-enterprise-software/layer7-api-management/api-developer-portal/5-2/api-hub/getting-started-with-api-hub.html)

### Setup the Local Environment

**Prerequisites:**

- [Yarn](https://yarnpkg.com/).
- GNU Make 3.81 or later.
- Node v12.16.3.

To run the project locally on Mac OS, follow the steps below:

**1. Clone the APIHub repository:**

  This repository contain multiple projects as Monorepo. Clone Monorepo to access whole     projects. 

  ```sh
  $ git clone https://github.com/CAAPIM/APIHub.git
  ```

**2. Install Node Version Manager (NVM)**

Install NVM on your machine to manage the Node JS version you want to run.

- Check if NVM is in your environment.

  ```sh
  $ nvm -v  or  $ nvm --version
  ```
- If not installed, run the following command:

  ```sh
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
  ```
- Close and re-open Terminal to check if NVM is correnctly installed.

See the detail of NVM [NVM document & Troubleshooting](https://github.com/nvm-sh/nvm/blob/master/README.md) 

**3. Start collect Node version**

In the command line, navigate into the project `/APIHub` and run the following command to start using the correct node version:

```sh
$ nvm use
```

This is the way to use a specific Node.js version in conjunction with a `.nvmrc` file, which activates the Node.js version specified in the `.nvmrc` file.  This `$ nvm use` command need to run on the root directory.

The required Node version for this project is defined inside of `APIHub/.nvmrc` folder. 

- Check current Node version are navigated with same version as on the `.nvmrc` file.

```sh
$ node -v
```

If the version of Node isn’t installed yet on your machine, follow the suggested command prompts to install that specific version. 

   1. Check `APIHub/.nvmrc` file what Node version required to install. 
   2. Install required Node version following command. (Node version v12.16.3)

  ```sh
  $ nvm install v12.16.3
  ```
  3. Check current Node version are same version as on the `.nvmrc` file.
     
  ```sh
  $ node -v
  ```

**4. Install yarn globally**

Yarn is used as a package manager to effectively manage dependencies, install packages, build, etc in this project.

```sh
$ npm install --global yarn
```

**5. Install GNU**

GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files. Make gets its knowledge of how to build your program from a file called the `Makefile`, which lists each of the non-source files and how to compute it from other files. `Makefile` is located on the root directory.
This allows you to build and install the project using `$make` command.

See the detail of GNU [GNU operating system document](https://www.gnu.org/software/make/)

- Check if GNU in installled on your local eovironment.
```sh
$ make -v
```
- Install GNU
| Windows(MSYS2) | Linux(Debian/Ubunty base distribution) | Linux(Red Hat/CentOS base distribution) | macOS(Homebrew) |
| --- | --- | --- | --- |
| - Download MSYS2 and install.
- Open MSYS2 MinGW 64-bit terminal
- Install make with this command
`$pacman -S mingw-w64-x86_64-make`
 |  | 値3 |


**Make command　& Makefile**

The build process for the `make` command is defined in a `Makefile` located at the root of the repository.

A `Makefile` is a file that defines scripts for automating build processes and tasks. It usually defines a set of common tasks or operations that occur within a project and provides rules for executing them from the command line. It is used in conjunction with the GNU Make build tool.

 
## Quick Start

### Install the JavaScript Dependencies

Install the JavaScript dependencies. This can create `mode_module`　for every project in this Monopro by issuing the following command. 

```sh
make install
```

### Start an App

Start the Example app or the Healthcare app in watch mode.

To start the **Example app**, issue the following command:

```sh
make start
```

To start the **Healthcare app**, issue the following command:

```sh
make start-healthcare
```

Take a look Run the “start” section in `Makefile` to see how this command works.

```js

// in .Makefile
#### Run ####

start: copy-config-example build ## Starts the application in development mode
	@yarn start-example

start-healthcare: copy-config-healthcare build ## Starts the application in development mode
	@yarn start-healthcare
```

- `package/example/config/config-${DEPLOY_ENV}.js` is copied to `packages/example/public/config.js` to placed necessary files.
  
- build command is executed.
  
- `yarn start-example` command is executed using the yarn package manager then starts the project in development mode.

### Run the Tests

Run the unit tests and the E2E tests by issuing the following command:

``` 
make test
```

#### Unit Tests

Run only the unit tests by issuing the following command:

``` sh
make test-unit
```

#### End-To-End Tests

Run only the E2E tests:

``` sh
make test-e2e
```

Open the E2E tests GUI (useful for writing and debugging E2E tests):

``` sh
make test-e2e-local
```

## Deploy the Example App

To deploy example app, Firstly build the API Hub library (`layer7-apihub` & `ayer7-apihub-mock`), the `Example app`, and then copy the production configuration by issuing the following commands. 

```sh
make build
make build-example
DEPLOY_ENV=prod make copy-deploy-config-example
```

- `$ make build` 
This command executes to build `layer7-apihub` then `ayer7-apihub-mock`. `layer7-apihub-mock` is build only when `layer7-apihub` success to build.

- `$ make build-example` 
This command executes to build `example`.

- `DEPLOY_ENV=prod make copy-deploy-config-example`
It is necessary to configure config-prod.js file inside of example>config before running this command.
Instruction on [how to define a configuration](https://github.com/CAAPIM/APIHub/blob/master/packages/example/README.md#define-a-configuration-for-a-new-environment)


```js
//in .Makefile
#### Build ####

build: ## Build the library
	@yarn build

build-example: ## Build the example
	@yarn build-example

build-healthcare: ## Build the healthcare
	@yarn build-healthcare
```

Once you success to build, copy the contents of the `packages/example/build` directory to your favorite web hosting service. For example, the following command launches an nginx Docker container on your local machine:

```sh
docker run --name APIHub -v `pwd`/packages/example/build:/usr/share/nginx/html:ro -p 8888:80 nginx
```

## Create an API Hub Implementation

Follow these steps:

1. From the root of this repository, initialize a new react-app called `my-own-apihub` by issuing the following commands:

```sh
$ cd packages && yarn create react-app my-own-apihub --scripts-version=3.2.0 
```
2. Add the `layer7-aphub`, `layer7-apihub-mock`, and `react-admin` packages as dependencies in the new package.json:

```
  # in packages/my-own-apihub/package.json
 "dependencies": {
        "layer7-apihub": "~1.0.0",
        "layer7-apihub-mock": "~1.0.0",
        "react": "~16.13.1",
        "react-admin": "~3.6.2",
        "react-scripts": "~3.2.0"
    },
``` 

3. Copy the config files to the `example` package by issuing the following commands:
```sh
$ cp -r packages/example/config packages/my-own-apihub/config/
$ cp packages/my-own-apihub/config/config-dev.js packages/my-own-apihub/public/config.js
```

4. Update the public `index.html` file to include the `config.js` file:
```html
<!-- in packages/my-own-apihub/public/index.html -->
<head>
...
  <script type="text/javascript" src="%PUBLIC_URL%/config.js"></script>
... 
 </head>
```

5. Include the base API Hub component in the `App.js` file:
```js
// in packages/my-own-apihub/src/App.js
import { ApiHubAdmin } from 'layer7-apihub';
const App = () => {
    const { APIHUB_URL, TENANT_NAME, ORIGIN_HUB_NAME } = global.APIHUB_CONFIG;
    return (
        <ApiHubAdmin
            url={APIHUB_URL} 
            tenantName={TENANT_NAME}
            originHubName={ORIGIN_HUB_NAME}
        />
    );
};
```

6. Add the mock server to the `index.js` file
```js
// in packages/my-own-apihub/src/index.js
import { startApiHubMockedServer } from 'layer7-apihub-mock';
...
const { ENABLE_MOCK, MOCK_SERVER_INDICATOR_LINK } = global.APIHUB_CONFIG;
export const shouldEnableMock = (enableMock = ENABLE_MOCK) =>
    enableMock === 'true' || enableMock === true;
if (!shouldEnableMock(ENABLE_MOCK)) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    console.log('Starting the mocked server');
    startApiHubMockedServer({
        runningIndicatorLink: MOCK_SERVER_INDICATOR_LINK,
    }).then(() => ReactDOM.render(<App />, document.getElementById('root')));
}
```

7. Start the bare-bones my-own-apihub app by issuing the following commands:
```
$ cd packages/my-own-apihub
$ yarn install
$ yarn start
```
