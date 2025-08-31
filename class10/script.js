//  right angle triangle with numbers//

// 1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=5;i++)
{     let ans=""
    for(let j=1;j<=i;j++)
    {
        ans=ans+j;
    }
            console.log(ans)
    }


    // (inverted right angle triangle with numbers) //

    for(let i=5;i>=1;i--)
    {
        let war="";
        for(let j=1;j<=i;j++)
        {
          war=war+i;
        }
        console.log(war)
    }


// A  
// A B  
// A B C  
// A B C D  
// A B C D E


let n = 5; // number of rows

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j) + " "; // 65 = 'A'
  }
  console.log(row);
}


//         A
//       A B
//     A B C
//   A B C D
// A B C D E

let n1 = 5;

for (let i = 0; i < n1; i++) {
  let row = "  ".repeat(n1 - i - 1); // spaces
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}


//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

let n2 = 5;

for (let i = 0; i < n2; i++) {
  let row = " ".repeat(n2 - i - 1); // spaces

  // increasing part
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j);
  }

  // decreasing part
  for (let j = i - 1; j >= 0; j--) {
    row += String.fromCharCode(65 + j);
  }

  console.log(row);
}


// A B C D E  
// A B C D E  
// A B C D E  
// A B C D E  
// A B C D E

let n3 = 5;

for (let i = 0; i < n3; i++) {
  let row = "";
  for (let j = 0; j < n3; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}


// A B C D E  
// A B C D  
// A B C  
// A B  
// A


let n4= 5;

for (let i = 0; i < n4; i++) {
  let row = "";
  for (let j = 0; j < n4 - i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}


//     A
//    A B
//   A B C
//  A B C D
// A B C D E
//  A B C D
//   A B C
//    A B
//     A

let n5 = 5;

// upper part
for (let i = 0; i < n5; i++) {
  let row = " ".repeat(n5 - i - 1);
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}

// lower part
for (let i = n5 - 2; i >= 0; i--) {
  let row = " ".repeat(n5 - i - 1);
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}


// A
// A B
// A   C
// A     D
// A B C D E

let n6 = 5;

for (let i = 0; i < n6; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i || i === n6 - 1) {
      row += String.fromCharCode(65 + j) + " ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}


// A B C D E  
// A B C D  
// A B C  
// A B  
// A  
// A B  
// A B C  
// A B C D  
// A B C D E

let n7 = 5;

// upper part
for (let i = 0; i < n7; i++) {
  let row = "";
  for (let j = 0; j < n7 - i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}

// lower part
for (let i = 1; i < n7; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}

