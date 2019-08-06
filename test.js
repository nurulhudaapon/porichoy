const porichoy = require("./index");

let person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

porichoy.setApiKey("9a3f37f11ddc4ac7b673c9d370b21dd4");
// console.log(porichoy.getApiKey());
// porichoy.setModeToTestFail();
porichoy.setModeToTestPass();
// console.log(porichoy.getMode());
// console.log(porichoy.verify(person));
porichoy.verify(person, function doThings(result) {
  //result will return true if the verification succeed.
  if (result) {
    console.log("The person's NID is real");
  } else {
    console.log("The person's NID is fake");
  }
});
