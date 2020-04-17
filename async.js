const fetch = require('node-fetch')

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(users => {
//     const firstUser = users[0].id
//     return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id))
//   .then(res => res.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error))


  const myAsyncFunction = async () => {
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
  
      const firstUserId = users[0].id;
  
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUserId)
      const posts = await postsResponse.json()
  
      console.log(posts)
    } catch (error) {
      console.log(error)
    }
  };

  myAsyncFunction()