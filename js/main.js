// Accessing document property
console.log(document.title)
//Finding an element by id
const infoPara = document.getElementById("info")
console.log(infoPara)
// To show all properties of the element 
console.dir(infoPara)
// To add a text at the end of the info box content
infoPara.textContent += "Daniela"
// Finding an element using css selector 
let container = document.querySelector (".container")
// This is just to make sure we are retrieving the correct item
console.log (container)
//using style object of an element. Css styles must be typed using camelcase
container.style.maxWidth = "800px"
container.style.margin = "0 auto"
// To call properties, brackets are used, but to access properties or values, "" are used. 

//Finding all the elements using CSS selector}
let allNodes = document.querySelectorAll (".type")
console.log(allNodes)
// Accessing the element in second position and setting its style.background
allNodes[1].style.background ="cyan"
//Looping through the allNodes array and assigning style.border to each item
for(let eachNode of allNodes) {
    eachNode.style.border = "1px solid black"
}
/* Traversing the DOM*/
// Finding the element by ID
const mainNodes = document.getElementById ("threeNodes")
console.log (mainNodes)
// accesing the children property of the mainNodes variable
const listOfNodes = mainNodes.children
// selecting the second item and setting its styles
listOfNodes[1].style.margin="10px 0"

const firstNode = mainNodes.firstElementChild 
console.log (firstNode.textContent)

/*Attribute methods*/
const learnMore = document.getElementById("learn")
// Getting attribute values
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))
// Setting attribute value
learnMore.setAttribute("target", "_blank")

//Adding a class using classList-shake, rattle and roll assignment
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color:powderBlue;
padding: 10px;
border: 1px solid black;`)
