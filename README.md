# Cypress Test Suite for Stickerfy

This repository contains a suite of automated tests to validate the functionality of the "Go to Cart" (or "Shopping Cart") and "Checkout" buttons on the [Stickerfy](https://stickerfy.herokuapp.com/) website. The tests were developed using the [Cypress](https://www.cypress.io/) library, a popular tool for end-to-end testing.

Include some updates, integration with [AllureReposrts](https://allurereport.org/) to create detailed test reports and [JMeter](https://jmeter.apache.org/) for load, stress, capacity and regression tests. 

## Test Overview

The tests cover the following functionalities:

1. **Purchase of the Happy Stickerfy sticker**
2. **Purchase of the Sad Stickerfy sticker**
3. **Purchase of the Angry Stickerfy sticker**
4. **Purchase of one sticker of each type**
5. **Purchase of two Happy Stickerfy stickers and one of each type**

Each test case validates the following:
- The ability to add products to the cart using the "Go to Cart" or "Shopping Cart" button.
- The ability to access the cart and proceed to checkout.
- Verification of important elements on the Checkout page, such as the "Checkout" title and total amounts.

## Setting Up the Environment

### Requirements
- Node.js installed on your machine.
- Cypress installed globally or locally in the project.

### Installation
1. Clone this repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>
   ```

2. Install Cypress dependencies:
   ```bash
   npm install
   ```

3. Open Cypress:
   ```bash
   npx cypress open
   ```

4. In the Cypress dashboard, select the test file to execute it.

## Test Structure

### Initial Setup
Each test uses the `beforeEach` command to access the Stickerfy homepage and verify that the page title is "Stickerfy":
```javascript
beforeEach(() => {
  cy.visit("https://stickerfy.herokuapp.com/");
  cy.title().should("be.equal", "Stickerfy");
});
```

### Test Cases

#### 1. Purchase of the Happy Stickerfy sticker
Adds the "Happy" sticker to the cart and completes the purchase. Verifies the total and success messages:
```javascript
cy.contains('h4', 'Total: $5.5').should('be.visible')
cy.contains('h4', 'Thanks for your order!').should('be.visible')
```

#### 2. Purchase of the Sad Stickerfy sticker
Follows the same flow for the "Sad" sticker and verifies the correct total:
```javascript
cy.contains('h4', 'Total: $7').should('be.visible')
```

#### 3. Purchase of the Angry Stickerfy sticker
Validates the process for the "Angry" sticker with a total of $4.5.

#### 4. Purchase of one sticker of each type
Adds one of each sticker and verifies the total of $17.

#### 5. Purchase of two Happy Stickerfy stickers and one of each type
Adds two "Happy" stickers and one of each other type, verifying the total of $22.5.

## Technologies Used
- **Cypress**: For end-to-end test automation.
- **JavaScript**: Programming language used in the tests.

## Running the Tests
1. Ensure the environment is set up as described above.
2. Open Cypress with:

```bash
npx cypress open
```
3. Select the test file and execute the desired cases.

## Expected Results
The tests should:
- Successfully pass for all described scenarios.
- Validate the functionality of the shopping cart and the "Checkout" button, ensuring the displayed values and messages match expectations.

### Setting up Allure Report for Cypress
1. Install the Allure Cypress adapter. 
See complete installation page here [AllureReport](https://allurereport.org/docs/cypress/)

```bash
npm install --save-dev allure-cypress
```

2. In the e2e section of your Cypress configuration script, define a setupNodeEvents() function that calls allureCypress(), as shown in the example.
Pass the configuration options if necessary, see [Allure Cypress configuration](https://allurereport.org/docs/cypress-configuration/). 

```bash
import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};
```
3. In your E2E support file, importe the Allure Cypress library.

```bash
import "allure-cypress";
```
4. Run test
Run your Cypress tests the same way as your would run them usually. For example:
`
```bash
npx cypress run;
```
This will save necessary data into allure-results or other directory, according to the configuration. If the directory already exists, the new files will be added to the existing ones, so that a future report will be based on them all.

To clean previous results and execute the test, some modifications were included into package.json file:

```bash
 "scripts": {
   "cy:open": "cypress open",
   "clean:allure": "rmdir /s /q allure-results",
   "test": "npm run clean:allure && cypress run"
   },
```

5. Generate a report
Finally, run Allure to convert the test results into an HTML report. This will automatically open your browser to view the report.

```bash
allure serve allure-results
```
If necessary, replace allure-results with the path to the directory specified in the configuration.
There are some options that can affect how the report is generated. Run allure --help for the full list of options.

## Contributions
Feel free to open issues or submit pull requests with improvements or new test cases.

---

**Author**: [Alisson T. Bucchi]

**License**: This project is licensed under the [MIT](./LICENSE) license.
