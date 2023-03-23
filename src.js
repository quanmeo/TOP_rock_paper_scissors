function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function chooseImg(value) {
    if (value === 0) {
        return 'images/rock.png'
    } else if (value === 1) {
        return 'images/paper.png';
    } else {
        return 'images/scissors.png';
    }
}

const selecs = [document.querySelector('#rock>img'),
                document.querySelector('#paper>img'),
                document.querySelector('#scissors>img')];
/*
    0: rock
    1: paper
    2: scissors
    @return: 1 you win
            -1 computer win
             0 draw
*/
function checkWin(youChoose, computerChoose) {
    if (youChoose === computerChoose) {
        return 0;
    } else if (youChoose + computerChoose === 2) {
        if (youChoose === 0) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return youChoose < computerChoose ? -1 : 1;
    }
}

function choose(e) {
    const you = document.querySelector('#you>img');
    const computer = document.querySelector('#computer>img');

    if (you && computer) {
        const youChoose = parseInt(this.getAttribute('value'));
        const computerChoose = getRandomInt(3);

        you.setAttribute('src', chooseImg(youChoose));
        computer.setAttribute('src', chooseImg(computerChoose));

        const win = checkWin(youChoose, computerChoose);

        console.log(win);

        const noti = document.querySelector('.result>h3');
        console.log(noti);
        const youScore = document.querySelector('#you').getElementsByTagName('p');
        console.log(youScore);
        const computerScore = document.querySelector('#computer').getElementsByTagName('p');
        console.log(computerScore);

        if (win === 0) {
            noti.innerHTML = 'You and Computer are Draw';
        } else if (win === 1) {
            noti.innerHTML = 'You win';
            youScore[1].innerHTML = parseInt(youScore[1].innerHTML) + 1;

            if (parseInt(youScore[1].innerHTML) === 5) {
                document.querySelector('.result>h1').innerHTML = 'Game over. YOU ARE THE WINNER';
            }
        } else {
            noti.innerHTML = 'Computer win';
            computerScore[1].innerHTML = parseInt(computerScore[1].innerHTML) + 1;

            if (parseInt(computerScore[1].innerHTML) === 5) {
                document.querySelector('.result>h1').innerHTML = 'Game over. COMPUTER IS THE WINNER';
            }
        }
    }
}

selecs.forEach(img => img.addEventListener('click', choose));