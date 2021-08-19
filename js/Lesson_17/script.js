let ID_counter = localStorage.ID_counter ? +localStorage.getItem('ID_counter') : 1;
let form = document.getElementById('todoForm');
const STORE_ID = 'todoItems';
const TODO_CONTAINER =  document.getElementById('todoItems');
const radio_buttons =  document.getElementById('radioButtons');
const button_clear = document.querySelector("button[name=clear]");
const button_delcompl = document.querySelector("button[name=delcompl]");



// Helper func

function findWrapper(el) {
    if(el.getAttribute('data-id')) {
        return el;
    }
    return findWrapper(el.parentElement);
}

function findElement(todoItems, id) {
    return todoItems.find(function (singleTodoItem) {
        if(singleTodoItem.id === id) return singleTodoItem
    })
}

function clearDiv(elem) {
    while(elem.firstChild){
        elem.removeChild(elem.firstChild);
    }
}

function visibleBtn(list) {
    if(list.length > 0 && list.some(e => e.checked === true)) {
        button_delcompl.style.visibility = 'visible';
    } else {
        button_delcompl.style.visibility = 'hidden';
    }
}

//======================================================================================

document.addEventListener('DOMContentLoaded', function () {
    if(!localStorage[STORE_ID]) return;

    const data = JSON.parse(localStorage[STORE_ID]);

    data.forEach(function (item) {
        const template = createTemplate(item.heading, item.content, item.id, item.status);
        TODO_CONTAINER.prepend(template);
    })

    // if(data && data.some(e => e.status === true)) {
    //     button_delcompl.style.visibility = 'visible';
    // } else {
    //     button_delcompl.style.visibility = 'hidden';
    // }
    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));
    visibleBtn(chboxs);

});

//-------add_item----------------------------------------------------------------------------

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const heading = e.target.querySelector('input[name=title]');
    const content = e.target.querySelector('textarea[name=description]');

    if(!heading.value || !content.value) {
        alert('Заполните все поля !!!!');
        return;
    }

    const template = createTemplate(heading.value, content.value, ID_counter);
    useStorage(heading.value, content.value)

    TODO_CONTAINER.prepend(template);

    e.target.reset();
});

//----checkboxes---------------------------------------------------------------------------------------

TODO_CONTAINER.addEventListener('change', function(e) {
    e.preventDefault();
    //
    // const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]')).reverse();

    // console.log(chboxs)
    // let currItemIndex= chboxs.indexOf(e.target);
    // const storeData = JSON.parse(localStorage.getItem(STORE_ID));
    // storeData[currItemIndex].compl = e.target.checked;
    // localStorage.setItem(STORE_ID, JSON.stringify(storeData));
    //

    const todoItem = findWrapper(e.target);
    const todoItemId = +todoItem.getAttribute('data-id');
    const status = e.target.checked;
    const todoItems = JSON.parse(localStorage[STORE_ID]);
    let currentTodoItem = findElement(todoItems, todoItemId);
    currentTodoItem.status = status;

    localStorage.setItem(STORE_ID, JSON.stringify(todoItems));

    // if(todoItems && todoItems.some(e => e.status === true)) {
    //     button_delcompl.style.visibility = 'visible';
    // } else {
    //     button_delcompl.style.visibility = 'hidden';
    // }
    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));
    visibleBtn(chboxs);

})

//-----clear_list--------------------------------------------------------------------------------------

button_clear.addEventListener('click', function() {
    localStorage.removeItem(STORE_ID);
    localStorage.removeItem('ID_counter');
    // TODO_CONTAINER.parentElement.remove();
    TODO_CONTAINER.parentNode.removeChild(TODO_CONTAINER);
    TODO_CONTAINER.innerHTML = '';
    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));
    visibleBtn(chboxs);

})

//------delete_item-----------------------------------------------------------------------------------------------

TODO_CONTAINER.addEventListener('click', function(e) {
    // const butts = Array.from(TODO_CONTAINER.querySelectorAll('button[name=delete]')).reverse();
    // const storeData = JSON.parse(localStorage.getItem(STORE_ID));
    // let currItemIndex= butts.indexOf(e.target);
    //
    // if (~currItemIndex) {
    //     storeData.splice(currItemIndex, 1);
    //     localStorage.setItem(STORE_ID, JSON.stringify(storeData));
    //     document.location.reload();
    // }

    if(!e.target.classList.contains('delete-btn')) return;
    const todoItem = findWrapper(e.target);
    const todoItemId = +todoItem.getAttribute('data-id');
    const todoItems = JSON.parse(localStorage[STORE_ID]);

    let updatedItems = todoItems.filter(function (item) {
        if(item.id !== todoItemId) return item;
    });

    localStorage.setItem(STORE_ID, JSON.stringify(updatedItems));
    todoItem.parentElement.remove();

    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));
    visibleBtn(chboxs);

})

