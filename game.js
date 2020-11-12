const P1 = 'fa-circle-o';
const P2 = 'fa-times';
let roundNr = 1;
const board = ['','','','','','','','',''];
const winPossibilities =[[0,1,2], [3,4,5], [6,7,8],
                         [0,3,6], [1,4,7], [2,5,8],
                         [0,4,8], [2,4,6] ];

const boxes=document.querySelectorAll('.box');
boxes.forEach(i=>i.addEventListener('click',action));

function action(e){
    const {nr} =e.target.dataset;
    if(board[nr] !== '') return;

    const whoPlay= (roundNr%2)? P1:P2;
    e.target.classList.add(whoPlay);
    board[nr] = whoPlay;
    roundNr++;
    checkWin();
}

function checkWin(){

    for(x of winPossibilities){
        
        var tab=['','',''];
        for(i=0;i<3;i++) tab[i]= board[x[i]];
    
        if((tab.every( (val,i, arr) => (val === arr[0]) && (arr[0]!== '')))){
            
            if(roundNr%2) alert("Koniec gry - WYGRAŁ GRACZ nr 1, wcisnij 'OK' aby zagrać ponownie...");
            else alert("Koniec gry - WYGRAŁ GRACZ nr 2, wcisnij 'OK' aby zagrać ponownie...");
            window.location.reload();      
        }
        else if(roundNr === 10){
             alert("Koniec gry - REMIS, wcisnij 'OK' aby zagrać ponownie...");
             window.location.reload();      
        }

    }

}