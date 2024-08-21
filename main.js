const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 0;

// Eventos
btnTry.addEventListener("click", handleTryClick); //addEventListener está ouvindo ou seja a função está ouvindo o click
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleClickEnter);

// funções callback
function handleTryClick(event) {
  event.preventDefault(); // não faça o padrão desse evento, ou seja ele não submet o evento de enviar o formulário

  const inputNumber = document.querySelector("#inputNumber");
  console.log("Número digitado pelo usuário:", inputNumber.value);

  if (Number(inputNumber.value) == randomNumber) {
    // inputNumber é a identificação do input no HTML e value é o valor digitado dentro do input

    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerHTML = `Acertou em ${xAttempts} tentativas!`;
  }

  inputNumber.value = ""; // Limpa o input após tentativas
  xAttempts++;
  console.log(xAttempts);
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 0;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide"); // hide vai se minha base para ativar um e remover o outro
}

function handleClickEnter() {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
