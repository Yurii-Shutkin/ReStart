document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("cityError").textContent = "";

  document.getElementById("name").classList.remove("input-error");
  document.getElementById("phone").classList.remove("input-error");
  document.getElementById("city").classList.remove("input-error");

  let isValid = true;

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const citySelect = document.getElementById("city");

  if (nameInput.value.trim() === "" || nameInput.value.length < 2) {
    document.getElementById("nameError").textContent =
      "Имя не может быть пустым и должно содержать не менее 2 символов.";
    nameInput.classList.add("input-error");
    isValid = false;
  }

  const phonePattern = /^\+?[0-9]{10,15}$/;
  if (!phonePattern.test(phoneInput.value)) {
    document.getElementById("phoneError").textContent =
      "Некорректный формат номера телефона.";
    phoneInput.classList.add("input-error");
    isValid = false;
  }

  if (citySelect.value === "") {
    document.getElementById("cityError").textContent =
      "Пожалуйста, выберите город из списка.";
    citySelect.classList.add("input-error");
    isValid = false;
  }

  const REQUESTBIN_URL = "https://a038db3388774a076d9eg1paq1hyyyyyb.oast.pro/";

  if (isValid) {
    console.log("Валидация успешна. Отправляем данные через Fetch API...");
    const formData = new FormData(this);

    fetch(REQUESTBIN_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сервера: " + response.statusText);
        }
        if (window.openModal) {
          window.openModal();
        }
        this.reset();
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке:", error);
      });
  } else {
    console.log("Валидация не пройдена.");
  }
});
