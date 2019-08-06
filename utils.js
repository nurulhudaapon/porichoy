const req = require("request");

module.exports = (apiKey, person, mode, callback) => {
  const baseUrl = "https://kyc24nme.azure-api.net";
  const testPassUrl = `${baseUrl}/testkyc/check-person?
    national_id=${person.nid}&
    person_dob=${person.dob}&
    person_fullname=${person.name}`;
  const testFailUrl = `${baseUrl}/testkyc-fail/check-person?
    national_id=${person.nid}&
    person_dob=${person.dob}&
    person_fullname=${person.name}`;
  const productionUrl = `${baseUrl}/testkyc/check-person?
    national_id=${person.nid}&
    person_dob=${person.dob}&
    person_fullname=${person.name}`;

  const getModeUrl = mode => {
    if (mode == "testPass") {
      return testPassUrl;
    }
    if (mode == "testFail") {
      return testFailUrl;
    }
    if (mode == "production") {
      return productionUrl;
    }
  };
  const url = getModeUrl(mode);

  const options = {
    method: "POST",
    url,
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey
    }
  };
  function parseData(error, response, body) {
    if (!error && response.statusCode == 200) {
      const passKyc = body.split("'")[3];
      const json = body.replace(/'/g, '"');
      object = JSON.parse(json);
      // console.log(object);
      callback(object)
    } else {
      console.error(error);
    }
  }
  req(options, parseData);
  // console.log(object);
};
