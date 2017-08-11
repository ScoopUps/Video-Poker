const board = [2,2,'J', 'Q', 'Q'];

// function checkWin(b){
//   //condtional to check for jacks or better
//   let hasJOB = false;
//   let hasTwoPair = false
// }

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

console.log(jacksOB(board));
console.log(board);
