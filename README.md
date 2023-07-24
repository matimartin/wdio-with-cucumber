# cypress-cucumber-for-webUI-automation-testing

> webDriver.io with Cucumber.

# Automation

Automation Framework for web UI testing
Configuration for multiple browsers and environments

### Prerequisites

* Visual Studio Code
* NodeJS

### Installing and Running the tests

1. Clone the repository
2. Navigate to default develop branch
3. Execute "npm init wdio" on the path to execute dependencies
4. To run the full regression: npx wdio wdio.conf.js --cucumberOpts.tagExpression="@regression"
5. To run the an specific feature: npx wdio wdio.conf.js --cucumberOpts.tagExpression="@loginFeature"
6. To run the an specific test case: npx wdio wdio.conf.js --cucumberOpts.tagExpression="@only"


## Authors

 **Hector Matias Martin** - *Initial work & Contributor*
 * hector.martin@globant.com
 * ext.hmartin@gdmseeds.com
