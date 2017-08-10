console.log('Game.js is ready')


//create card class
class Card {
  //use constructor taking rank and suit as inputs
  constructor(rank, suit){
    //rank will be the card's value i.e. K, 9, J, etc.
    this.rank = rank;
    //suit will be the card's suit family in UTF-8 symbolic form
    this.suit = suit;
    //set initial color to black
    this.color = 'black';
    //if suit is a heart or diamond, set the color to red
    if (this.suit === '&#9829' || this.suit === '&#9830'){
      this.color = 'red';
    }
    //hold condition to check for when thrust onto game board
    this.held = false;
  }
}

//empty deck array to populate with cards
const deck = [];
//array of card rank values
const ranks = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];
//array of card suit values
const suits = ['&#9824', '&#9827', '&#9829', '&#9830'];
//array to be the main representation of the game's 5-card draw board
const board = [];
//variable to store credit bank
let credits = 80;

//for loop to iterate through the suits then the ranks and finally pushing a new card object into the deck array
for (let i = 0; i<suits.length; i++){
  for (let j = 0; j<ranks.length; j++){
    deck.push(new Card(ranks[j], suits[i]));
  }
}

//helper function to shuffle the deck array
function shuffle(deck){
  //random num of shuffles up to 52 to scatter the deck
  let numOfShuffles = Math.floor(Math.random()* 52);
  for (let n = 0; n<numOfShuffles; n++){
    //sort the deck using a randomizer by the num of shuffles variable
    deck.sort(function(a,b){
      if(Math.random() > .5){
        return 1;
      }else{
        return -1;
      }
    });
  }
}

//helper function to populate the main game board
function popBoard (){
  while(board.length < 5){
    let tempCard = deck.pop();
    board.push(tempCard);
  }
}

shuffle(deck);
popBoard();
console.log(board);
console.log(deck);
