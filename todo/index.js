const input = document.querySelector('input');
const Addtodo = document.querySelector('#Addtodo');
const output = document.querySelector('#output');

Addtodo.addEventListener('click', () => {
  const todo = input.value;
  if( todo === '' ) {
    alert('Please enter a todo');
    return;
  }else {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todo}</span>
    <button id="listBtn" onClick="removeTodo(this)">Remove</button>`
    output.appendChild(li);
    input.value = '';
  }
});

function removeTodo(element){
    console.log(element.parentNode)
    console.log("inside remove Todo")
    element.parentNode.remove();
}