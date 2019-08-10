const https = require("https");

const hostname = "kyc24nme.azure-api.net";

module.exports = (apiKey, person, mode, callback) => {
  let rawData = '';
  let resObj = '';
  const testPassPath = `/testkyc/check-person?national_id=${person.nid}&person_dob=${person.dob}&person_fullname=${encodeURI(person.name)}`;
  const testFailPath = `/testkyc-fail/check-person?national_id=${person.nid}&person_dob=${person.dob}&person_fullname=${encodeURI(person.name)}`;
  const productionPath = `/kyc/check-person?national_id=${person.nid}&person_dob=${person.dob}&person_fullname=${encodeURI(person.name)}`;

  const getModePath = mode => {
    if (mode == "testPass") {
      return testPassPath;
    }
    if (mode == "testFail") {
      return testFailPath;
    }
    if (mode == "production") {
      return productionPath;
    }
  };
  const path = getModePath(mode);
  const options = {
    hostname,
    port: 443,
    path,
    method: "POST",
    headers: {
      // Request headers
      "Ocp-Apim-Subscription-Key": apiKey
    }
  };

  const req = https.request(options, res => {
    res.on("data", chunk => {
      rawData += chunk;
    });

    res.on("end", () => {
      resObj = JSON.parse(rawData);
      // console.log(rawData, resObj);
      callback(resObj);
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.end();
};
