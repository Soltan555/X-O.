let table = document.getElementById("table");
let show = document.getElementById("show");
let arr = [];
let X = 'X';
let O = 'O';
let count;
let player1;
let player2;
let point1 = 0;
let point2 = 0;


start()

function start() {
    count = 1;
    player1 = player1 == undefined ? prompt("Player 1 daxil edin?", X) : player1;
    player2 = player2 == undefined ? prompt("Player 2 daxil edin?", O) : player2;
    show.innerHTML = `Player1: ${player1} -${point1} <br/> <br/> <br/> <br/> Player2: ${player2} -${point2} `
    Arr();
    Table();
}





function Table() {
    let tbl = ''
    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;

        for (let j = 0; j < 3; j++) {
            tbl += `<td onclick="Click(${i},${j})" > ${arr[i][j] == undefined ? " " : arr[i][j]} </td>`;
        }
        tbl += `</tr>`;
    };
    table.innerHTML = tbl;
}




function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}


function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = O;
        } else {
            arr[i][j] = X;
        }
        count++;
        Table();
        setTimeout(function() {
            Check();
        }, 200)
    }
}


function Check() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            Finish(arr[i][0])
        }
    }
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] !== undefined && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
            Finish(arr[0][i])
        }
    }

    if (arr[0][0] !== undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        Finish(arr[0][0])
    }

    if (arr[0][2] !== undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        Finish(arr[0][2])
    }

    if (count == 10) {
        alert("beraber qaldiniz");
        start();
    }

}


function Finish(won) {
    let cavab = won == player1 ? "Player1 won" : "Player2 won";
    won == player1 ? point1++ : point2++;
    alert(cavab);
    start();
}