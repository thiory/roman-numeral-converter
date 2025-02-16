const input = document.querySelector("#number");
const output = document.querySelector("#output");
const convert = document.querySelector("#convert-btn");


convert.onclick = function() {
  main(input);
  output.style.display = "inline-block"; // Affiche l'élément lorsque le message doit être affiché
};

function main(input) {

const inputValue = parseInt(input.value, 10);


if (output === null || input.value === "") {
    output.innerText = "Please enter a valid number";
  }
else if (inputValue <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } 
else if (inputValue >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  }
else{
  IntToRoman(inputValue);
}
}

function IntToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';

  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  output.innerText = result;
}
