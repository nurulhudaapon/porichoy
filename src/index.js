const sendRequest = require("./utils/utils");

// configaration
let apiKey = process.env.PORICHOY_API_KEY;
let mode = process.env.PORICHOY_MODE || "testPass";
// api key setter
const setApiKey = key => {
  apiKey = key;
  // console.log('api key has been seted');
  return null;
};
// api key getter
const getApiKey = () => {
  if (!apiKey) return "API Key is no set.";
  return apiKey;
};
// mode setter
const setMode = mode => {
  mode = mode;
  return null;
};
const setModeToProduction = () => {
  console.log('Currently production mode is not available.');
  mode = "production";
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
const verify = (person, callback, option) => {
  if (!apiKey) return "Set API Key first.";
  const processData = data => {
    
    if (option && option.fullRes == true) return data;
    function getStatus() {
      if (data.passKyc == 'yes') return true;
      return false;
    }
      const status = getStatus();
    
    // console.log(data);
    if(callback) {

      callback(status, data)
    }
  };
  sendRequest(apiKey, person, mode, processData);
};

// exporting modules
module.exports = {
  setApiKey,
  getApiKey,
  setMode,
  setModeToProduction,
  setModeToTestFail,
  setModeToTestPass,
  getMode,
  verify
};
