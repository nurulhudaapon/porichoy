## [Porichoy](http://www.porichoy.gov.bd/) &middot; NID Verification Gateway of Bangladesh &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/nurulhuda859/porichoy/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/porichoy)](https://www.npmjs.com/package/porichoy)

```js
const porichoy = require('porichoy');

const person = {nid: "1456782945", dob: "1999-11-29", name: "Asik Ahmed"};

const createAccount = async () => {
  if(await porichoy.valid(person)) {
    //Your code for creating account.
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
#### Setting API Key.
```js
porichoy.setApiKey(<api_key>);
```
or set env variable `PORICHOY_API_KEY = <api_key>`

#### Setting mode.
Information about mode is [here.](#modes)
```js
porichoy.setModeToTest(); // It is the default mode.
porichoy.setModeToProduction();
porichoy.setModeToTestPass();
porichoy.setModeToTestFail();
```
or 
```js
porichoy.setMode(<mode_name>);
```
or set env variable `NODE_ENV = <mode_name>`

####Getting mode.
```js
porichoy.getMode();
```
####Getting API Key.
```js
porichoy.getApiKey();
```

## Example Usage
####The promise based approach
```js
const porichoy = require("porichoy");

porichoy.setApiKey(<api_key>);

const person = {nid: "1456782945", dob: "1999-11-29", name: "Asik Ahmed"};

(async () => console.log((await porichoy.valid(person))? 'Valid NID':'Invalid NID'))();
```
####The callback approach
```js
const porichoy = require("porichoy");

porichoy.setApiKey(<api_key>);

// The information to be verified
const person = {nid: "1456782945", dob: "1999-11-29", name: "Asik Ahmed"};

porichoy.verify(person, s => {
  //s will return true if the verification succeed.
  if (s) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
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
  dob: "1999-11-28",
  name: "Rejaul Kabir"
  };
```
## Modes
##### The default mode is 'test'
| Name | Description | Method to Set |
|--------|--------------------|-------------|
| 'test' | In this mode if you send data from this [sample valid data](https://porichoy.herokuapp.com/valid-data) then your verification will succeed otherwise it will fail. [More info](https://porichoy.herokuapp.com/valid-data)| `porichoy.setModeToTes();` or `porichoy.setMode('test');`
| 'testPass' | In this mode every of your verification request will succeed, mimicking the provided information as a real NID. | `porichoy.setModeToTestPass();` or `porichoy.setMode('testPass');`
| 'testFail' | In this mode every of your verification request will fail, mimicking the provided information as a fake NID.| `porichoy.setModeToTestFail();` or `porichoy.setMode('testFail');`
| 'production' | In this mode every of your verification request will be verified with the real database. Note you must need to subscribe for production API Key in order to use this mode. | `porichoy.setModeToProduction();` or `porichoy.setMode('production')`;

## Methods
| Name | Description |
|--------|----------|
|`porichoy.valid(<Object>)`| This functions is promise based and it will return `true` if verification is success otherwise it will return `false`|
<!-- |`porichoy.verify(<Object>, callback)`| .....| -->

