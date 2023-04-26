
const amt = document.querySelector(".amt");
const abbr = document.querySelector(".abbr");
const names = document.querySelectorAll(".names");
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");

name1.textContent.toLowerCase(); 
name2.textContent.toLowerCase(); 



amt.textContent = prompt('Amount?');

let namesI = prompt('What\'s the name?');
for (i of names) {
    let it = i.textContent = namesI.trim();
    const firstLetter = [...it].shift().toUpperCase();
    abbr.textContent = firstLetter;
    i.textContent = firstLetter + it.slice(1).toLowerCase();
};





