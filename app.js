const con = document.getElementById('container');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const plan = document.getElementById('plan');
const abcd = document.getElementsByClassName('bttn');
const span =document.getElementById('span');

btn.addEventListener('click', function() {
    if (input.value == '') {
        alert('Biror narsa yozishingiz shart!!!')
    } else {
        plan.innerHTML += `<span id="span"> ${input.value} <i onclick="removeTodo(this)" class="fa-solid fa-trash-can" style="color: yellow;"></i> </span>
    `
    input.value = ''
    }
    
});

function removeTodo(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
}

