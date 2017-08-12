const board = [4,5,'J','J',8];
const suits = ['&#9829', '&#9829', '&#9829', '&#9829', '&#9827'];

let hasJOB = false;
let hasTwoPair = false;
let hasThreeKind = false;

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

console.log
