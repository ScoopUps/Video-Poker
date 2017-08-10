$(document).ready(function(){
  console.log('Ready freddy');



  $('.hold').click(function(){
    let $holdNum = $(this).attr('id');
    alert(`Holding ${$holdNum}`)
  })

  $('.card').click(function(){
    let $card = $(this);
    $card.removeClass('placeholder');
    let $cardNum = $card.attr('id');
    if ($cardNum === "card1"){
      $card.css('color', board[0].color);
      $card.html('<span class="ranksuit">' + board[0].rank + '</br>'  + board[0].suit + '</span><div class="innercard"></div>');
    }else if ($cardNum === "card2"){
      $card.css('color', board[1].color);
      $card.html('<span class="ranksuit">' + board[1].rank + '</br>'  + board[1].suit + '</span><div class="innercard"></div>');
    }else if ($cardNum === "card3"){
      $card.css('color', board[2].color);
      $card.html('<span class="ranksuit">' + board[2].rank + '</br>'  + board[2].suit + '</span><div class="innercard"></div>');
    }else if ($cardNum === "card4"){
      $card.css('color', board[3].color);
      $card.html('<span class="ranksuit">' + board[3].rank + '</br>'  + board[3].suit + '</span><div class="innercard"></div>');
    }else if ($cardNum === "card5"){
      $card.css('color', board[4].color);
      $card.html('<span class="ranksuit">' + board[4].rank + '</br>'  + board[4].suit + '</span><div class="innercard"></div>');
    }
  }
)


});
