const btnShop = document.querySelectorAll(".btnShop");
const formContainer = document.querySelector("#formContainer");

const nameInput = document.createElement("input");
const citySelect = document.createElement("select");
const newPostInput = document.createElement("input");
const paymentSelect = document.createElement("select");
const quantityInput = document.createElement("input");
const commentInput = document.createElement("textarea");

btnShop.forEach((btn) => {
  btn.addEventListener("click", createForm);
});

function createForm() {
  const orderForm = document.createElement("form");
  orderForm.setAttribute("id", "orderForm");

  createTitle(orderForm);
  createNameLabel(orderForm);
  createCityLabel(orderForm);
  createNewPostLabel(orderForm);
  createPaymentLabel(orderForm);
  createQuantityLabel(orderForm);
  createCommentLabel(orderForm);

  const btnConfirm = document.createElement("input");
  btnConfirm.setAttribute("type", "submit");
  btnConfirm.setAttribute("value", "Підтвердити замовлення");
  btnConfirm.setAttribute("id", "btnConfirm");
  orderForm.appendChild(btnConfirm);

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      nameInput.value.trim() === "" ||
      citySelect.value === "" ||
      newPostInput.value.trim() === "" ||
      paymentSelect.value.trim() === "" ||
      quantityInput.value.trim() === ""
    ) {
      const error = document.createElement("div");
      error.innerHTML = "Заповніть всі поля, будь ласка.";
      formContainer.appendChild(error);
    } else {
      orderForm.style.display = "none";
      showOrderTable();
      orderForm.reset();
    }
  });
  formContainer.appendChild(orderForm);
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (
    nameInput.value.trim() === "" ||
    citySelect.value === "" ||
    newPostInput.value.trim() === "" ||
    paymentSelect.value.trim() === "" ||
    quantityInput.value.trim() === ""
  ) {
    const error = document.createElement("div");
    error.innerHTML = "Заповніть ці поля.";
    formContainer.appendChild(error);
  } else {
    orderForm.style.display = "none";
    orderForm.reset();
    showOrderTable();
  }
}

function showOrderTable() {
  const orderContainer = document.getElementById("orderContainer");
  const product = document.getElementsByClassName("product")[0].textContent;
  const price = document.getElementsByClassName("price")[0].textContent;
  const orderTable = document.createElement("div");
  orderTable.setAttribute("id", "orderTable");
  orderTable.innerHTML = `<h2 class="titleTable">Ваше замовлення:</h2>
        <p class="cell">Товар: ${product}</p>
        <p class="cell">Ціна: ${price}</p>
        <p class="cell">ПІБ покупця: ${nameInput.value}</p>
        <p class="cell">Місто: ${citySelect.value}</p>
        <p class="cell">Номер складу Нової пошти: ${newPostInput.value}</p>
        <p class="cell">Спосіб оплати: ${paymentSelect.value}</p>
        <p class="cell">Кількість: ${quantityInput.value}</p>
        <p class="cell">Коментар: ${commentInput.value}</p>
    `;

  const btnConfirmOk = document.createElement("input");
  btnConfirmOk.setAttribute("type", "submit");
  btnConfirmOk.setAttribute("value", "Підтверджую");
  btnConfirmOk.setAttribute("id", "btnConfirmOk");
  orderTable.appendChild(btnConfirmOk);

  btnConfirmOk.addEventListener("click", () => {
    orderTable.style.display = "none";
    orderContainer.appendChild(orderTable);
  });
  orderContainer.appendChild(orderTable);
}

function createTitle(orderForm) {
  const title = document.createElement("h2");
  title.innerHTML = "Форма оформлення замовлення";
  title.setAttribute("id", "title");
  orderForm.appendChild(title);
}

function createNameLabel(orderForm) {
  const nameLabel = document.createElement("label");
  nameLabel.className = "nameLabel";
  nameLabel.innerHTML = "ПІБ покупця";
  orderForm.appendChild(nameLabel);

  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "nameInput");
  nameInput.required = true;
  orderForm.appendChild(nameInput);
}

function createCityLabel(orderForm) {
  const cityLabel = document.createElement("label");
  cityLabel.innerHTML = "Місто";
  orderForm.appendChild(cityLabel);

  citySelect.setAttribute("id", "citySelect");
  citySelect.setAttribute("name", "city");
  citySelect.required = true;

  const city1 = document.createElement("option");
  city1.setAttribute("value", "Київ");
  city1.innerHTML = "Київ";
  citySelect.appendChild(city1);
  orderForm.appendChild(citySelect);

  const city2 = document.createElement("option");
  city2.setAttribute("value", "Львів");
  city2.innerHTML = "Львів";
  citySelect.appendChild(city2);
  orderForm.appendChild(citySelect);

  const city3 = document.createElement("option");
  city3.setAttribute("value", "Черкаси");
  city3.innerHTML = "Черкаси";
  citySelect.appendChild(city3);
  orderForm.appendChild(citySelect);

  const city4 = document.createElement("option");
  city4.setAttribute("value", "Івано-Франківськ");
  city4.innerHTML = "Івано-Франківськ";
  citySelect.appendChild(city4);
  orderForm.appendChild(citySelect);

  const city5 = document.createElement("option");
  city5.setAttribute("value", "Одеса");
  city5.innerHTML = "Одеса";
  citySelect.appendChild(city5);
  orderForm.appendChild(citySelect);
}

function createNewPostLabel(orderForm) {
  const newPostLabel = document.createElement("label");
  newPostLabel.innerHTML = "Номер складу Нової пошти для надсилання";
  orderForm.appendChild(newPostLabel);

  newPostInput.setAttribute("type", "number");
  newPostInput.setAttribute("name", "newPost");
  newPostInput.setAttribute("id", "newPostInput");
  newPostInput.required = true;
  orderForm.appendChild(newPostInput);
}

function createPaymentLabel(orderForm) {
  const paymentLabel = document.createElement("label");
  paymentLabel.innerHTML = "Спосіб оплати";
  orderForm.appendChild(paymentLabel);

  paymentSelect.setAttribute("id", "paymentSelect");
  paymentSelect.setAttribute("name", "payment");
  paymentSelect.required = true;

  const payment1 = document.createElement("option");
  payment1.setAttribute("value", "Післяплата");
  payment1.innerHTML = "Післяплата";
  paymentSelect.appendChild(payment1);
  orderForm.appendChild(paymentSelect);

  const payment2 = document.createElement("option");
  payment2.setAttribute("value", "Оплата банківською карткою");
  payment2.innerHTML = "Оплата банківською карткою";
  paymentSelect.appendChild(payment2);
  orderForm.appendChild(paymentSelect);
}

function createQuantityLabel(orderForm) {
  const quantityLabel = document.createElement("label");
  quantityLabel.innerHTML = "Кількість продукції, що купується";
  orderForm.appendChild(quantityLabel);

  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("name", "quantity");
  quantityInput.setAttribute("id", "quantityInput");
  quantityInput.required = true;
  orderForm.appendChild(quantityInput);
}

function createCommentLabel(orderForm) {
  const commentLabel = document.createElement("label");
  commentLabel.innerHTML = "Коментар до замовлення";
  orderForm.appendChild(commentLabel);

  commentInput.setAttribute("name", "comment");
  commentInput.style.resize = "none";
  commentInput.setAttribute("id", "commentInput");
  orderForm.appendChild(commentInput);
}
