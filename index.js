var Range = require("./lib/range");

console.log(Range(3, 8), Range(5), Range(1, 10, function (n) { return n*n; }));