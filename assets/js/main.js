const revealPasswordButton = document.querySelector("#reveal-password");
const inputPassword = document.querySelector("#password");

const onChangeRevealPassword = () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    revealPasswordButton.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    inputPassword.type = "password";
    revealPasswordButton.classList.replace("bi-eye", "bi-eye-slash");
  }
};

revealPasswordButton.onclick = onChangeRevealPassword;
