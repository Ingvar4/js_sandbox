const container = document.getElementById('posts-container');
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const downloadButton = document.querySelector('.button-download');
const overlay = document.getElementById('overlay');

// Функция для получения задач
async function getData() {
  try {
    const response = await fetch(
      'https://68382f1e2c55e01d184c4d9a.mockapi.io/api/v1/todos',
      {
        method: 'GET',
      }
    );

    if(!response.ok) {
      throw new Error (`Данные не получены. Статус: ${response.status}`);
    }

    const data = await response.json();
    console.log('Данные получены:', data);
    renderData(data);
  } catch (error) {
    console.error(`Ошибка`, error.message);
  }
}

// Функция рендера данных
function renderData(todos) {
  todos.forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const textElement = document.createElement('p');
    textElement.textContent = todo.text;

    const timeElement = document.createElement('p');
    textElement.textContent = new Date(todo.createdAt).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('button-function');

    const deleteIcon = document.createElement('img');
    
  });
}

//Получение данных по клику, чтобы функция бесконечно не долбилась на сервер
downloadButton.addEventListener('click', getData);