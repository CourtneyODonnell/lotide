# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @courtneyo/lotide`

**Require it:**

`const _ = require('@courtneyo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual(actualInput, ExpectedInput)`: asserts equality of two arrays
*  `assertEqual(actual, expected)`: asserts if two values are equal
*  `assertObjectsEqual(actual, expected)`: asserts if two objects are equal
*  `countLetters(string)`: counts the character in a string
*  `countOnly(allItems, itemsToCount)`: counts specified items to be counted from a given group 
*  `eqArrays(array1, array2)`: tests if two arrays are equal
*  `eqObjects(object1, object2)`: checks if two objects are equal
*  `findKey(object, callback)`: finds the first key of object where callback is truthy
*  `findKeyByValue(object, value)`: finds the first key of object where value is truthy
*  `flatten(array)`: merges arrays and nested arrays into one array
*  `head(inputArray)`: returns only the first item in the array
*  `letterPositions(sentence)`: return all indeces of sentence where character is found
*  `map(array, callback)`: creates a new array from calling a function for every array element
*  `middle(array)`: finds the middle element(s) of the array
*  `tail(inputArray)`: returns all but the first item in the array
*  `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning.
*  `without(arraySource, itemsToRemove)`: returns array with specified items removed