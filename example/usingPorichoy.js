const porichoy = require("porichoy");

porichoy.setApiKey("<Your API Key>");
// The information to be verified
const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};
porichoy.verify(person, function doThings(result) {
  if (result) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
