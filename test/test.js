const porichoy = require('../src/index');

const person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};
const person2 = {
  name: "Cecilia Stafford",
  nid: 9104284849,
  dob: "1818-08-18"
  }

porichoy.setApiKey("9a3f37f11ddc4ac7b673c9d370b21dd4");
// console.log(porichoy.getApiKey());
// porichoy.setModeToTestFail();
// porichoy.setModeToTestPass();
porichoy.setModeToTest();
console.log(porichoy.getMode());

// console.time('Porichoy');
// porichoy.verify(person, (s) => {
//   //s will return true if the verification succeed.
//   if (s) {
//     console.log("The person's NID is real.");
    
//   } else {
//     console.log("The person's NID is fake");
//   }
// });
// console.timeEnd('Porichoy');

async function run() {
  console.log((await porichoy.valid(person))? 'Valid NID':'Invalid NID')
  // (await porichoy.valid(person)) == true
  // if (await porichoy.valid(person)) return console.log('Valid NID');
  // console.log("Invalid NID");
}

const checkNid = async () => {
  console.log((await porichoy.valid(person))? 'Valid NID':'Invalid NID');
  console.log((await porichoy.valid(person2))? 'Valid NID':'Invalid NID');
}

checkNid()