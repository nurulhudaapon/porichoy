const req = require("request");

// let person = {
//   nid: "123456789012",
//   dob: "1999-11-11",
//   name: "Rejaul Kabir"
// };
let config = {
  nid: null,
  dob: null,
  name: null,
  key: null
};
let apiKey = process.env.PORICHOY_API_KEY;

const setApiKey = (key) => {
  apiKey = key;
  return null;
}
const getApiKey = () => {
  if (apiKey == 'undefined') return 'API Key is no set.';
  return apiKey;
}
const skey = "9a3f37f11ddc4ac7b673c9d370b21dd4";

const verify = person => {
  const url = `https://kyc24nme.azure-api.net/testkyc/check-person?
  national_id=${person.nid}&
  person_dob=${person.dob}&
  person_fullname=${person.name}`;

  const options = {
    method: "POST",
    url,
    headers: {
      "Ocp-Apim-Subscription-Key": key
    }
  };
  //   let result = false;
  req(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = body.split("'")[3];
      console.log(info);
    } else {
      console.log("Something went wrong.");
    }
    // console.log(body);
    // result = info;
  });
};
// verify(person);

// module.exports.verify = verify;
// setApiKey(skey);

// console.log(getApiKey());
console.log(apiKey== undefined);


