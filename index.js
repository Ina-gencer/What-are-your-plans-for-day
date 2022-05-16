//поле
const inputText = document.querySelector('.inputText');

//кнопка
const btn = document.querySelector('.btn');

//родитель ul
const toDoList = document.querySelector('.toDoList');

 //устанавливаем прослушку на кнопку
btn.addEventListener('click', ()=> {
    //sozdaem li
    const item = document.createElement('li');
    //получаем доступ к полю
    item.innerText = inputText.value;
    if(inputText.value.length === 0) {
        return false
    }
    item.classList.add('newClass');
    //вешаем ребенка на родителя
    toDoList.appendChild(item);
    //opustoshaem ctroku
    inputText.value = '';

    //прослушка на дело
    item.addEventListener('click', ()=> {
        item.classList.add('lineThrough');
    })
    //удаляем дела
    item.addEventListener('dblclick', ()=> {
        toDoList.removeChild(item);
    })
})