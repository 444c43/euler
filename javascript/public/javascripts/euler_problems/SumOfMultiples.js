function SumOfMultiples(){
}

SumOfMultiples.prototype.sum = function(maxNum) {
  var sum = 0;
  for (var i = 0; i < maxNum; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i; 
    }
  }
  return sum;
};
