const board = [4,'J','J','J',];
const suits = ['&#9829', '&#9829', '&#9829', '&#9829', '&#9829'];

let hasJOB = false;
let hasTwoPair = false;
let hasThreeKind = false;
let hasFlush = false;
let hasFullHouse = false;

function jacksOB(b){
    //array of jacks or better to compare index of later
    const jobArr = ['J', 'Q', 'K', 'A',];
    //make temporary array in case of mutability
    let tempBoard = b;
    //container array for value of pairs
    const pairs = [];
    //temporary object to tally number of card values
    let tally = {};
    //for loop accumulating number of card values
    for (let a = 0; a<tempBoard.length; a++){
      if(!(tempBoard[a] in tally)){
        tally[tempBoard[a]] = 1;
      }else{
        tally[tempBoard[a]] += 1;
      }
    }
    //for-in construct to check tally for pairs and if pair is jacks or better, push into pairs array and turn JOB boolean to true
    for (let p in tally){
      if (tally[p] === 2 && jobArr.indexOf(p) !== -1){
        hasJOB = true;
        pairs.push(p);
      }
    }
    return hasJOB;
  }

function twoPair(b){
    //make temporary array in case of mutability
    let tempBoard = b;
    //container array for value of pairs
    const pairs = [];
    //temporary object to tally number of card values
    let tally = {};
    //for loop accumulating number of card values
    for (let a = 0; a<tempBoard.length; a++){
      if(!(tempBoard[a] in tally)){
        tally[tempBoard[a]] = 1;
      }else{
        tally[tempBoard[a]] += 1;
      }
    }
    //for-in construct to check tally and collect pairs into array, push into pairs array
    for (let p in tally){
      if (tally[p] === 2){
        pairs.push(p);
      }
    }
    if (pairs.length > 1){
      hasTwoPair = true;
    }
    console.log(pairs);
    return hasTwoPair;
  }

function threeKind(b){
    //make temporary array in case of mutability
    let tempBoard = b;
    //container array for value of pairs
    const three = [];
    //temporary object to tally number of card values
    let tally = {};
    //for loop accumulating number of card values
    for (let a = 0; a<tempBoard.length; a++){
      if(!(tempBoard[a] in tally)){
        tally[tempBoard[a]] = 1;
      }else{
        tally[tempBoard[a]] += 1;
      }
    }
    //for-in construct to check tally and collect pairs into array, push into pairs array
    for (let p in tally){
      if (tally[p] === 3){
        hasThreeKind = true;
        three.push(p);
      }
    }
    console.log(three);
    return hasThreeKind;
}

function flush(b){
  const arr = [];
  for (let i = 0; i< b.length; i++){
    arr.push(b[i]);
  }
  //predicate functions checking for each of the 4 suits
  function isSpade(el){
    return el === '&#9824';
  }
  function isClub(el){
    return el === '&#9827';
  }
  function isHeart(el){
    return el === '&#9829';
  }
  function isDiamond(el){
    return el === '&#9830';
  }
  //check elements of container array using every method against each suit
  if(arr.every(isSpade) || arr.every(isClub) || arr.every(isHeart) || arr.every(isDiamond)){
    hasFlush = true;
  }
  return hasFlush;
}

function fullHouse(b){
    //container array for value of pairs
    const three = [];
    const pair = [];
    //temporary object to tally number of card values
    let tally = {};
    //for loop accumulating number of card values
    for (let a = 0; a<b.length; a++){
      if(!(b[a] in tally)){
        tally[b[a]] = 1;
      }else{
        tally[b[a]] += 1;
      }
    }
    //for-in construct to check tally and collect pairs into array, push into pairs array
    for (let p in tally){
      if (tally[p] === 3){
        three.push(p);
      }else if(tally[p] === 2){
        pair.push(p);
      }
    }
    if (three.length === 1 && pair.length === 1){
      hasFullHouse = true;
    }
    return hasFullHouse;
}

console.log(fullHouse(board));
