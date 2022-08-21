var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        
    })

let firstName=document.getElementById('validationCustom01');

document.querySelector('#mysubmit').addEventListener('click', function (e) {
  e.preventDefault();
  var isValid = document.querySelector('#myForm').reportValidity();
  console.log(isValid);
  // Swal.fire('Success');
  if (isValid === true) {
    // alert("Thanks " + firstName.value+" your details are registered !!");
 
    
    Swal.fire(
      'Success',
      'Your details are registered!!',
      'success'
    );
    setTimeout(function(){ window.location.replace('./index.html');},1000)
    // window.location.replace('/CSS Project Phone View/index.html');
  }
  else {

    Swal.fire(
      'Oops!',
      'Incorrect data entered,<br>Kindly cross check the values',
      'failure'
    );
  }
});






