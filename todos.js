const loadTodos = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data));
};

// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false

const displayPost=(todos) => {
  const todosContainer  = document.getElementById('todos-container');
  todosContainer.innerHTML = '';
  
  todos.forEach(todos => {
    console.log(todos);
   
    let todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-card">
    <p>${todos.id}</p>
    <h3>${todos.title}</h3>
    </div>
    `;
    todosContainer.append(todoCard);
  });
};

loadTodos();