This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Git hooks setup

1. Update to git version 2.9.0 or later
2. Current githooks lies in .githooks folder (it lies in our version control)
3. Set your .githooks folder as git hooks path by running : 
```shell
git config core.hooksPath .githooks
```

4. make this folder's hooks executable by running :

```shell
chmod +x ./.githooks/*
```

## Project structure & Conventions to be followed

## nomenclature
The name of the react component MUST be capitalised. e.g. Dashboard.js or Dashboard.jsx
Under that file the function component MUST be defined as  function Dashboard() {}
e.g. dashboard.js :x:
     Dashoboard.js :white_check_mark:


Every other file in the project which is not React Component MUST NOT have capitalized name in anyway.
e.g. MyGraphqlQueries.js :x:
     myGraphqlQueries.js :white_check_mark:

### `App.js`
Routes will stay here, one needs to add lazy loading for all routes except the home (or default) route.

### `Containers`
The route is considered a "container" generally and so, stored under this folder. e.g. Lets suppose one has routes "/dashboard" and a react component for the route called `<Dashboard/>`, so `Dashboard` is considered to be a container, and all the components which are used in this component will be stored under `/Components/Dahboard/`.

### `Components`
It has subfolders as per particular route as mentioned in just above section. The general components which are being used across multiple places, will be stored under `/Components/` folder.

### `queries`
The queries folder will consist of graphql queries used in diff pages. This will also follow the same structure as components. The difference is quiries file names (not folder names) will have to be lowercased and/or camelCased.
e.g. `/queries/Dashboard/index.js`, `/queries/Dashboard/myQueries.js`
The same applies for **`mutations`** folder.

### `assets`
This folder stores assets like images, svg etc.

### `utils`
This folder stores common functions which will be used at multiple places. One can store common hooks under `/utils/hooks` setup. If you are not aware about custom hooks visit "https://reactjs.org/docs/hooks-custom.html". Proficient way to share your hooks logic and avoid rewriting it.


## Deployment Scripts
We have added a script that "build"s for our staging enviornment
`build-staging": "env-cmd -f .env.staging react-scripts build"`
The script builds same as **build**, but forces to take `.env.staging` file into consideration.
(Read more)[https://create-react-app.dev/docs/adding-custom-environment-variables/] about env variable is create-react-app.
You should also be aware of the fact that, when is the particular env file is taken into consideration.
(Which env file will be taken into consideration, is decided by the script which we run at that time. And here for building we will be using react-scripts, so the above link documentes, which fille will be taken into consideration and when.)
This explains the use of env-cmd package. [READ MORE](https://www.npmjs.com/package/env-cmd) about this
Env variable SHOULD be given into files and not in our scripts.


### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
