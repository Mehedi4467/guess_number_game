// computer number genetor
const randomNumber = () => {
    let randomNumber = Math.round(Math.random() * 10);
    return randomNumber;
}

// get show field text convert number function

const getNumber = (inputId, isInput) =>{
    const fieldText = document.getElementById(inputId);
    if(isInput){
        const fieldNumber = parseInt(fieldText.value);
        if(isNaN(fieldNumber) || fieldNumber < 0 || fieldNumber > 10){
            fieldText.value = '';
            return false;
        }
        else{
            fieldText.value = '';
            return fieldNumber;
        }
    }
    else{
        const fieldNumber = parseInt(fieldText.innerText);
        if(isNaN(fieldNumber) || fieldNumber < 0){
            return false;
        }
        else{
            return fieldNumber;
        }
      
    }

}

// game Judge

const gameJudge = (you, computer) =>{
    
    const win = document.getElementById('win');
    const computerShow = document.getElementById('computer-show');
    const youShow = document.getElementById('you-show');
    let computerScore = getNumber('computer-score');
    let yourScore = getNumber('your-score');
    let countNumber = getNumber('countShow', false);
    
  
    if(you == computer ){

        win.innerText = 'Congratulation Your Win';
        yourScore ++;
        document.getElementById('your-score').innerText = yourScore;

    }
    else {
       
        win.innerText = 'Sorry!! Computer Win';
        computerScore ++;
        document.getElementById('computer-score').innerText = computerScore;
    }


   
    if(countNumber == 0 && computerScore > yourScore){
        document.getElementById('win-status').innerText = 'You lost, the computer won';
        document.getElementById('play-button').disabled = true;
        document.getElementById('reset-button').disabled = false;
    }
    else if(countNumber == 0 && yourScore > computerScore){
       
            document.getElementById('win-status').innerText = 'Congratulation !! You Won Computer Lost';
            document.getElementById('play-button').disabled = true;
            document.getElementById('reset-button').disabled = false;

    }
    else if(countNumber == 0  && computerScore == yourScore ){

            document.getElementById('win-status').innerText = 'Mach is Draw!!';
            document.getElementById('play-button').disabled = true;
            document.getElementById('reset-button').disabled = false;

    }
    
    console.log(computerScore,yourScore,countNumber );
    computerShow.innerText = computer;
    youShow.innerText = you;
}

// play button 
document.getElementById('play-button').addEventListener('click', ()=>{
    let countNumber = getNumber('countShow', false);
    const yourNumber = getNumber('your-input', true);
    const computerNumber = randomNumber();
    const errorMassage = document.getElementById('error-massage');

    if(yourNumber != false){
        countNumber --;
        document.getElementById('countShow').innerText = countNumber;
        gameJudge(yourNumber, computerNumber);
        errorMassage.innerText = '';  
    }
    else{
        errorMassage.innerText = 'Please Inter number zero or greater then zero less then 11';
    }
    
});


// how many time you play 

document.getElementById('count-button').addEventListener('click', () => {
    
    const countNumber = getNumber('count-input', true);
    const errorMassage = document.getElementById('error-massage');

   if(countNumber != false){
        document.getElementById('countShow').innerText = countNumber;
       document.getElementById('displayBlock').style.display = 'none';
       document.getElementById('play-button').disabled = false;
    // gameJudge(yourNumber, computerNumber);
    errorMassage.innerText = '';
}
else{
    errorMassage.innerText = 'Please Inter number zero or greater then zero';
}

});

// play again button

document.getElementById('reset-button').addEventListener('click', () =>{
    location.reload();
});
