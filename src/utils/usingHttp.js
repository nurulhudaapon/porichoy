const https = require("https");


//-----------------------------------------
const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};


const path = `/testkyc/check-person?national_id=${person.nid}&person_dob=${
  person.dob
}&person_fullname=${encodeURI(person.name)}`;

const options = {
  hostname: baseUrl,
  port: 443,
  path,
  method: "POST",
  headers: {
    // Request headers
    "Ocp-Apim-Subscription-Key": "9a3f37f11ddc4ac7b673c9d370b21dd4"
  }
};

let rawData = "";
let resObj = '';
const sendRequest = (mode, callback) => {
const req = https.request(options, res => {
  res.on("data", chunk => {
    rawData += chunk;
  });

  res.on("end", () => {
    resObj = JSON.parse(rawData);
    // console.log(resObj);
    callback(resObj);
  });
});

req.on("error", error => {console.error(error)});

// req.write(data)
req.end();
}

sendRequest("mode", (data)=>{
console.log(data);

})

// module.exports = sendRequest;