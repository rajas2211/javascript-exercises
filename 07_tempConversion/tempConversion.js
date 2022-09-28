const ftoc = function(f) {
  c = (Number(f)-32)*5/9;
  return Number(c.toFixed(1));
};

const ctof = function(c) {
  f = (9/5*Number(c)+32);
  return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
