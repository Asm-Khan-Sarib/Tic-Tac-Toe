
function check_win(mark) {
    const win_combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < win_combinations.length; i++) {
        let [a, b, c] = win_combinations[i];
        if (bord[a] === mark && bord[b] === mark && bord[c] === mark) {
            return [win_combinations[i],mark];
        }
    }
    return null;
}

function disable_buttons() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(`${i}`).disabled = true
    }
}

function check_bord() {
    let win_buttons = check_win("X") || check_win("O")
    if(win_buttons){

        for(let b=0; b<win_buttons[0].length; b++){
            let temp = document.getElementById(`${ win_buttons[0][b] + 1 }`)
            temp.style.backgroundColor = "rgba(0, 0, 0, 0.137)"
        }

        disable_buttons()
        document.getElementById("txt").innerHTML="."
        return `${win_buttons[1]} wins !!!`
    }
    else if (bord.includes("-")) {
        return ".";
      }
    else{
        disable_buttons()
        document.getElementById("txt").innerHTML="."
        return "Draw"
    }
}

let bord = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
let click_count = 0


document.addEventListener("DOMContentLoaded", function () {
    let buttons = []
    let text1 = document.getElementById("txt");
    let text2 = document.getElementById("txt2");

    for (let i = 1; i < 10; i++) {
        let temp = document.getElementById(`${i}`)
        buttons.push(temp)
    }
    // backgroud image change
    document.getElementById("t1").addEventListener("click", function () {
        document.body.style.backgroundImage = 'url("image/space1.jpg")';
    })
    document.getElementById("t2").addEventListener("click", function () {
        document.body.style.backgroundImage = 'url("image/underwater1.jpg")';
    })
    document.getElementById("t3").addEventListener("click", function () {
        document.body.style.backgroundImage = 'url("image/nature2.jpg")';
    })

    // backgroud music
    document.getElementById("m1").addEventListener("click", function () {
        document.getElementById("background-audio").play();
    })
    document.getElementById("m2").addEventListener("click", function () {
        document.getElementById("background-audio").pause();
    })
    //reset
    document.getElementById("reset").addEventListener("click", function () {
        bord = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
        buttons.forEach(x => {
            x.innerHTML = "-"
            x.disabled = false
            x.style.backgroundColor ="rgba(0, 0, 0, 0.39)"
        })
        text1.innerHTML = "Player 1's trun"
        text2.innerHTML = "."
        click_count = 0
    })

    buttons.forEach(x => {
        x.addEventListener("click", function () {
            if (bord[parseInt(this.id) - 1] == "-") {
                if (click_count % 2 == 0) {
                    bord[parseInt(this.id) - 1] = "X"
                    text1.innerHTML = "Player 2's trun"
                }
                else {
                    bord[parseInt(this.id) - 1] = "O"
                    text1.innerHTML = "Player 1's trun"
                }

                const button_number = document.getElementById(this.id);
                button_number.innerHTML = bord[parseInt(this.id) - 1]
                button_number.disabled = true; // disable the button

                click_count += 1
            }
            text2.innerHTML = check_bord()
        })
    })


})