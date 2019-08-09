## [Porichoy](http://www.porichoy.gov.bd/) &middot; NID Verification Gateway of Bangladesh &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/nurulhuda859/porichoy/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/porichoy)](https://www.npmjs.com/package/porichoy)

```js
const porichoy = require('porichoy');

const person = {nid: "1234567890", dob: "1999-11-11", name: "Rejaul Kabir"};

const createAccount = async () => {
  if(!await porichoy.valid(person)) return;
    //Create account for the person
  }
}
```

## Intro
This package will make it very easy to use Porichoy API in your NodeJS project. It is zero dependency package so you will get faster perfermance than using other aproaches like 'request' module.
This package is now ready to use in production. Although more new features are on the way. Feel free to provide feedback, I will highly appreciate it.

* Visit the official [website](http://www.porichoy.gov.bd/) of Porichoy API to get your API Key.
* For Porichoy API documentation visit this [website](https://kyc24nme.portal.azure-api.net/docs/services).
* This npm package is still under mass development. This package is not managed by the officals of Porichoy API.

## Installation

```js
npm i porichoy;
```

## Configaration

```js
const porichoy = require("porichoy");

// For setting API Key.
porichoy.setApiKey("<Your API Key>");
  //or set env variable PORICHOY.API_KEY = <Your API Key>

//For seting porichoy to test fail, test pass or production mode.
porichoy.setModeToProduction();
porichoy.setModeToTestPass(); // It is the default mode.
porichoy.setModeToTestFail();
// or
porichoy.setMode('testPass'); // All different modes are: 'testPass'|'testFail'|'production'

  //or set env variable PORICHOY.MODE = testPass|testFail|production

// For getting mode.
porichoy.getMode();
// For getting API Key.
porichoy.getApiKey();
```

## Example Usage
The callback approach
```js
const porichoy = require("porichoy");

porichoy.setApiKey("<Your API Key>");

porichoy.setModeToTestPass();

// The information to be verified
const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

porichoy.verify(person, s => {
  //s will return true if the verification succeed.
  if (s) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
```
The promise based approach
```js
const porichoy = require("porichoy");

const person = {nid: "1234567890",dob: "1999-11-11",name: "Rejaul Kabir"};

(async () => console.log((await porichoy.valid(person))? 'Valid NID':'Invalid NID'))();
```
## Person Object Schema
| Key | Data Type | Description |
|-------|-----------| ---------------------|
| nid |String|10 or 17 digits. If 13 digits, add the 4 digit year to the front of the ID |
| dob | Date | Date of Birth YYYY-MM-DD Example 1980-03-28 |
| name | String | Person's full name, will match alphabetic characters only Mr. will convert to Mr ( exactly as in NID card) |
#### Example
```js
const person = {
  nid: "1234567890",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
  };
```
## Modes
| Name | Description | Method to Set |
|--------|--------------------|-------------|
| 'testPass' | In this mode every of your verification request will succeed, mimicking the providing information as a real NID. | `porichoy.setModeToTestPass();` or `porichoy.setMode('testPass');`
| 'testFail' | In this mode every of your verification request will fail, mimicking the providing information as a real NID.| `porichoy.setModeToTestFail();` or `porichoy.setMode('testFail');`
| 'production' | In this mode every of your verification request will be verified with the real database. Note you must need to subscribe for production API Key in order to use this mode. | `porichoy.setModeToProduction();` or `porichoy.setMode('production')`;
## Methods
| Name | Description |
|--------|----------|
|`porichoy.valid(<Object>)`| This functions is promise based and it will return `true` if verification is success otherwise it will return `false`|

