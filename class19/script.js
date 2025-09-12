//1) Right Triangle (Increasing)
// *
// **
// ***
// ****
// *****

let n = 5;
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}

// 2) Inverted Right Triangle

// *****
// ****
// ***
// **
// *

let n1 = 5;
for (let i = n1; i >= 1; i--) {
  console.log("*".repeat(i));
}

// 3) Right-Aligned Triangle
//     *
//    **
//   ***
//  ****
// *****

let n2 = 5;
for (let i = 1; i <= n2; i++) {
  console.log(" ".repeat(n2 - i) + "*".repeat(i));
}

//4) Right-Aligned Inverted Triangle
// *****
//  ****
//   ***
//    **
//     *

let n3 = 5;
for (let i = n3; i >= 1; i--) {
  console.log(" ".repeat(n3- i) + "*".repeat(i));

}

//5) Centered Pyramid
//     *
//    ***
//   *****
//  *******
// *********

let n5 = 5;
for (let i = 1; i <= n5; i++) {
  console.log(" ".repeat(n5 - i) + "*".repeat(2 * i - 1));
}

// 6) Inverted Centered Pyramid
// *********
//  *******
//   *****
//    ***
//     *

let n6 = 5;
for (let i = n6; i >= 1; i--) {
  console.log(" ".repeat(n6 - i) + "*".repeat(2 * i - 1));
}


// 7) Hollow Pyramid

//     *
//    * *
//   *   *
//  *     *
// *********

let m = 5;
for (let i = 1; i <= m; i++) {
  if (i === 1) {
    console.log(" ".repeat(m - 1) + "*");
  } else if (i === n) {
    console.log("*".repeat(2 * m - 1));
  } else {
    console.log(" ".repeat(m - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}


// 8) Hollow Inverted Pyramid

// *********
//  *     *
//   *   *
//    * *
//     *

let m1= 5;
for (let i = m1; i >= 1; i--) {
  if (i === 1) {
    console.log(" ".repeat(m1 - 1) + "*");
  } else if (i === m) {
    console.log("*".repeat(2 * m - 1));
  } else {
    console.log(" ".repeat(m - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}

// // 9) Diamond

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let m2= 5;
// upper part
for (let i = 1; i <= m2; i++) {
  console.log(" ".repeat(m2 - i) + "*".repeat(2 * i - 1));
}
// lower part
for (let i = m2 - 1; i >= 1; i--) {
  console.log(" ".repeat(m2 - i) + "*".repeat(2 * i - 1));
}



// //10) Hollow Diamond

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

let x = 5;
// upper
for (let i = 1; i <= x; i++) {
  if (i === 1) {
    console.log(" ".repeat(x - 1) + "*");
  } else {
    console.log(" ".repeat(x - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}
// lower
for (let i = x - 1; i >= 1; i--) {
  if (i === 1) {
    console.log(" ".repeat(x - 1) + "*");
  } else {
    console.log(" ".repeat(x - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}

