let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];
/*Part 1: Write a JavaScript statement that selects the #main-title ID element.Change the text of the title to something shorter.*/

const h1TextEl = document.getElementById('main-title')
// // console.log("iiiii")
h1TextEl.textContent = ("This is Dom Torretto's World!");
// h1TextEl.append(h1TextEl)
console.log(h1TextEl)

//Part 2
/*Select the body and change the background-color to a new color of your choice.*/
const storedBodyEl = document.querySelector('body')
storedBodyEl.style.backgroundColor = '#3CB371'

/* Part 3
Select DOM's Favorite Things list and remove the last list item.*/ 
// const sideBar = document.querySelector("side-bar")
// const faveThings = document.getElementById('favorite-things')

// sideBar.removeChild(faveThings)
// const sideBar = document.querySelector("side-bar")
// const faveThingsLi = document.getElementById("#favorite-things");
// // //faveThingsLi.removeChild(faveThingsLi.lastElementChild)
// sideBar.removeChild[5](faveThingsLi);
// //im not sure why this is not working


// Part 4
// Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

let specialEl = document.getElementsByClassName("special-title");
for (let i = 0; i < specialEl.length; i++) {
    specialEl[i].style.fontSize = '2rem';
}
// console.log(specialEl)

// Part 5
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const pastRacesEl = document.querySelector('#past-races')
pastRacesEl[3].removeChid()




// Part 6
// Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.

const newLi = document.createElement("li");
newLi.innerText = "New York City";
// document.newLi.appendchild --not right
const pastRaces = document.getElementById("past-races");
pastRaces.appendChild(newLi);





// Part 7
// Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.



// Part 8
// When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
// Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-title is clicked.



// Part 9
// Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red