document.getElementById('form-example')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let inputs = event.target.querySelectorAll('input, textarea, select');

    let values = {};

    inputs.forEach(function (item)  {
      values[item.name] = item.value;
    })
    localStorage.setItem('form', JSON.stringify(values));
  });


document.addEventListener('DOMContentLoaded', function (event) {
  if(!localStorage.form) return;

  let values = JSON.parse(localStorage.form);

  let inputs = event.target.querySelectorAll('#form-example input, #form-example textarea, #form-example select');
  let termsVal = values.terms;

  let checkBox = event.target.querySelector('input[type=checkbox]');

  if(termsVal === 'on') {
    checkBox.checked = true;
    checkBox.setAttribute('cecked', 'checked')
  }

  // let file = event.target.querySelector('input[type=file]');
  // if(values.file.name) {
  //   file.value = values[file.name];
  // }

  for(let input of inputs) {
    if(input.type === 'File' || input.type === 'checkbox') continue;
    input.value = values[input.name]
  }


  console.log(inputs)


})