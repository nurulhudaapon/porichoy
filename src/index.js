const sendRequest = require("./utils/sendRequest");

// configaration
let apiKey = process.env.PORICHOY_API_KEY;
let mode = process.env.NODE_ENV || "test";
// api key setter
const setApiKey = key => {
  apiKey = key;
  return null;
};
// api key getter
const getApiKey = () => {
  if (!apiKey) return "";
  return apiKey;
};
// mode setter
const setMode = mode => {
  mode = mode;
  return null;
};
const setModeToProduction = () => {
  mode = "production";
  return null;
};
const setModeToTest = () => {
  mode = "test";
  return null;
};
const setModeToTestPass = () => {
  mode = "testPass";
  return null;
};
const setModeToTestFail = () => {
  mode = "testFail";
  return null;
};
// mode getter
const getMode = () => {
  return mode;
};

// person verifier
const verify = (person, callback) => {
  if (!apiKey) return console.error("Porichoy: NO API KEY PROVIDED");
  function getData(data) {
    // console.log(data);
    callback(data.passKyc, data.errorCode);
  }
  sendRequest(apiKey, person, mode, getData);
};
// person verifier
const valid = async person => {
  if (!apiKey) return console.error("Porichoy: NO API KEY PROVIDED");
  return new Promise((resolve, reject) => {
    function getData(data) {
      function getStatus() {
        if (data.passKyc == "yes") return true;
        return false;
      }
      const status = getStatus();

      // console.log(resObj);
      resolve(status);
    }
    sendRequest(apiKey, person, mode, getData);
    // reject(new Error('Something went wrong'));
  });
};

// exporting modules
module.exports = {
  setApiKey,
  getApiKey,
  setMode,
  setModeToProduction,
  setModeToTestFail,
  setModeToTestPass,
  setModeToTest,
  getMode,
  verify,
  valid
};
