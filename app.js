const $ = id => document.getElementById(id);

const input = $('text-input');
const checkBtn = $('check-btn');
const resultEl = $('result');

function isPalindrome(str){
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // check if the cleaned str is a palindrome.
    for (let i  = 0; i < Math.floor(cleanedStr.length / 2); i++){
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]){
            return false;
        }
    }

    return true;
}

// Check palindrome function.

function checkPalindrome(){
    const inputText = input.value.trim();

    if (inputText === ''){
        resultEl.textContent = 'Please enter some text'
        resultEl.style.color = 'red';
        return;
    }

    if (isPalindrome(inputText)){
        resultEl.textContent = `${inputText} is a palindrome`;
        resultEl.style.color = 'green';
    }else{
        resultEl.textContent = `${inputText} is not a palindrome.`;
        resultEl.style.color = '#333'
    }

    input.value = '';
}


checkBtn.addEventListener('click', checkPalindrome);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        checkPalindrome();
    }

})