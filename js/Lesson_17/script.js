let form = document.getElementById('todoForm');
const STORE_ID = 'todoItems';
const TODO_CONTAINER =  document.getElementById('todoItems');

document.addEventListener('DOMContentLoaded', function () {
    if(!localStorage[STORE_ID]) return;

    const data = JSON.parse(localStorage[STORE_ID]);

    data.forEach(function (item) {
        // document.getElementById('todoItems')
        const template = createTemplate(item.heading, item.content, item.compl);
        TODO_CONTAINER.prepend(template);
    })

});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const heading = e.target.querySelector('input[name=title]');
    const content = e.target.querySelector('textarea[name=description]');
    const chbox = e.target.querySelector('input[name=complit]');
    const complete = false;
    const id_item = Math.random().toString();

    if(!heading.value || !content.value) {
        alert('Заполните все поля !!!!');
        return;
    }

    const template = createTemplate(heading.value, content.value, id_item, complete);
    useStorage(heading.value, content.value, id_item, complete )

    // document.getElementById('todoItems')
    TODO_CONTAINER.prepend(template);

    e.target.reset();
});

TODO_CONTAINER.addEventListener('change', function(e) {
    e.preventDefault();

    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]')).reverse();

    let currItemIndex= chboxs.indexOf(e.target);
    const storeData = JSON.parse(localStorage.getItem(STORE_ID));
    storeData[currItemIndex].compl = !storeData[currItemIndex].compl;
    console.log(storeData[currItemIndex].compl);

    localStorage.setItem(STORE_ID, JSON.stringify(storeData));

})

function useStorage(heading, content, id, compl) {
    // localStorageArray  = 'todoItems'
    if(localStorage[STORE_ID]) {
        const storeData = JSON.parse(localStorage.getItem(STORE_ID));
        storeData.push({heading, content, id, compl});

        localStorage.setItem(STORE_ID, JSON.stringify(storeData));
        return;
    }

    const arr = JSON.stringify([{heading, content, id, compl}]);
    localStorage.setItem(STORE_ID, arr);
    return {heading, content, id, compl};
}

function createTemplate(title, taskBody, compl) {
    const mainWrp = document.createElement('div');
    mainWrp.className = 'col-4';

    const taskWrp = document.createElement('div');
    taskWrp.className = 'taskWrapper';

    const heading = document.createElement('div');
    heading.className = 'taskHeading';
    heading.innerText = title;

    const taskDesc = document.createElement('div');
    taskDesc.className = 'taskDescription';
    taskDesc.innerText = taskBody;

    const taskCompl = document.createElement('div');
    taskCompl.className = 'form-check';

    const taskCheck = document.createElement('input')
    taskCheck.name = 'complit';
    taskCheck.type = 'checkbox';
    taskCheck.className = 'form-check-input';
    taskCheck.checked = compl;

    const labelCheck = document.createElement('label');
    labelCheck.className = 'form-check-label';
    labelCheck.innerText = 'Complited';

    taskCompl.append(taskCheck);
    taskCompl.append(labelCheck);


    mainWrp.append(taskWrp);
    taskWrp.append(heading);
    taskWrp.append(taskDesc);
    taskWrp.append(taskCompl);

    return mainWrp;
}