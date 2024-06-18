'use strict';

const number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!'
    } else if(guess === number){
        document.querySelector('.message').textContent = 'CORRECT NUMBER!'
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = '#60b347'

        if(score> highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        
    } else if(guess > number){
        if(score >1){
            document.querySelector('.message').textContent = 'Too high!'
        score --;
        document.querySelector('.label-score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You lost!'
        }
        
    } else if(guess < number){
        if(score >1){
            document.querySelector('.message').textContent = 'Too low!'
        score --;
        document.querySelector('.label-score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You lost!'
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
   document.querySelector('.message').textContent = 'Start guessing...'
   score = 20
   const number = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.label-score').textContent = score
   document.querySelector('.number').textContent = '?'
   document.querySelector('.guess').value = ''
   document.querySelector('body').style.backgroundColor = '#222'
   
})