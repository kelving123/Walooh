function testOne(event) {
  event.preventDefault();
  console.log("it's working");

  const emailInput = document.getElementById("Firstemail");
  const passwordInput = document.getElementById("Firstpassword");
  console.log(emailInput.value);
  console.log(passwordInput.value);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", testOne);

  console.log("test");
});
