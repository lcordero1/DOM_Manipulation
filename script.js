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
h1Text.textContent = ("This is Dom Torretto's World!");
h1Text.append(h1Text)

//Part 2
/*Select the body and change the background-color to a new color of your choice.*/
const storedBody = document.querySelector('#body')
storedBody.style.backgroundColor = '#3CB371'

const faveThings = document.querySelector("favorite-things")

faveThings