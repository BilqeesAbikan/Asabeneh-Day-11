// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let allTitles = document.querySelector("p");
console.log(allTitles);

// Get each of the the paragraph using document.querySelector('#id') and by their id

let firstTitle = document.querySelector(#first-title)
console.log(firstTitle)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const everyTitle = document.querySelectorAll('p')
console.log(everyTitle.length)
 for (let i=0; i < everyTitle.length; i++){
    console.log(everyTitle[i])
 }

//  Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const title = document.querySelector('p')
titles[3].textContent = 'Fourth paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
const titles = document.querySelector('p')
titles[0].setAttribute('class', 'title')
titles[0].setAttribute('id', 'first-title')
titles[1].setAttribute('class', 'title')
titles[1].setAttribute('id', 'second-title')
titles[2].setAttribute('class', 'title')
titles[2].setAttribute('id', 'third-title')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')