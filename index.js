const req = require("request");

// configaration
let apiKey = process.env.PORICHOY_API_KEY;
// api key setter
const setApiKey = (key) => {
  apiKey = key;
  console.log('api key seted');
  return null;
}
// api key getter
const getApiKey = () => {
  if (apiKey == undefined) return 'API Key is no set.';
  return apiKey;
}


// person verifier
const verify = person => {
  if (apiKey == '' || apiKey == null || apiKey == undefined) return 'Set API Key first.';
  const url = `https://kyc24nme.azure-api.net/testkyc/check-person?
  national_id=${person.nid}&
  person_dob=${person.dob}&
  person_fullname=${person.name}`;

  const options = {
    method: "POST",
    url,
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey
    }
  };
  req(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = body.split("'")[3];
    } else {
      console.log("Something went wrong.");
    }
  });
};

// exporting modules
module.exports = {
  setApiKey,
  getApiKey,
  verify
}

