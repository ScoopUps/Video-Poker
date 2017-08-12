const board = [4,3,'A',5,2];

function straight(b){
  function lowStraight(bl){
    let boardL = bl;
    //comparison array to check for straights with the low ace
    const aceLowArr = ['A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K'];
    //helper function to compare two elements along the low ace spectrum
    function sortLow(a,b){
      const aceLow = ['A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K'];
      return aceLow.indexOf(a) - aceLow.indexOf(b);
    }
    boardL.sort(sortLow);
    //variable to use as initial index for low ace array
    let low = aceLowArr.indexOf(boardL[0]);
    //for loop to compare low sorted board array against low ace array
    for (let i = 0; i<boardL.length; i++){
      console.log(boardL[i] === aceLowArr[low]);
      low += 1;
    }
    console.log(boardL)
  }
  function highStraight(bh){
  let boardH = b;
  //comparison array to check for straights with the high ace
  const aceHighArr = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];
  //helper function to compare two elements along the high ace spectrum
  function sortHigh(a,b){
    const aceHigh = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];
    return aceHigh.indexOf(a) - aceHigh.indexOf(b);
  }
  boardH.sort(sortHigh);
  //variable to use as initial index for high ace array
  let high = aceHighArr.indexOf(boardH[0]);
  //for loop to compare high sorted board array against high ace array
  for (let j = 0; j<boardH.length; j++){
    console.log(boardH[j] === aceHighArr[high]);
    high += 1;
  }
  console.log(boardH);
}
  lowStraight(b);
  highStraight(b);
}

straight(board);
