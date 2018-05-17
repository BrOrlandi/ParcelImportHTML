import template from './template.html';

const container = document.querySelector('#template');

const templateContainer = document.createElement('template');
templateString = template.trim();
templateContainer.innerHTML = templateString;

const templateRendered = templateContainer.content.firstChild;

console.log(templateRendered);

container.appendChild(templateRendered);