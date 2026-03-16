const loadPost = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      displayPost(data);
    });
};
const displayPost = (posts) => {
  console.log(posts);
  posts.forEach(post => {
    console.log(post.id);
  })
};
// displayPost();