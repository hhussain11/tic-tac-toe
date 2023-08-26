const  playRound = () => {

  //Board elements
  let newGame = document.querySelector('.new-game')
  let tl = document.querySelector('.tl');
  let tm = document.querySelector('.tm');
  let tr = document.querySelector('.tr');
  let ml = document.querySelector('.ml');
  let mm = document.querySelector('.mm');
  let mr = document.querySelector('.mr');
  let bl = document.querySelector('.bl');
  let bm = document.querySelector('.bm');
  let br = document.querySelector('.br');

  let board = [tl, tm, tr, ml, mm, mr, bl, bm, br];

  for (let i=0; i < board.length; i++ ) {

    board[i].addEventListener('click', (event) => {
      
      if (event.target.innerHTML == '') {game.playGame(event)};
      
      
    })
  };


  // Counter keeps track of whos turn it is. If counter == 0, run function to input X, otherwise input O. This means counter == 0 is X's turn.

  let counter = 0;

  const counterValue = () => counter;

  // Change players turn by changing counter value. These functions are run after X or O is input.

  const changeToNaught = () => {
    counter += 1;
  };

  const changeToCross = () => {
    counter -= 1;
  };

  // Check whos turn it is.

  const getWhosTurn = () => {
    if (counterValue() == 0) {
      console.log('crosses turn');
    }
  
    else  {
      console.log('naughts turn');
    };
  };

  // Change DOM element to X or O.

  const inputXintoBoard = (event) => {
    
    event.target.innerHTML = 'X';

  };

  const inputOintoBoard = (event) => {
    
    event.target.innerHTML = 'O';
  
  }
  // Restart game function.

  const restartGame = () => {
    counter = 0;
    squares = 0;
    
    for (let i =0; i<board.length; i++) {
      board[i].innerHTML = '';
    }
  }

  newGame.addEventListener('click', restartGame)

  

  // Check if theres a winner.

  const checkForWinner = () => {

    // Top row

    if ((tl.innerHTML == tm.innerHTML) &&  (tm.innerHTML == tr.innerHTML)) {

      if (tl.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tl.innerHTML == 'X')  {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // Middle row 

    if ((ml.innerHTML == mm.innerHTML) &&  (mm.innerHTML == mr.innerHTML)) {

      if (ml.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (ml.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // Bottom row 

    if ((bl.innerHTML == bm.innerHTML) &&  (bm.innerHTML == br.innerHTML)) {

      if (bl.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (bl.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // 1st column

    if ((tl.innerHTML == ml.innerHTML) &&  (ml.innerHTML == bl.innerHTML)) {

      if (tl.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tl.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // 2nd column 

    if ((tm.innerHTML == mm.innerHTML) &&  (mm.innerHTML == bm.innerHTML)) {

      if (tm.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tm.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // 3rd column 

    if ((tr.innerHTML == mr.innerHTML) &&  (mr.innerHTML == br.innerHTML)) {

      if (tr.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tr.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // Top left to bottom right diagonal

    if ((tl.innerHTML == mm.innerHTML) &&  (mm.innerHTML == br.innerHTML)) {

      if (tl.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tl.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    // Top right to bottom left diagonal 

    if ((tr.innerHTML == mm.innerHTML) &&  (mm.innerHTML == bl.innerHTML)) {

      if (tr.innerHTML == 'O') {
        alert('Naughts has won!');
        restartGame();
        
      }

      else if (tr.innerHTML == 'X') {
        alert('Crosses has won!')
        restartGame();
        
      }

    }

    let squares=0;

    for (let i=0; i < board.length; i++ ) {

      if (board[i].innerHTML != '') {
        squares +=1;
      }
    };

    if (squares == 9) {
      alert("It's a draw!")
      restartGame()
    }



    

  }

  // Function to run when DOM element is clicked.

  const playGame = (event) => {

    if (counterValue() == 0) {
      
      inputXintoBoard(event);

      changeToNaught();

      setTimeout(checkForWinner, 100);






    }
  
    else {
      
      inputOintoBoard(event);

      changeToCross();

      setTimeout(checkForWinner, 100);

    }

  }
  

  return {changeToCross, changeToNaught, counterValue, getWhosTurn, playGame, restartGame}

}

let game = playRound();

