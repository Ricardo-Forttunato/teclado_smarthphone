const listaDeTeclas = document.querySelectorAll('.tecla_numericas');
console.log(listaDeTeclas)
let numbers = [];

for (let i = 0; i < listaDeTeclas.length; i++){
    listaDeTeclas[i].addEventListener('click', function() {
        numbers.push(listaDeTeclas[i].value);
        let numeros = '';
        for (j = 0; j < numbers.length; j++){
                numeros = numeros + numbers[j];
        }
        document.querySelector('input[type=tel').setAttribute('value', numeros);
        console.log(listaDeTeclas[i].value);
      });
  }
