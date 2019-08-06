# Porichoy - NID Verifier

This npm package is still under mass development.

## Installation

```js
npm i porichoy;
```

## Configaration

```js
const porichoy = require("porichoy");

// For setting API Key.
porichoy.setApiKey("Your API Key");

//For seting porichoy to test fail or test pass mode.
porichoy.setModeToProduction(); //Not yet available
porichoy.setModeToTestPass();
porichoy.setModeToTestFail();

// For getting mode.
porichoy.getMode();
// For getting API Key.
porichoy.getApiKey();
```

## Example Usage

```js
const porichoy = require("porichoy");

porichoy.setApiKey("xxxxx11ddc4axxxxxxxx");

porichoy.setModeToTestPass();


const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

porichoy.verify(person, function doThings(result) {
  //result will return true if the verification succeed.
  if (result) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
```
