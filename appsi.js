const languageSelect = document.getElementById("language-select");
const output = document.getElementById("output");

languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;
    switch (selectedLanguage) {
        case "en":
            output.textContent = "You selected English.";
            break;
        case "ko":
            output.textContent = "당신은 한국어를 선택했습니다.";
            break;
        case "es":
            output.textContent = "Has seleccionado Español.";
            break;
        case "fr":
            output.textContent = "Vous avez sélectionné l'anglais.";
            break;
        default:
            output.textContent = "";
            break;
    }
});
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

const boxes = document.querySelectorAll(".text-box");

boxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
        const initialText = box.querySelector(".initial-text");
        const explanationText = box.querySelector(".explanation-text");

        initialText.style.display = "none";
        explanationText.style.display = "block";
    });

    box.addEventListener("mouseout", function () {
        const initialText = box.querySelector(".initial-text");
        const explanationText = box.querySelector(".explanation-text");

        initialText.style.display = "block";
        explanationText.style.display = "none";
    });
});










