// Description

export const addTwoNumbers = (params) => {
  return params.first + params.second
}

// error

implicit any type error

// solution 1

export const addTwoNumbers = (params: {first: number; second: number}) => {
  return params.first + params.second
}

// solution 2

type addTwoNumbers = {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: addTwoNumbers) => {
  return params.first + params.second
}

// solution 3

interface addTwoNumbers {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: addTwoNumbers) => {
  return params.first + params.second
}

