This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Address Forecast

This is an app that provides 7-days forecast for a given address.

## Available Scripts

In the project directory, you can run:

### `npm start`

> __ATTENTION!!__
> 
> Due to https://geocoding.geo.census.gov CORS restriction to `localhost` origin,
> it was needed to deploy a proxy to make tests running on local machine. 
> 
> The server will be available for a short period of time, and then will be 
> shutdown. So, this app will not work on `localhost` nor in `development`
> environment after that.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
