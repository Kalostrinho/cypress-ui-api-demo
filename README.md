# CYPRESS DEMO USING UI AND API TESTING

## Purpose of the repository
To demonstrate how easy is to build both UI and API tests using Cypress.

The repository already contains `demo` specs for both types of testing that can be leveraged and used as boilerplate samples. 

In addition to this, there're also examples about how to plug "Page Objects" and "Utilities" around your spec files in order to make it more maintanable and readable.

## Internal wiring
> :fire: Cypress does all the heavy lifting here :fire: 

- Cypress allows you to hit the ground running when it comes to create automation frameworks
- Internal wiring is rather easier than with other frameworks. A few installs and you're all set!
- A `cypress.json` file is a Cypress configuration file at the root of your project that allows you to customize lots of things around Cypress. For this project, it has been configured to target a specific folder to look for tests.
- A `jsconfig.json` file is there to enable Intellisense capabilities for most IDE's.

# Step-by-step
> :sparkles: Check your local node version for compatibility :sparkles:

1. Clone this repository
```
git clone <either SSH or HTTP>
```

2. Once you have your own clone of this repository, install the required dependencies
```
npm install
```

3. Once all dependencies are installed, open the `Cypress runner`
```
npx cypress open
```

4. Once the runner opens, you would see 2 different `demo` tests: a `demo-api.spec.js` for API tests using live online endpoints and also a `demo-ui.spec.js` for UI tests using a live website.

5. Simple right? Feel free to add your own tests and/or improve the pattern! :boom: