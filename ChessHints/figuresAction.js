
function horseAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedHorse');
    if(+x + 2 < 8 && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x + 2}"][data-y = "${+y + 1}"]`).classList.add('active');
    }
    if(+x + 2 < 8 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x + 2}"][data-y = "${+y - 1}"]`).classList.add('active');
    }
    if(+x - 2 >= 0 && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x - 2}"][data-y = "${+y + 1}"]`).classList.add('active');
    }
    if(+x - 2 >= 0 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x - 2}"][data-y = "${+y - 1}"]`).classList.add('active');
    }
    if(+x + 1 < 8 && +y - 2 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x + 1}"][data-y = "${+y - 2}"]`).classList.add('active');
    }
    if(+x - 1 >= 0 && +y - 2 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x - 1}"][data-y = "${+y - 2}"]`).classList.add('active');
    }
    if(+x + 1 < 8 && +y + 2 < 8){
        document.querySelector(`.chess-block[data-x = "${+x + 1}"][data-y = "${+y + 2}"]`).classList.add('active');
    }
    if(+x - 1 >= 0 && +y + 2 < 8){
        document.querySelector(`.chess-block[data-x = "${+x - 1}"][data-y = "${+y + 2}"]`).classList.add('active');
    }  
};

function pawnAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedPawn');
    if (+y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y-1}"]`).classList.add('active');
    }
}

function bishopAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedBishop');
    let i;
    for (i = 1; i < 8; i += 1){
        if (+x + i < 8 && +y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y + i}"]`).classList.add('active');
        }
        if (+x - i >= 0 && +y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y - i}"]`).classList.add('active');
        }
        if (+x - i >= 0 && +y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y + i}"]`).classList.add('active');
        }
        if (+x + i < 8 && +y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y - i}"]`).classList.add('active');
        }
    }
}

function rookAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedRook');
    for (i = 1; i < 8; i += 1){
        if (+x + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y}"]`).classList.add('active');
        }
        if (+x - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y}"]`).classList.add('active');
        }
        if (+y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y-i}"]`).classList.add('active');
        }
        if (+y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y+i}"]`).classList.add('active');
        }
    }
}


function qeenAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedQeen');
    for (i = 1; i < 8; i += 1){
        if (+x + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y}"]`).classList.add('active');
        }
        if (+x - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y}"]`).classList.add('active');
        }
        if (+y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y-i}"]`).classList.add('active');
        }
        if (+y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y+i}"]`).classList.add('active');
        }
        if (+x + i < 8 && +y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y + i}"]`).classList.add('active');
        }
        if (+x - i >= 0 && +y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y - i}"]`).classList.add('active');
        }
        if (+x - i >= 0 && +y + i < 8){
            document.querySelector(`.chess-block[data-x = "${+x - i}"][data-y = "${+y + i}"]`).classList.add('active');
        }
        if (+x + i < 8 && +y - i >= 0){
            document.querySelector(`.chess-block[data-x = "${+x + i}"][data-y = "${+y - i}"]`).classList.add('active');
        }
    }
}

function kingAction(){
    removeClases();
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('selectedKing');
    if(+x - 1 >= 0 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x - 1}"][data-y = "${+y - 1}"]`).classList.add('active');
    }
    if(+x + 1 < 8 && +y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x + 1}"][data-y = "${+y - 1}"]`).classList.add('active');
    }
    if(+x - 1 >= 0 && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x - 1}"][data-y = "${+y + 1}"]`).classList.add('active');
    }
    if(+x + 1 < 8 && +y + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x + 1}"][data-y = "${+y + 1}"]`).classList.add('active');
    }
    if(+x + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x + 1}"][data-y = "${+y}"]`).classList.add('active');
    }
    if(+x - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x - 1}"][data-y = "${+y}"]`).classList.add('active');
    }
    if(+y - 1 >= 0){
        document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y - 1}"]`).classList.add('active');
    }
    if(+y + 1 < 8){
        document.querySelector(`.chess-block[data-x = "${+x}"][data-y = "${+y + 1}"]`).classList.add('active');
    }
}