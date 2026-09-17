const form = document.getElementById("marine-debris-form");
const errorMessage = document.getElementById("error-message");
const debrisTypeSelect = document.getElementById('debris-type');
const otherDebrisTypeInput = document.getElementById('other-debris-type');
const sourceSelect = document.getElementById('source');
const otherSourceInput = document.getElementById('other-source');
const phoneInput = document.getElementById('phone');

debrisTypeSelect.addEventListener('change', () => {
  if (debrisTypeSelect.value === 'other') {
    otherDebrisTypeInput.required = true;
  } else {
    otherDebrisTypeInput.required = false;
  }
});

sourceSelect.addEventListener('change', () => {
  if (sourceSelect.value === 'other-source') {
    otherSourceInput.required = true;
  } else {
    otherSourceInput.required = false;
  }
});

phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '').substring(0, 10);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const debrisType = document.getElementById("debris-type").value;
  const source = document.getElementById("source").value;
  const location = document.getElementById("location").value;
  const impacts = document.getElementById("impacts").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const otherDebrisType = document.getElementById("other-debris-type").value;
  const otherSource = document.getElementById("other-source").value;

  let errors = [];

  if (debrisType === 'other' && !otherDebrisType) {
    errors.push("Please specify other debris type.");
  }

  if (source === 'other-source' && !otherSource) {
    errors.push("Please specify other source.");
  }

  if (!debrisType) {
    errors.push("Please select a debris type.");
  }

  if (!source) {
    errors.push("Please select a source.");
  }

  if (!location) {
    errors.push("Please enter a location.");
  }

  if (!impacts) {
    errors.push("Please describe the observed impacts.");
  }

  if (!email) {
    errors.push("Please enter an email address.");
  }

  if (!phone) {
    errors.push("Please enter a phone number.");
  }

  if (errors.length > 0) {
    errorMessage.innerHTML = "";
    errors.forEach((error) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = error;
      errorMessage.appendChild(errorParagraph);
    });
  } else {
    alert("Form submitted successfully!");
  }
});