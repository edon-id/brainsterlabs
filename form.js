// DROPDOWN LIST 

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// ===========================================================================================



// FORM VALIDATION ===========================================================================

const form = document.getElementById('form');
const username = document.getElementById('username');
const company = document.getElementById('company');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


// show error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form_control error_message col-md-6 mt-1 d-flex flex-column';
  const small = formControl.querySelector('small');
  small.innerText = message
}

// show success

function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form_control valid_message col-md-6 mt-1 d-flex flex-column';
}

// Event listeners

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(username.value === '') {
    showError (username, 'Внесете го вашето име и презиме');
  } else {
    showSuccess (username);
  }

  if(company.value === '') {
    showError (company, 'Внесете го името на вашата компанија');
  } else {
    showSuccess (company);
  }

  if(email.value === '') {
    showError (email, 'Внесете ја вашата имејл адреса');
  } else {
    showSuccess (email);
  }

  if(phone.value === '') {
    showError (phone, 'Внесете го вашиот контакт телефон');
  } else {
    showSuccess (phone);
  }
});

// ================================================================================================
