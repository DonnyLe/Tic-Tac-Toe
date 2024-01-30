let turn = 'O'; 

let buttons = document.querySelectorAll('.grid-item');
buttons = [[buttons[0], buttons[1], buttons[2]], 
                [buttons[3], buttons[4], buttons[5]], 
                [buttons[6], buttons[7], buttons[8]]];


function placeMove(r, c) {
    if(buttons[r][c].innerText == "" ) {
    buttons[r][c].innerText = turn;
    if(checkWin(r, c)) {
        window.alert(`${turn} has won!`)
    }
    turn = turn == 'O' ? 'X' : 'O';   
    }   
}


function restart() {
    for(let r = 0; r < buttons.length; r++) {
        for(let c = 0 ; c < buttons.length; c++) {
            buttons[r][c].innerText = "";
        } 
    }
}
    
function checkWin(r, c) {
    let dirs = [[1, 1],  [-1,-1], [-1, 1] ,[1, -1], [1, 0], [0, 1], [-1, 0], [0, -1]]
    for(let i = 0; i < dirs.length; i++) {
        if(checkDir(dirs[i][0], dirs[i][1], r, c)) {
            return true;
        }
    }
    return false
}

function checkDir(dr, dc, r, c) {
    let piecesInARow = 1
    r += dr;

    c += dc; 
    while( r < 3 && r >= 0 
         && c < 3 && c >= 0) {
            console.log(buttons[r][c].innerText)
            if (buttons[r][c].innerText == turn) {
=                piecesInARow++;
            }
            r += dr;
            c += dc; 
         }
    if(piecesInARow == 3) {
        return true;
    } 
}
