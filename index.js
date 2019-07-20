const req = require("request");

// let person = {
//   nid: "123456789012",
//   dob: "1999-11-11",
//   name: "Rejaul Kabir"
// };

const key = "9a3f37f11ddc4ac7b673c9d370b21dd4";

const verify = (person) => {
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
// verify(person);

module.exports.verify = verify;
