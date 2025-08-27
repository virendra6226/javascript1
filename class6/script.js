/*  w a p to print number pattern in right angle triangle 

1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5
  */

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write(j+ " ");
    }
    document.write("<br>");
}
  


/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5 
*/

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write(i+" ");
    }
    document.write("<br>");
}

// w a p to print inverted triangle
/*

1 2 3 4 
1 2 3
1 2 
1    */

for(let i=4;i>=1;i--)
{
    for(let j=1;j<=i;j++)
    {
        document.write(j+" ");
    }
    document.write("<br>");
}


/*

1
2 3
4 5 6
7 8 9 10

*/


let n=1;
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=i;j++)
    {
        document.write(n+" ");
        n++;
    }
    document.write("<br>");
}

/*
     1
   2   2
  3  3   3 
4  4   4   4

*/

for(let i=1;i<=4;i++)
{
    for(let j=1;j<=n-i;j++)
    {
        document.write("&nbsp;");
    }
    for(let k=1;k<=i;k++)
    {
        document.write(i+" ");
    }

    document.write("<br>");
}




           /*
           1
         1    2  
       1   2    3
     1   2   3    4
     */

for(let i=1;i<=4;i++)
{
    for(let j=1;j<=n-i;j++)
    {
        document.write("&nbsp;");
    }
    for(let k=1;k<=i;k++)
    {
        document.write(k+" ");
    }

    document.write("<br>");
}


/*

      1
     2  3
    4  5  6
   7  8  9  10

   */

let count=1;
   for(let i=1;i<=4;i++)
   {
    for(let j=4;j>=i;j--)
    {
        document.write( "&nbsp;"); 
    }
    for(k=1;k<=i;k++)
    {
        document.write(count+g" ");
    }
    document.write("<br>");
   }

