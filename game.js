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

//GLOBAL VARIABLES!!!

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

//HELPER FUNCTIONS!!!

//helper function to populate the deck
function popDeck(){
  //clear the deck to populate
  deck.length = 0;
  //double loop to cnstrust 52 cards from the suit and rank arrays
  for (let i = 0; i<suits.length; i++){
    for (let j = 0; j<ranks.length; j++){
      deck.push(new Card(ranks[j], suits[i]));
    }
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

//helper function to draw the appropriate cards
function dealBoard(){
  //jQuery card selectors
  let $card1 = $('#card1');
  let $card2 = $('#card2');
  let $card3 = $('#card3');
  let $card4 = $('#card4');
  let $card5 = $('#card5');
  let $cards = [$card1, $card2, $card3, $card4, $card5];
  //for loop to replace cards not held
  for (let p = 0; p<board.length; p++){
    if (board[p].held === false){
      board[p] = deck.pop();
      $cards[p].css('color', board[p].color);
      $cards[p].html('<span class="ranksuit">' + board[p].rank + '</br>'  + board[p].suit + '</span><div class="innercard"></div>');
    }
  }
}

//EVENT LISTENERS!!!

$(document).ready(function(){
  console.log('Ready freddy');


  //click event for the hold buttons
  $('.hold').click(function(){
    //store id of clicked hold button
    let $holdNum = $(this).attr('id');
    //store index of clicked hold to use on board array
    let index = parseInt($holdNum.charAt(4) - 1);
    //conditional to toggle the hold from true/false and vice versa
    if (board[index].held === false){
      board[index].held = true;
    }else if(board[index].held === true){
      board[index].held = false;
    }
    alert(board[index].held);
  })

   $('.card').click(function(){
    //store id of clicked hold button
    let $holdNum = $(this).attr('id');
    //store index of clicked hold to use on board array
    let index = parseInt($holdNum.charAt(4) - 1);
    //conditional to toggle the hold from true/false and vice versa
    if (board[index].held === false){
      board[index].held = true;
    }else if(board[index].held === true){
      board[index].held = false;
    }
    alert(board[index].held);
   }
 )

  $('#betmax').click(function(){
    credits -= 5;
    $('output').html(credits);
    popDeck();
    shuffle(deck);
    popBoard();
    let $card1 = $('#card1');
    let $card2 = $('#card2');
    let $card3 = $('#card3');
    let $card4 = $('#card4');
    let $card5 = $('#card5');
    let $cards = [$card1, $card2, $card3, $card4, $card5];
    for(let p = 0; p<board.length; p++){
      $cards[p].removeClass('placeholder');
      $cards[p].css('color', board[p].color);
      $cards[p].html('<span class="ranksuit">' + board[p].rank + '</br>'  + board[p].suit + '</span><div class="innercard"></div>');
    }
    $('#betmax').unbind('click');
  })

  $('#deal').click(function(){
    dealBoard()
    $('#deal').unbind('click');
});


});
