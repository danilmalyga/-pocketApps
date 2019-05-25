let chessField = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function drawChessField() {
  let out = '',
    m = 0;
  for (let i = 0; i < chessField.length; i += 1) {
    let arr = chessField[i];
    for (let k = 0; k < arr.length; k += 1) {
      if (m % 2 === 0) {
        out += `<div class = "chess-block" data-x="${k}" data-y="${i}"></div>`;
      } else {
        out += `<div class = "chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
      }
      m += 1;
    }
    m += 1;
  }
  document.querySelector('#field').innerHTML = out;
}

drawChessField();

function removeClases() {
  document.querySelectorAll('.chess-block').forEach(function(element) {
    element.classList.remove(
      'selectedHorse',
      'selectedPawn',
      'selectedBishop',
      'selectedRook',
      'selectedQeen',
      'selectedKing',
      'active'
    );
  });
}

function removeEventlisteners(element) {
  element.removeEventListener('click', horseAction);
  element.removeEventListener('click', pawnAction);
  element.removeEventListener('click', bishopAction);
  element.removeEventListener('click', rookAction);
  element.removeEventListener('click', qeenAction);
  element.removeEventListener('click', kingAction);
}

function chooseFigure() {
  console.log('change');
  let checkbox = document.getElementsByClassName('figureClass');
  if (checkbox[0].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', horseAction);
    });
  } else if (checkbox[1].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', pawnAction);
    });
  } else if (checkbox[2].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', bishopAction);
    });
  } else if (checkbox[3].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', rookAction);
    });
  } else if (checkbox[4].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', qeenAction);
    });
  } else if (checkbox[5].checked) {
    document.querySelectorAll('.chess-block').forEach(function(element) {
      removeEventlisteners(element);
      element.addEventListener('click', kingAction);
    });
  }
}

let form = document.getElementById('form');
form.addEventListener('click', chooseFigure);
