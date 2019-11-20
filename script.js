const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function getCheckBox(name, label){
    let checkHTML = "<input type='checkbox' class = '" + classNames.TODO_CHECKBOX + "' name = '" + name + "' id='" + name + "' onClick = toggleItem('" + name + "')>"
    checkHTML += "<label for = '" + name + "'>" + label + "</label>"
    return checkHTML
}

function toggleItem(item){
  var checkBox = document.getElementById(item);
  var label = checkBox.nextSibling;

  label.classList.toggle("done");

  if(checkBox.checked == true){
      uncheckedCount--;
  }
  else{
    uncheckedCount++;
  }
  uncheckedCountSpan.innerHTML = uncheckedCount.toString()


}

let itemCount=0
let uncheckedCount=0
function newTodo() {
  let item = prompt("Enter a new todo item ")
  if(item==null) return;
  list.innerHTML += "<LI class='" + classNames.TODO_ITEM + "'><span class='" + classNames.TODO_TEXT + "'>" + getCheckBox("item" + itemCount, item) + "</SPAN></LI>"
  itemCount++;
  uncheckedCount++
  itemCountSpan.innerHTML = itemCount.toString()
  uncheckedCountSpan.innerHTML = uncheckedCount.toString()

}
