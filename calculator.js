/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {};

  function load(num){
    if(typeof num === "number"){
     total = num;
     return total;
    }else{
      throw new "error!";
    }
  }

  function getTotal(num){
    return total;
  }

  function add(num){
    if(typeof num === "number"){
      total += num;
      return total;
    }else{
      throw new "error!";
    }
  }

  function subtract(num){
    if(typeof num === "number"){
     total -= num;
     return total;
   }else{
    throw new "error!";
   }
  }

  function multiply(num){
    total *= num;
    return total;
  }

  function divide(num){
    total /= num;
    return total;
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
  }

  function clearMemory(){
    memory = 0;
  }


  return {
    load:load,
    getTotal:getTotal,
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
    recallMemory:recallMemory,
    saveMemory:saveMemory,
    clearMemory:clearMemory
  };

 };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

