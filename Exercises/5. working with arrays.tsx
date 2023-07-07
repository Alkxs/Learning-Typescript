// challenge

//fix this type error by determining how to represent arrays.

interface User {
  id: number
  firstName: string
  lastName: string
  role: 'admin' | 'user' | 'super-admin'
  posts: Post
}

interface Post {
  id: number
  title: string
}

export const defaultUser: User = {
  id: 1,
  firstName: 'Matt',
  lastName: 'Pocock',
  role: 'admin',
  posts: [
    {
      id: 1,
      title: 'How I eat so much cheese',
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
}

// Solution1

// inside the User interface
posts: Post[];

// solution 2

// inside the User interface
posts: Array<Post>

