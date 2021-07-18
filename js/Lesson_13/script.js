let elem = document.getElementsByTagName('li');
let arrel = []

console.log(`count elements of the list = ${elem.length}`);

for(let txt of elem) {
  arrel.push(txt.innerText);
}

arrel.forEach((e, i) => console.log(`#${i+1} - ${e}`));