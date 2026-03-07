// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
 const Data = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}
 
const LoadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            displayPost(json);
        })
};

const displayPost = (posts) => {
    // console.log(posts);

    posts.forEach(posts => {
        console.log(posts);
    });
};



// console.log("Explore API");

// const person = {
//   name: 'Minhajul',
//   age: 23,
//   university: 'Jagannath',
//   department: 'CSE',
//   hobby: 'Programming',

// };

// // console.log(person);

// //JSON--> javaScript object with notation
// //JSON.stringify

// const personJSON = JSON.stringify(person);
// // console.log(personJSON);
// // console.log(typeof personJSON);

// // JSON.parse
// const persons = JSON.parse(personJSON);
// console.log(persons);

// // write description about JSON.stringify and JSON.parse JSON.stringify is a method in JavaScript that converts a JavaScript object or value to a JSON string. It takes an object as input and returns a string representation of that object in JSON format. This is useful for sending data over the network or storing it in a file.

// // JSON.parse is a method in JavaScript that parses a JSON string and returns a JavaScript object. It takes a JSON string as input and converts it back into a JavaScript object. This is useful for receiving data from a server or reading data from a file that is in JSON format.