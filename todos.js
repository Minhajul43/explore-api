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
  const section = document.getElementById('todos');
  section.innerHTML = todos.map(todo => `
    <div>
      <h3>${todo.title}</h3>
      <p>${todo.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  `).join('');
};

loadTodos();