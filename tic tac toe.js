var f = 1;
var ot = document.getElementById("o-turn");
var xt = document.getElementById("x-turn");
var otb = document.getElementById("o-turn-back");
var xtb = document.getElementById("x-turn-back");
var x = [];
var o = [];
var combinations = [[1,2,3],
                    [1,4,7],
                    [1,5,9],
                    [2,5,8],
                    [3,6,9],
                    [4,5,6],
                    [7,5,3],
                    [7,8,9]];


function func(c){
    if(f == 1){
        document.getElementById(c).innerText = "X";
        otb.style.height = "70px";
        otb.style.width = "150px";
        ot.style.color = "rgb(0, 124, 146)";
        xtb.style.height = "0px";
        xtb.style.width = "0px";
        xt.style.color = "rgb(188, 245, 207)";
        document.getElementById(c).disabled = true;
        f = 2;
        x.push(c);
    }
    else{
        document.getElementById(c).innerText = "O";
        xtb.style.height = "70px";
        xtb.style.width = "150px";
        xt.style.color = "rgb(0, 124, 146)";
        otb.style.height = "0px";
        otb.style.width = "0px";
        ot.style.color = "rgb(188, 245, 207)";
        document.getElementById(c).disabled = true;
        f = 1;
        o.push(c);
    }
    setTimeout(win_check, 500);
}

function win_check(){
    if(x.length >= 3){
        for(let i = 0; i < 8; i++){
            let p = combinations[i];
            if(x.indexOf(p[0]) != -1 && x.indexOf(p[1]) != -1 && x.indexOf(p[2]) != -1){
                document.getElementById(p[0]).style.backgroundColor = 'green';
                document.getElementById(p[1]).style.backgroundColor = 'green';
                document.getElementById(p[2]).style.backgroundColor = 'green';
                setTimeout(function(){alert('Congratulations! Player1 wins');}, 10);
                return;
            }
        }
    }
    if(o.length >= 3){
        for(let i = 0; i < 8; i++){
            let p = combinations[i];
            if(o.indexOf(p[0]) != -1 && o.indexOf(p[1]) != -1 && o.indexOf(p[2]) != -1){
                document.getElementById(p[0]).style.backgroundColor = 'green';
                document.getElementById(p[1]).style.backgroundColor = 'green';
                document.getElementById(p[2]).style.backgroundColor = 'green';
                setTimeout(function(){alert('Congratulations! Player2 wins');}, 10);
                return;
            }
        }
    }
    if(x.length + o.length == 9){
        alert('Draw!');
    }
}