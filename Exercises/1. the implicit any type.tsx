//  problem description

export const addTwoNumbers = (a, b) => {
  return a + b
}

// errors

Parameter 'a' implicitly has an 'any' type.
Parameter 'b' implicitly has an 'any' type.


// Solution

export const addTwoNumbers = (a: number, b: number) => {
  return a + b
}