'use strict'

var gNextNum;
var gTimePassed;
var gSecsInterval;
var gState = {};
var gBoard;
var gElGameBoard;

gState.size = 3;

function cleanBoard() {
    var tds = document.querySelectorAll('td.clicked');
    for (var i = 0; i < tds.length; i++) {
        tds[i].classList.remove('clicked');
    }
}

function chooseLevel(level) {
    switch (level) {
        case level = 'easy':
            gState.size = 3;
            break;
        case level = 'meduim':
            gState.size = 4;
            break;
        case level = 'meduim':
            gState.size = 6;
            break;
        default:
            break;
    }
}

function updateNextNum() {
    var elSpanNextNum = document.querySelector('#spanNextNum');
    console.log('elSpanNextNum', elSpanNextNum);

    elSpanNextNum.innerText = gNextNum;
}
function updateTime() {
    var elSpanTimer = document.getElementById('spanTimer');

    elSpanTimer.innerText = gTimePassed / 10;
}

function restartGame() {
    if (gSecsInterval) clearInterval(gSecsInterval);
    gNextNum = 1;
    gTimePassed = 0;
    gSecsInterval = undefined;
    gState.size = setLevel();
    cleanBoard();
    updateNextNum();
    updateTime();
}


function cellClicked(elNum) {

    if (!gSecsInterval) {
        gSecsInterval = setInterval(function () {
            gTimePassed++;
            // console.log('Second passed!', gSecsPassed);
            updateTime();

        }, 100)
    }

    var clickedNum = +elNum.innerText;
    if (gNextNum === clickedNum) {
        elNum.classList.add('clicked');

        if (gNextNum === Math.pow(gState.size, 2)) {
            //    console.log('Victory! took you: ', gSecsPassed, ' seconds');
            setTimeout(function () {
                alert('Victory! time: ' + gTimePassed / 10)
            }
                , 500);
            clearInterval(gSecsInterval);

        } else {
            gNextNum++;
            updateNextNum();
        }

    }

}

