function genrate_pin() {
   const random = Math.round(Math.random()*10000)
   random_str = random + '';
   if(random_str.length == 4 ) {
      const input = document.getElementById('generate-input');
      input.value = random;
   }
   else {
      return genrate_pin();
   }
}

document.getElementById('generate-pin').addEventListener('click', function () {
   genrate_pin()
})

document.getElementById('calculator').addEventListener('click', function (event) {
   const number = event.target.innerText;
   const typed_input =  document.getElementById('typed-input');
   const typed_str = typed_input.value;

   if(isNaN(number)) {
      if(number == '<'){
         const a = typed_str;
         const arr = a.split('');
         arr.pop();
         typed_input.value = arr.join('');
      }
      else if(number == 'C') {
         typed_input.value = '';
      }
   }   
   else {
      const total_input = typed_str + number;
      typed_input.value = total_input;
   }

})

document.getElementById('submit-btn').addEventListener('click', function() {
   const generated_input = document.getElementById('generate-input').value;
   const typed_input = document.getElementById('typed-input').value;

   const not_matched = document.getElementById('not-matched');
   const matched = document.getElementById('matched');

   if(generated_input == typed_input) {
      matched.style.display = 'block';
      not_matched.style.display = 'none';
   }
   else {
      not_matched.style.display = 'block';
      matched.style.display = 'none';
   }
})