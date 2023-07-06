// Description

export const getName = (params: { first: string; last: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`
  }
  return params.first
}

// Your challenge is to figure out how to type the object so that last is optional.

// Solution 1
export const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`
  }
  return params.first
}

// solution 2

type Params = {
  first: string
  last?: string
}
