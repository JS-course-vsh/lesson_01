let form = document.getElementById('todoForm');
const STORE_ID = 'todoItems';
const TODO_CONTAINER =  document.getElementById('todoItems');
const radio_buttons =  document.getElementById('radioButtons');
const button_clear = document.querySelector("button[name=clear]");
const button_delcompl = document.querySelector("button[name=delcompl]");

//======================================================================================

document.addEventListener('DOMContentLoaded', function () {
    if(!localStorage[STORE_ID]) return;

    const data = JSON.parse(localStorage[STORE_ID]);

    data.forEach(function (item) {
        const template = createTemplate(item.heading, item.content, item.compl);
        TODO_CONTAINER.prepend(template);
    })

});

//-------------------------------------------------------------------------------------------

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const heading = e.target.querySelector('input[name=title]');
    const content = e.target.querySelector('textarea[name=description]');
    const complete = false;
    const id_item = Math.random().toString();

    if(!heading.value || !content.value) {
        alert('Заполните все поля !!!!');
        return;
    }

    const template = createTemplate(heading.value, content.value, complete);
    useStorage(heading.value, content.value, id_item, complete)

    TODO_CONTAINER.prepend(template);

    e.target.reset();
});

//----checkboxes---------------------------------------------------------------------------------------

TODO_CONTAINER.addEventListener('change', function(e) {
    e.preventDefault();

    const chboxs = Array.from(TODO_CONTAINER.querySelectorAll('input[name=complit]')).reverse();

    let currItemIndex= chboxs.indexOf(e.target);
    const storeData = JSON.parse(localStorage.getItem(STORE_ID));
    storeData[currItemIndex].compl = e.target.checked;

    localStorage.setItem(STORE_ID, JSON.stringify(storeData));

})

//-----clear_list--------------------------------------------------------------------------------------

button_clear.addEventListener('click', function() {
    localStorage.removeItem(STORE_ID);
    console.log('CLEAR');
    document.location.reload();
})

//------delete_item-----------------------------------------------------------------------------------------------

TODO_CONTAINER.addEventListener('click', function(e) {
    const butts = Array.from(TODO_CONTAINER.querySelectorAll('button[name=delete]')).reverse();

    let currItemIndex= butts.indexOf(e.target);
    const storeData = JSON.parse(localStorage.getItem(STORE_ID));
    console.log(currItemIndex);
    if (~currItemIndex) {
        storeData.splice(currItemIndex, 1);
        localStorage.setItem(STORE_ID, JSON.stringify(storeData));
        document.location.reload();
    }

})

//--------delete_complited-------------------------------------------------------------------------
button_delcompl.addEventListener('click', function() {
    const storeData = JSON.parse(localStorage[STORE_ID]).filter(el => el.compl === false);
    console.log(storeData);
    localStorage.setItem(STORE_ID, JSON.stringify(storeData));
    document.location.reload();

})

//--------filter_on_radiobutton----------------------------------------------------------------------
radio_buttons.addEventListener('click', function(e) {

    const data = JSON.parse(localStorage[STORE_ID]);

    if(e.target.value === 'all') {
        clearDiv(TODO_CONTAINER);
        data.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.compl);
            TODO_CONTAINER.prepend(template);
        })
        console.log('ALL')
    }
    if(e.target.value === 'completed') {
        clearDiv(TODO_CONTAINER);
        const data1 = data.filter(el => el.compl === true);

        data1.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.compl);
            TODO_CONTAINER.prepend(template);
        })
        console.log('completed')
    }
    if(e.target.value === 'incompleted') {
        clearDiv(TODO_CONTAINER);
        const data2 = data.filter(el => el.compl === false);

        data2.forEach(function (item) {
            const template = createTemplate(item.heading, item.content, item.compl);
            TODO_CONTAINER.prepend(template);
        })
        console.log('incompleted')
    }
})


//===============================================================================================

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

//-------------------------------------------------------------------------------------------------

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

    const delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.name = 'delete';
    delButton.className = 'btn-close';

    mainWrp.append(taskWrp);
    taskWrp.append(delButton);
    taskWrp.append(heading);
    taskWrp.append(taskDesc);
    taskWrp.append(taskCompl);

    return mainWrp;
}
//------------------------------------------------------------------------

function clearDiv(elem) {
    while(elem.firstChild){
        elem.removeChild(elem.firstChild);
    }
}