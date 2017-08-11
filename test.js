const board = [1,1,2,2,3,4];

// function checkWin(b){
//   let isWin = false;
//   function JOB(b){
//     let tempBoard = b;
//     let tally = {};
//     for (let p = 0; p<tempBoard.length; p++){
//       if (tempBoard[p] in tally){

//       }
//     }
//   }

// }

function JOB(b){
    let hasPair = false;
    let tempBoard = b;
    const pairs = [];
    let tally = {};
    for (let a = 0; a<tempBoard.length; a++){
      if(!(tempBoard[a] in tally)){
        tally[tempBoard[a]] = 1;
      }else{
        tally[tempBoard[a]] += 1;
      }
    }
    for (let p in tally){
      if (tally[p] === 2){
        hasPair = true;
        pairs.push(p);
      }
    }
    return pairs;
  }

console.log(JOB(board));
console.log(board);
