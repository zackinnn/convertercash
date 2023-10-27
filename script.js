const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit )

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverter = 0;

function handleSubmit(e) {
     e.preventDefault();
     
     if(!inputValue.value || inputValue.value < 0){
          alert('Informe um valor correto');
          return;
     }
     else if(!selectedCurrency.value){
         alert('Selecione um tipo de moeda!');
         return;
     }
     converter();
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverter = inputValue.value /  5.36;
        result.innerHTML = valueFormater('pt-BR', 'EUR');
        animateResult();

    } else if(selectedCurrency.value ==='dol'){
        valueConverter = inputValue.value / 5.06
        result.innerHTML = valueFormater('en-US', 'USD');
        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value ='';
};
function valueFormater(locale, currency){
    const value = valueConverter.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`})
    return `${value}`;
};

function animateResult(){
    return result.animate([{translate: 'trasnlateY(-150px)'},
                           {translate: 'translateY(0)'},
                           ], {duration: 500 });
}
