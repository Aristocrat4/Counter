const val = document.getElementById('value');
let counter = 0;
/* -------------- my version of code ------------
const btnDec = document.querySelector('.decrease');
const btnRes = document.querySelector('.reset');
const btnInc = document.querySelector('.increase');
btnInc.addEventListener('click', function(){
    counter+=1;
    val.textContent = counter;
    checkColor();
})
btnDec.addEventListener('click', function(){
    counter-=1;
    val.textContent = counter;
    checkColor();
})
btnRes.addEventListener('click', function(){
    counter = 0;
    val.textContent = counter;
    checkColor();
})
function checkColor(){
    if (counter>0){
        val.style.color = 'green';
    } else if (counter<0) {
        val.style.color = 'red';
    } else if(counter == 0) {
        val.style.color = 'black';
    }
}
------------------  end of my version of  code -------- */

// ----------- better version of code -----------
const btn = document.querySelectorAll('.btn');

btn.forEach(function(btns){
    btns.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('increase')){
            counter++;
        } else if (styles.contains('decrease')){
            counter--;
        }else {
            counter = 0;
        }
        if(counter>0){
            val.style.color = 'green'
        } else if ( counter < 0){
            val.style.color = 'red';
        }else {
            val.style.color = 'black';
        }
        val.textContent = counter;
    })
})
