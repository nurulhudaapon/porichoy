# porichoy

# Porichoy - NID Verifier
This npm package is still under mass development.

## Super simple to use

```js
const porichoy = require('porichoy');


let person = {
  nid: "123456789012",
  dob: "1999-11-11",
  name: "Rejaul Kabir"
};

if (porichoy.verify(person)) {
    console.log("The person's NID is real")
} else {
    console.log("The person's NID is fake")
}
```


## Datatype of arguments
```js
porichoy.verify(<object>)
```
```
nid: <string>
dob: YYY-MM-DD
name: Full Name
```