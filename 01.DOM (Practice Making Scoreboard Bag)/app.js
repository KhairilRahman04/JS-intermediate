const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset')
const winPointOption = document.querySelector('#winPoint');


let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;

//fungsi reset
function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

//counter p1 dengan logic: ketika game belum berakhir maka p1score bisa di klik(bertambah).
//jika p1score sama dengan winpoint maka game berakhir(tidak bisa bertambah) 
p1Button.addEventListener('click',function() {
    if (!isGameOver){
        p1Score += 1;
    }if (p1Score === winPoint){
        isGameOver = true;
    }
    p1Display.textContent = p1Score;
});

//counter p2 dengan logic: ketika game belum berakhir maka p2score bisa di klik(bertambah).
//jika p2score sama dengan winpoint maka game berakhir(tidak bisa bertambah) 
p2Button.addEventListener('click', function() {
    if (!isGameOver){
        p2Score += 1;
    }if (p2Score === winPoint){
        isGameOver = true;
    }
    p2Display.textContent = p2Score;
})

//reset display
resetButton.addEventListener('click',reset)


//ketika option di ganti maka akan mengubah nilai winpoint berdasarkan value dari option
//lalu reset display ketika option di ganti
winPointOption.addEventListener('change', function(){
    winPoint = parseInt(this.value)
    reset()
});