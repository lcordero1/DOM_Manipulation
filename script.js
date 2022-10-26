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
const faveThingsEl = document.querySelector("#favorite-things")

faveThingsEl.classList.remove(faveThingsEl.lastElementChild)

// Part 5
// Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const pastRacesEl = document.querySelector('#past-races')
pastRacesEl[3].remove