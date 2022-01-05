let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

// This is because the delete keyword on line 17 deletes the value of the element
// but does not removes the element from the array. JavaScript assigns the value of
// undefined to this element. Hence, the first element becomes an <empty item>.
// Thus, undefined gets printed in the output string upon execition of code on line 16.
// It can be fixed using Array.protottype.shift() method which removed the first element
// from the array.