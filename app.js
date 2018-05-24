const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUL = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUL.children;
const firstListItem = listUL.firstElementChild;
const lastListItem= listUL.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';


function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

listUL.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
      if (event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLI = li.previousElementSibling;
        let ul = li.parentNode;
        if (prevLI) {
          ul.insertBefore(li, prevLI);
        }
      }
       if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLI = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLI) {
          ul.insertBefore(nextLI, li);
       }
     }
   }
});


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide List';
      listDiv.style.display = 'block';
    } else {
      toggleList.textContent = 'Show List';
      listDiv.style.display='none';
    }
});


descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ":";
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');                       
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});

