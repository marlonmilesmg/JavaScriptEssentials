function Calculator(){
    var answer = document.querySelector('#answer');
    var num1 = Number(document.querySelector('#num1').value);
    var num2 = Number(document.querySelector('#num2').value);
    var select = document.querySelector('select');
    var operator = select.options[select.selectedIndex].value;

    if(operator == 'add'){
        theCalculatedAnswer = num1 + num2;
    }else if(operator == 'minus'){
        theCalculatedAnswer = num1 - num2;
    }else if(operator == 'multiply'){
        theCalculatedAnswer = num1 * num2;
    } else if (operator == 'divide'){
        theCalculatedAnswer = num1 / num2;
    } else {
        alert('Please select an operator');
    }

    answer.innerHTML = theCalculatedAnswer;
    console.log(num1, num2);

}


modal = document.querySelector('.modal');
modalTitle = document.querySelector('.modal-title');
modalContent = document.querySelector('.modal-content');

function openModal() {
    // modalTitle.innerHTML = modal_title;
    // modalContent.innerHTML = modal_content;

    if(modal.style.display == 'block'){
        // Hide Modal
        closeModal();
    } else {
        modal.style.display = 'block';
    }
    
}

function closeModal() {
    modal.style.display = 'none';

    modalTitle.innerHTML = '';
    modalContent.innerHTML = '';
}