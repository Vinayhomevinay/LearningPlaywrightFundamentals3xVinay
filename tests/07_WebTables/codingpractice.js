const data = require('fs').readFileSync(0, 'utf8');
let x = parseInt(data.trim(), 10);
// Write your solution here

let remainderval;
let reversenumber;
console.log(x);
while (x > 0)
{
    remainderval = (x % 10);
      x = remainderval;
    console.log(remainderval);
    reversenumber += remainderval * 10;


}
