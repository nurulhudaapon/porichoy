const https = require('https')

const person = {
    nid: "123456789012",
    dob: "1999-11-11",
    name: "Rejaul Kabir"
  };

const hostname = `https://kyc24nme.azure-api.net/testkyc/check-person?
national_id=${person.nid}&
person_dob=${person.dob}&
person_fullname=${person.name}`;

const path = `/testkyc/check-person?national_id=${person.nid}&person_dob=${person.dob}&person_fullname=${encodeURI(person.name)}`;


const options = {
  hostname: 'kyc24nme.azure-api.net',
  port: 443,
  path,
  method: 'POST',
  headers: {
    // Request headers
    "Ocp-Apim-Subscription-Key": "9a3f37f11ddc4ac7b673c9d370b21dd4"
  }
}

const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', (d) => {
//     process.stdout.write(d)
//   })


let rawData = '';
res.on('data', (chunk) => { rawData += chunk; });

res.on('end', () => { console.log(rawData)});


})

req.on('error', (error) => {
  console.error(error)
})

// req.write(data)
req.end()