// Write a JS program that finds the longest common substring between two strings.

let str1 = "thisisgoodfor";
let str2 = "thisis";

function commonSubString(str1, str2) {
  let length = str1.length > str2.length ? str1.length : str2.length;
  let sub1, sub2;
  let common;
  for (let i = 0; i < length; i++) {
    sub1 = str1.substring(0, i);
    sub2 = str2.substring(0, i);
    if (sub1 === sub2) {
      common = sub1;
    }
  }
  console.log(common);
}

commonSubString(str1, str2);
