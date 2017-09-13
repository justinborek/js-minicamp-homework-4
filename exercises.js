// Do not change any of the function names

function multiplyArguments() {
  if (arguments.length <1) return (0);
  var total = arguments[0];
  for (var i = 1; i < arguments.length; i++ ){
    total *= arguments[i];
  }
  return total;
}

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  cb(sum);
}

function forEach(arr, cb) {
  arr.forEach(function(num){
    cb(num);
  });
}

function map(arr, cb) {
  return arr.map(function(val){
    val = cb(val);
    return val;
  });
}

function getUserConstructor(options) {
  return function user(options){
  this.username = options.username;
  this.name = options.name;
  this.email = options.email;
  this.password = options.password;
  this.sayHi = function( ) {
    return ('Hello, my name is ' + this.name);
  };
};
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function(){
    return 'Hello World!';
  };
}

function addReverseString() {
  String.prototype.reverse = function(){
    return this.split('').reverse().join('');
  };
}

function nFactorial(n) {
  if (n > 0) {
    return n * nFactorial(n-1);
  }
  else {
    return 1;
  }
}

function cacheFunction(cb) {

  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
