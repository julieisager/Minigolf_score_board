

export default class ScoreBoard{


    constructor() {

        const minusButtons = document.querySelectorAll('.minus');
        const plusButtons = document.querySelectorAll('.plus');
        const counters = document.querySelectorAll('.counter');


        for (let i = 0; i < minusButtons.length; i++) {
            minusButtons[i].addEventListener('click', () => {
                counters[i].value = parseInt(counters[i].value) - 1;
                updateTotal();
            });

            plusButtons[i].addEventListener('click', () => {
                counters[i].value = parseInt(counters[i].value) + 1;
                updateTotal();
            });
        }


        function updateTotal() {
            let sum = 0;
            for (let i = 0; i < counters.length; i++) {
                sum += parseInt(counters[i].value);
            }
            total.value = sum;
        }


        const resetButton = document.querySelector('.reset');
        resetButton.addEventListener('click', () => {
            const counters = document.querySelectorAll('.counter');
            for (let i = 0; i < counters.length; i++) {
                counters[i].value = '0';
            }
            updateTotal();
        });


    }


}

// ingen klasser :(