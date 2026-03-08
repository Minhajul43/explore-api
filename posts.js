const LoadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      displayPost(data);
    })
};

// const displayPost = (posts) => {
  
//   // get the container
//   const postContainer = document.getElementById('post-container');
//   postContainer.innerHTML = "";// Create empty in previous data and load new data

//   // console.log(post-container);


//   posts.forEach(post => {
//     console.log(post.title);

//     //2.create html element

//     const li = document.createElement('li');
//     li.innerText = post.title;
//     // console.log(li);

//     // 3.append child
//     postContainer.appendChild(li);
//     console.log(postContainer);
  
//   });
  
//   // console.log(posts);
//   // for (let i = 0; i < posts.length; i++) {
//   //   console.log(posts[i]);
//   // }

//   // for (const post of posts) {
//   //   console.log(post);
//   // }

//   // posts.forEach(post => {
//   //   console.log(post);
//   // })
// };


// {
//     "userId": 10,
//     "id": 94,
//     "title": "qui qui voluptates illo iste minima",
//     "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// }

// {
//     "userId": 10,
//     "id": 94,
//     "title": "qui qui voluptates illo iste minima",
//     "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// }
const displayPost = (posts) => {
  // get the container and clear the container

  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = "";// Create empty in previous data and load new data
  posts.forEach(post => {

    const postCard = document.createElement("div");
    postCard.innerHTML = `
      <div class="post-card">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>`;

    postContainer.append(postCard);
  });
};
 
LoadPost();