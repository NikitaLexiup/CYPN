document.querySelector('.btnConvert').addEventListener('click', convert);

function convert() {

    let inputNumber = document.querySelector('.input_text').value;
    let convertNumber = inputNumber.replace(/[-\(\)\_\.\,\ ]/g, '');
    document.querySelector('.out').innerHTML = convertNumber;  
    
    
    document.querySelector('.btnCopy').addEventListener('click', copyResult);

    function copyResult() {
        navigator.clipboard.writeText(convertNumber);
    }
}

