let button = document.querySelector('button');
let inputBox = document.getElementById('tempInput');
let conversionType = document.getElementById('convertOption');
let resultElement = document.getElementById('result');
let errorMessage = document.querySelector('.error-message');

let result;

button.addEventListener('click',()=>{
    
    let temp = inputBox.value;

    if(temp == ''){
        errorMessage.style.display = 'block'
        

    }else if(conversionType.value == 'CtoF'){
        result = (parseFloat(temp) * 9/5) + 32;
        resultElement.textContent = `${temp} °C is equal to ${result.toFixed(2)} °F`;
        errorMessage.style.display = 'none'  

    } else if( conversionType.value == 'FtoC'){

        result = (parseFloat(temp) - 32) * 5/9;
        resultElement.textContent = `${temp} °F is equal to ${result.toFixed(2)} °C`;
        errorMessage.style.display = 'none'  
    }
    
    inputBox.value = '';
   
})




