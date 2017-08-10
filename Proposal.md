# *** Jason Soukup / 8/8/2017 ***

## Video Poker Proposal

## What is Video Poker?

It's a simple one-player, 5-draw casino game. The player gets dealt a hand of 5 cards, has the option to hold 0-5 cards, then draws however many new cards they don't hold onto. The player is rewarded on a progressive payout scale from one pair to a royal flush depending on the type of game.

I chose this game because my mom really likes to play it. I already have a built-in audience for my game. ;) I know quite a bit about how it's played and I'd be curious to take a stab at creating this game from scratch. 

## Wireframe

I have some design ideas but will wait for approval to mock them up.

## Initial thoughts on game structure

<<<<<<< HEAD
I think there are some familiar concepts I can draw from some of the projects we've already done, namely the memory game and high card.

The biggest challenge I expect to face is checking for the various winning winning hands. The typical game has 9 distinct winning outcomes, like one-pair, two-pair, flush, full house, etc. Certain ones are dependent on sequence such as straight and straight flush. There's a lot of different winning combinations so designing the win logic could be tricky. 
=======
I think there are familiar concepts I can draw from some of the projects we've already done, namely the memory game and high card.

The biggest challenge I expect to face is checking for the various winning hands. The typical game has 9 winning outcomes, like one-pair, two-pair, flush, full house, etc. Certain ones are dependent on sequence such as straight and straight flush. There are quite a few different winning combinations so designing the win logic could be tricky. 
>>>>>>> 51a35cdde07a3af86fcfecf25bec6914c145c8e9

Bigger ideas would be maybe a fun theme for the design and my biggest idea would be allowing for the player to choose from several of the more popular variations of video poker like bonus poker, double bonus poker, etc. which all have distinct winning combinations.

## Phases of Completion

I expect to start with a simple, functional model and work on getting the basic game logic and winning combinations down pat (Phase -1 )before delving into a more elaborate visual design (Phase 0). Here's the basic idea of how I am thinking of approaching the project in phase form.

#### Phase -1
- Start button 
- 5 cards
- 5 hold buttons
- Deal/draw button
- Payout scale
- Winning output
- Check for win (if win: type of winning hand)
- Credits/score

#### Phase 0
- CSS animation when cards are flipped
- Player name form
- Personalized winning output
- Instructions
- Landing page 

#### Phase 1
- Theme (i.e. western, sci-fi, pop culture, or maybe several choices of theme [time willing])
- Sound effects/music
- Adjustable payout scale
- Choice of game variation (i.e. double bonus poker, jacks or better, etc.)

## Links and Resources

Typical video poker game: https://www.freeslots.com/poker.htm

Video poker overview: https://en.wikipedia.org/wiki/Video_poker
