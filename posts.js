const LoadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      displayPost(data);
    })
};

const displayPost = (posts) => {
  // console.log(posts);
  // for (let i = 0; i < posts.length; i++) {
  //   console.log(posts[i]);
  // }

  // for (const post of posts) {
  //   console.log(post);
  // }

  posts.forEach(post => {
    console.log(post);
  })
};