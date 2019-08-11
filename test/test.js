const porichoy = require('../src/index');

const person = {nid: "123456789012",dob: "1999-11-11",name: "Rejaul Kabir"};
const person2 = {name: "Cecilia Stafford",nid: 9104284849,dob: "1818-08-18"};

// porichoy.setApiKey("9a3f37f11ddc4ac7b673c9d370b21dd4");
// console.log(porichoy.getApiKey());
// porichoy.setModeToTestFail();
// porichoy.setModeToTestPass();
// porichoy.setModeToTest();
// console.log(porichoy.getMode());

const way1 = () => {
  console.time("Porichoy way1");
  porichoy.verify(person, s => {
    if (s) return console.log("The person's NID is real.");
    console.log("The person's NID is fake");
  });
  console.timeEnd("Porichoy way1");
};

const way2 = async () => {
  console.time("Porichoy way2");
  console.log((await porichoy.valid(person)) ? "Valid NID" : "Invalid NID");
  console.log((await porichoy.valid(person2)) ? "Valid NID" : "Invalid NID");
  console.timeEnd("Porichoy way2");
};

// way1();
way2();