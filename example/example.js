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

// Or you can use an unofficial NPM Package for easy use and extra functionality.
// Visit https://www.npmjs.com/package/porichoy for documentation.
const porichoy = require("porichoy");

porichoy.setApiKey("<Your API Key>");
// The information to be verified
const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};
porichoy.verify(person, s => {
  if (result) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
