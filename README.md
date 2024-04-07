# Omdb React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design choices
The general folder structure for each part of the application is as follows:
- component: simple components that consume props and render UI
- container: more complex components that typically feed components with data and handle user interactions
- hook: custom hooks that encapsulate logic
- model: data models and constants
- service: functions that typically interact with external services
- page: top-level components that represent a page in the application

I decided to consume the Omdb API through one RestService that communicates with the API and returns the data as received by the API. This in turn is used by the MovieService, my feature specific service, and maps it to my own model. This way, if I want to change something in my movie feature I don't have to worry about the Omdb API contract. Vice versa, if the Omdb API changes I just need to update my mapper.

Mock creators are available and especially useful for tests. These are all based of one base mock and can then easily be tweaked for any specific test purpose. This is a way of working that I have grown to appreciate deeply.

While not everything is covered by tests due to time constraints, I decided to write a few diverse tests. There is at least one test for at least one service, hook and component (container really).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
