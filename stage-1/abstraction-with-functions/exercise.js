  /*
  * Exercise: Refactor the code!
  *
  * This file is a collection of functions you've been asked to refactor.
  *
  * The primary purpose of this exercise is to use your judgement to decide when
  * and where to introduce appropriate abstractions, and whether you can use
  * either abstractions provided by JavaScript, or write your own.
  *
  * The command
  *   npm run s1.functions
  * will run tests to ensure the functions do what they should. They should all
  * still pass when you've finished refactoring.
  *
  * Advice:
  * + Try to recognise common patterns in the code.
  * + When you have recognised a pattern, think about if you could make a
  *   function to encapsulate it, instead of repeating code in several places.
  */
  "use strict";

  // function capitaliseObjectKeys(input, callback) {
  //   const keys = Object.keys(input);
  //   const result = {};
  //   for (var ii = 0; ii < keys.length; ii++) {
  //     return str.slice(0, 1).toUpperCase().concat(str.slice(1));
  //   }
  //   return result;
  // }

  function capitaliseString(value) {
    return value.slice(0, 1).toUpperCase().concat(value.slice(1));
  }
  
  function inc(value) {
    return value + 1;
  }
  
  function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  function loopIt(input, callback) {
    const keys = Object.keys(input);
    for (let i = 0; i < keys.length; i++) {
      callback(keys[i]);
    }
  }

  function capitaliseObjectKeys(input) {
    
    const result = {};

    loopIt(input, key => {
      const capitalisedKey = capitaliseString(key);
      result[capitalisedKey] = input[key];
    });

    return result;
  }

  function capitaliseObjectValues(input) {
   
    const result = {};

   loopIt(input, key => {
     const capitalisedKey = capitaliseString(input[key]);
     result[key] = capitalisedKey;
   })

    return result;
  }

  function incrementObjectValues(input) {
    const result = {};
    loopIt(input ,(key)=> {
      const incrementedValue = inc(input[key]);
    result[key] = incrementedValue;
    });
    return result;
  }

  function reverseObjectKeys(input) {
    const keys = Object.keys(input);
    const result = {};

    loopIt(input, key => {
      const reversedKey = reverseString(key);
      result[reversedKey] = input[key];
    });

    return result;
  }

  module.exports = {
    capitaliseObjectKeys,
    capitaliseObjectValues,
    incrementObjectValues,
    reverseObjectKeys,
  };
