

/*

*
* *
* * *
* * * *
* * * * *

*/

let n = 5;  // total rows

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

/*

* * * * *
* * * *
* * *
* *
*

*/

let n1 = 5;

for (let i = n1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}


/*
    *
   * *
  * * *
 * * * *
* * * * *

*/
let n2 = 5;

for (let i = 1; i <= n2; i++) {
  let row = "";

  // spaces
  for (let s = 1; s <= n2 - i; s++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}


/*

* * * * *
 * * * *
  * * *
   * *
    *

    */

let n4= 5;

for (let i = n4; i >= 1; i--) {
  let row = "";

  // spaces
  for (let s = 1; s <= n4 - i; s++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

