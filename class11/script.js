// // *******
// //      *
// //     *
// //    *
// //   *
// //  *
// // *******

function printZ(n, ch = '*') {
  if (n < 3) {
    console.log('n must be at least 3 to draw Z');
    return;
  }

  // top row
  console.log(ch.repeat(n));

  // diagonal from top-right to bottom-left
  for (let r = 1; r <= n - 2; r++) {
    // build a line with spaces and one character at column (n - 1 - r)
    let line = ' '.repeat(n - 1 - r) + ch;
    console.log(line);
  }

  // bottom row
  console.log(ch.repeat(n));
}

// Examples:
printZ(7);



//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *    


function printVerticalDiamond(n) {
  // Top half (including middle line)
  for (let i = 1; i <= n; i++) {
    let line = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(line);
  }

  // Bottom half
  for (let i = n - 1; i >= 1; i--) {
    let line = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(line);
  }
}

// Example: Diamond with height 5 (top half)
printVerticalDiamond(5);



//    *   
//    *   
//    *   
// *******
//    *   
//    *   
//    *   
function printHollowPlus(size) {
  // size must be odd for a perfect plus
  if (size % 2 === 0) {
    console.log("Please enter an odd size for symmetry.");
    return;
  }

  let mid = Math.floor(size / 2);

  for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
      if (row === mid || col === mid) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

printHollowPlus(7);


// *****
// ****
// ***
// **
// *
function invertedRightAngledTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}
invertedRightAngledTriangle(5);


// *     *
//  *   * 
//   * *  
//    *   
//   * *  
//  *   * 
// *     *
function printX(size) {
  for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
      if (row === col || row + col === size - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
printX(7);


//    *   
//   ***  
//  ***** 
// *******
// *******
// *******
//  ***** 
//   ***  
//    *   
function diamondWithSolidCenter(n, centerSize) {
  if (n % 2 === 0) {
    console.log("Please use an odd number for symmetry.");
    return;
  }

  let mid = Math.floor(n / 2);

  for (let row = 0; row < n; row++) {
    let stars, spaces;

    // Top part before solid center
    if (row < mid - Math.floor(centerSize / 2)) {
      spaces = Math.abs(mid - row);
      stars = n - 2 * spaces;
    }
    // Solid center part
    else if (row >= mid - Math.floor(centerSize / 2) && row <= mid + Math.floor(centerSize / 2)) {
      spaces = 0;
      stars = n;
    }
    // Bottom part after solid center
    else {
      spaces = Math.abs(mid - row);
      stars = n - 2 * spaces;
    }

    console.log(" ".repeat(spaces) + "*".repeat(stars));
  }
}

// Example: diamond size 9, solid center 3 rows
diamondWithSolidCenter(9, 3);



// *****
// *   *
// *   *
// *   *
// *****
function printHollowSquare(size) {
  for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
      // Print star only at borders
      if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

printHollowSquare(5);


//     *    
//    * *   
//   *   *  
//  *     * 
// *********
function printHollowPyramid(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";

    // Spaces before stars
    line += " ".repeat(n - row);

    // Stars and spaces inside
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) {
        line += "*";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}

printHollowPyramid(5);



// *********
//  *     * 
//   *   *  
//    * *   
//     *    
function printHollowInvertedPyramid(n) {
  for (let row = n; row >= 1; row--) {
    let line = "";

    // Leading spaces
    line += " ".repeat(n - row);

    // Stars and hollow spaces
    for (let col = 1; col <= 2 * row - 1; col++) {
      if (col === 1 || col === 2 * row - 1 || row === n) {
        line += "*";
      } else {
        line += " ";
      }
    }

    console.log(line);
  }
}
printHollowInvertedPyramid(5);


// *
// **
// ***
// ****
// *****
function printIncreasingStars(n) {
  for (let row = 1; row <= n; row++) {
    console.log("*".repeat(row));
  }
}

printIncreasingStars(5);
