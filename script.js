function randomPin(){
    const random = Math.random() * (9999 - 1000 + 1) + 1000;
    const randomNumber = parseInt(random);
    document.getElementById("random-number").value = randomNumber;
}

function numberInput(num){
    const primaryInput = document.getElementById("insert").value;
    const secondaryInput = primaryInput + num;
    document.getElementById('insert').value = secondaryInput;
}

function submitResult(){
        const randomNumber = document.getElementById("random-number").value;
        const input = document.getElementById("insert").value;
        if (randomNumber == input) {
            document.getElementById("inform-success").style.display = 'block';
        }
        else{
            document.getElementById("inform-failure").style.display = 'block';
        }

}

function removeAllDigits(){
    document.getElementById('insert').value = '';
}

function removeLastDigit(){
    const inputValue = document.getElementById('insert').value;
    document.getElementById('insert').value = inputValue.slice(0, -1);
}