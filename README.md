# SoundlyInvest

SoundlyInvest is a rental property calculator app using React.js. In three steps, you get a detailed investment report displaying key investment metrics, such as gross rent multiplier, cap rate, net operating income, and cash flow.

## Live App

See a live version of this app here: [soundlyinvest.com](https://soundlyinvest.com/).

## SoundlyInvest Server

View the server side code in this [GitHub repo](https://github.com/gavinmgrant/soundlyinvest-api).

## Technology

* [JavaScript ES6](https://www.javascript.com/) - Programming language
* [React](https://reactjs.org/) - JS library for UI
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Stylesheet language
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Markup language
* [a11y](https://www.a11yproject.com/) - Accessibility
* [ESLint](https://eslint.org/) - JavaScript linter tool
* [Vercel](https://vercel.com/) - Cloud platform for deployment

## User Flow

Users arrive on a landing page that explains the app and directs users to log in.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_1.png)

After clicking the login button, the user can login using the login form or go to register by clicking the button in the header.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_2.png)

Users begin by entering a property address.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_3.png)

The first step is entering details about the property purchase.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_4.png)

The second step is entering potential income users can earn from rents.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_5.png)

The third step is entering potential expenses to operate this investment property.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_6.png)

Finally, a report is generating that provides investment metrics<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_7.png)

Users can save this report, view saved reports, edit saved reports, or delete reports.<br>
![User flow screenshot of the SoundlyInvest app](./src/images/user-flow_8.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

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