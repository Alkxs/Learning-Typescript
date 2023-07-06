// description

interface User {
  id: number
  firstName: string
  lastName: string
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: string
}

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  // @ts-expect-error
  role: 'I_SHOULD_NOT_BE_ALLOWED',
}

// challenge

// Update the User interface to restrict the role property to one of the set options.

// The I_SHOULD_NOT_BE_ALLOWED role should cause an error, which will remove the red squiggly line from underneath the // @ts-expect-error line.

interface User {
  id: number
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'super-admin'
}
