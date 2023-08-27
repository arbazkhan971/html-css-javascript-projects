const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi_value = document.querySelector('#bmi-value');
const bmi_status = document.querySelector('#bmi-status');
const calculate = document.querySelector('#calculate-bmi');

calculate.addEventListener('click', () => {
   if( height.value === "" || weight.value === "" ) {
        alert('Please enter your height and weight');
        return;
   }else{
        let height_value = height.value;
        let weight_value = weight.value;
        let height_value_meters = height_value / 100;
        let bmi = weight_value / (height_value_meters * height_value_meters);
        bmi = bmi.toFixed(2);
        bmi_value.textContent = bmi;
        if( bmi <= 18.4){
            bmi_status.textContent = 'Underweight';
        }else if( bmi >= 18.5 && bmi <= 24.9 ){
            bmi_status.textContent = 'Normal';
        }else if( bmi >= 25 && bmi <= 39.9 ){
            bmi_status.textContent = 'Overweight';
        }else if( bmi >= 40){
            bmi_status.textContent = 'Obese';
        }
   }
});
