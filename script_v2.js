let currentStep = 1;
const progress = document.getElementById("progress");

function nextStep(step) {
  if (!validateStep(step)) return;

  document.getElementById("step" + step).classList.remove("active");
  document.getElementById("step" + (step + 1)).classList.add("active");
  currentStep++;
  updateProgress();
}

function prevStep(step) {
  document.getElementById("step" + step).classList.remove("active");
  document.getElementById("step" + (step - 1)).classList.add("active");
  currentStep--;
  updateProgress();
}

function updateProgress() {
  progress.style.width = (currentStep * 33) + "%";
}

function validateStep(step) {
  let valid = true;

  if (step === 1) {
    const name = document.getElementById("name");
    const age = document.getElementById("age");

    if (name.value.length < 3) {
      setError(name, "El nombre debe tener al menos 3 caracteres.");
      valid = false;
    } else setSuccess(name);

    if (age.value < 10 || age.value > 100) {
      setError(age, "Ingresa una edad válida entre 10 y 100.");
      valid = false;
    } else setSuccess(age);
  }

  if (step === 2) {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    if (weight.value < 30 || weight.value > 300) {
      setError(weight, "Ingresa un peso válido en kg.");
      valid = false;
    } else setSuccess(weight);

    if (height.value < 100 || height.value > 250) {
      setError(height, "Ingresa una altura válida en cm.");
      valid = false;
    } else setSuccess(height);
  }

  if (step === 3) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {
      setError(email, "Ingresa un correo electrónico válido.");
      valid = false;
    } else setSuccess(email);

    if (password.value.length < 6) {
      setError(password, "La contraseña debe tener mínimo 6 caracteres.");
      valid = false;
    } else setSuccess(password);
  }

  return valid;
}

function setError(input, message) {
  const field = input.parentElement;
  const small = field.querySelector("small");
  small.innerText = message;
  input.style.borderColor = "red";
}

function setSuccess(input) {
  const field = input.parentElement;
  const small = field.querySelector("small");
  small.innerText = "";
  input.style.borderColor = "#00aaff";
}

document.getElementById("step3").addEventListener("submit", function(e){
  e.preventDefault();
  if (validateStep(3)) {
    alert("Registro exitoso 🎉 Bienvenido a FitTrack");
  }
});
