const porichoy = require("./index");

let person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

porichoy.setApiKey("9a3f37f11ddc4ac7b673c9d370b21dd4");
// console.log(porichoy.getApiKey());
porichoy.setModeToTestFail();
// porichoy.setModeToTestPass();


porichoy.verify(person, function doThings(result, fullRes) {
  //result will return true if the verification succeed.
  if (result) {
    console.log("The person's NID is real");
    console.log(fullRes);
    
  } else {
    console.log("The person's NID is fake");
  }
});
// Getting full response from Porichoy API
porichoy.verify(person, function doThings(result) {
console.log(result);

}, {fullRes: true});
