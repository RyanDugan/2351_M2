let muffins = "Muffins are delicious!"; //this is a global variables
console.log(muffins);

document.getElementById("test1").innerHTML =
  (24 - 14) / 2 + " muffins are left"; //this is how many muffins are left for two people to share...math!

{
  const a = 6; //this is a const variable within a block
}

{
  const a = 12; //this is another const variable within a different block. the const can change here!
}

let text1 = "Do you know the muffin man? "; //this is a string variable
let text2 = "Yes, I know the muffin man! "; //this is also a string variable
let text3 = text1 + text2; //the two string variables are added together within this third variable!
document.getElementById("muffin").innerHTML = text3;
console.log(text3);

const muffintype = {
  flavor: "Blueberry",
  topping: "Streusel",
  size: "large",
};

document.getElementById("muffintype").innerHTML =
  muffintype.flavor + " with " + muffintype.topping;

document.getElementById("testglobal").innerHTML = muffins; //this proves the global variable is funcitoning properly!
