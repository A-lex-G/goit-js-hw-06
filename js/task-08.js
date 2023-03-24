const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("All form iputs should be filled");
  } else {
    const email = formElements.email.value;
    const password = formElements.password.value;
    const dataObject = {
      email,
      password,
    };
    console.log(`Email: ${email}. Password: ${password}.`);
    console.log(dataObject);
  }
  event.currentTarget.reset();
}
