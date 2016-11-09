// select all the items that you'll be manipulating

var newTaskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; // this seems brittle
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");

// If add button is pressed and there is input, add the input text to the incomplete-task list
// You need to build the html from the ground up
// The input text goes in the label tags.

//<li><input type="checkbox"><label>Pay Bills</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>

var createNewToDoItem = function(taskString){

  console.log(taskString);

  //create
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  var textInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  //modify

  checkbox.type = "checkbox";
  textInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //append
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(textInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}


var addTask = function() {
  console.log("add button clicked... what to do?")
  // how do you create html with vanilla javascript?
  var listItem = createNewToDoItem(newTaskInput.value);
  incompleteTaskHolder.append(listItem);
  bindTaskEvents(listItem, taskCompleted);
  newTaskInput.value = "";

};

var editTask = function() {

  var listItem = this.parentNode;
  var textInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');

  var containsClass = listItem.classList.contains('editMode');

  if (containsClass) {
    label.innerText = textInput.value;
  } else {
    textInput.value = label.innerText;
  }

  listItem.classList.toggle('editMode');

  console.log("edit");
};

var deleteTask = function() {

  // okay. We just clicked the delete button. We need to the parent of button which is li
  // Then get the parent of the li, which is the ul.
  // Remove the li from the ul.
  var li = this.parentNode;
  var ul = li.parentNode;

  ul.removeChild(li);

  console.log("delete");
};

var taskCompleted = function() {

  // You just checked that the item was completed.
  // The listItem is the parent of the checkbox, so get the parent.
  // Remove it from the incomplete list and move it to the completed list.
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);

  console.log("task completed");
};

var taskIncomplete = function() {

  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  console.log("task not completed");
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  var editButton = taskListItem.querySelector('button.edit');
  editButton.onclick = editTask;
  var deleteButton = taskListItem.querySelector('button.delete');
  deleteButton.onclick = deleteTask;
  var checkbox = taskListItem.querySelector('input[type=checkbox]');
  checkbox.onchange = checkBoxEventHandler;
}


// set event handlers
// don't invoke the function--no ()--just assign the handler
addButton.addEventListener('click', addTask);

// cycle over the incomplete task list and bind events to the lists children
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

// cycle over the completed task list and bind events to the lists children
for (var i=0; i < completedTaskHolder.children.length; i++) {
  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}