//--------delete_complited-------------------------------------------------------------------------

button_delcompl.addEventListener('click', function() {

    // const storeData = JSON.parse(localStorage[STORE_ID]).filter(el => el.status === false);
    // localStorage.setItem(STORE_ID, JSON.stringify(storeData));

    // const todoItems = JSON.parse(localStorage[STORE_ID]);



  let chboxsIncomplete = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]')).filter(el => el.checked === false);

    console.log(chboxsIncomplete);
    localStorage.setItem(STORE_ID, JSON.stringify(chboxsIncomplete));

  let chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));

    visibleBtn(chboxs);
})

//--------filter_on_radiobutton----------------------------------------------------------------------
radio_buttons.addEventListener('click', function(e) {

    const data = JSON.parse(localStorage[STORE_ID]);

    if(e.target.value === 'all') {
        clearDiv(TODO_CONTAINER);
        data.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.id, item.status);
            TODO_CONTAINER.prepend(template);
        })
        // console.log('ALL')
    }
    if(e.target.value === 'completed') {
        clearDiv(TODO_CONTAINER);
        const data1 = data.filter(el => el.status === true);
        data1.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.id, item.status);
            TODO_CONTAINER.prepend(template);
        })
        // console.log('completed')
    }
    if(e.target.value === 'incompleted') {
        clearDiv(TODO_CONTAINER);
        const data2 = data.filter(el => el.status === false);
        button_delcompl.style.visibility = 'hidden';
        data2.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.id, item.status);
            TODO_CONTAINER.prepend(template);
        })
        // console.log('incompleted')
    }

    // const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]'));
    //
    //
    // if(e.target.value === 'all') {
    //
    //     console.log('ALL')
    // }
    //
    // if(e.target.value === 'completed') {
    //     clearDiv(TODO_CONTAINER);
    //     let cmpl = [...chboxs];
    //
    //     cmpl.filter(el => el.checked === true).forEach(function (item) {
    //             const template = createTemplate(item.heading, item.content, item.status);
    //             TODO_CONTAINER.prepend(template);
    //         })
    //     console.log(chboxs)
    //     // console.log('completed')
    // }
    //
    // if(e.target.value === 'incompleted') {
    //     clearDiv(TODO_CONTAINER);
    //     let incmpl = [...chboxs];
    //
    //     incmpl.filter(el => el.checked === false).forEach(function (item) {
    //         const template = createTemplate(item.heading, item.content, item.status);
    //         TODO_CONTAINER.prepend(template);
    //     })
    //     console.log(chboxs)
    //     console.log('incompleted')
    // }

})



//===============================================================================================

function useStorage(heading, content, status = false) {
    // localStorageArray  = 'todoItems'

    const todoItem = {
        id: ID_counter,
        heading,
        content,
        status
    }

    ++ID_counter;
    localStorage.setItem('ID_counter', ID_counter);

    if(localStorage[STORE_ID]) {
        const storeData = JSON.parse(localStorage.getItem(STORE_ID));
        storeData.push(todoItem);

        localStorage.setItem(STORE_ID, JSON.stringify(storeData));
        return todoItem;
    }

    const arr = JSON.stringify([todoItem]);
    localStorage.setItem(STORE_ID, arr);
    return todoItem;
}

//-------------------------------------------------------------------------------------------------

function createTemplate(title, taskBody, id, status = false) {
    const mainWrp = document.createElement('div');
    mainWrp.className = 'col-4';

    const taskWrp = document.createElement('div');
    taskWrp.className = 'taskWrapper';
    taskWrp.setAttribute('data-id', id);

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
    if(status) {
        taskCheck.checked = true;
        taskCheck.setAttribute('checked', 'checked');
    }


    const labelCheck = document.createElement('label');
    labelCheck.className = 'form-check-label';
    labelCheck.innerText = 'Completed';

    taskCompl.append(taskCheck);
    taskCompl.append(labelCheck);

    const delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.name = 'delete';
    delButton.className = 'btn btn-close delete-btn';

    mainWrp.append(taskWrp);
    taskWrp.append(delButton);
    taskWrp.append(heading);
    taskWrp.append(taskDesc);
    taskWrp.append(taskCompl);

    return mainWrp;
}
//------------------------------------------------------------------------

