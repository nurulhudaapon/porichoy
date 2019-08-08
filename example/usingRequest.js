const request = require("request");

// The information to be verified
const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

const options = {
  method: "POST",
  //API endpoint of Porichoy API
  url: `https://kyc24nme.azure-api.net/testkyc/check-person?
    national_id=${person.nid}&
    person_dob=${person.dob}&
    person_fullname=${person.name}`,
  headers: {
    // Request headers
    "Ocp-Apim-Subscription-Key": "<subscription key>"
  }
};

request(options, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  } else {
    console.error(error);
  }
});