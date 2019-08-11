const porichoy = require("porichoy");

porichoy.setApiKey('<api_key>');

const person = {nid: "1456782945", dob: "1999-11-29", name: "Asik Ahmed"};

(async () => console.log((await porichoy.valid(person))? 'Valid NID':'Invalid NID'))();