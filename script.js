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
      error.innerHTML = "Заповніть це поле.";
      formContainer.appendChild(error);
    } else {
      orderForm.style.display = "none";
      showOrderTable();
      orderForm.reset();
    }
  });
  formContainer.appendChild(orderForm);
}

function handleFormSubmit(orderForm, event) {
  event.preventDefault();
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
    orderContainer.innerHTML = "";
  });
  orderContainer.innerHTML = "";
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

  const cities = [
    { value: "Київ", text: "Київ" },
    { value: "Львів", text: "Львів" },
    { value: "Черкаси", text: "Черкаси" },
    { value: "Івано-Франківськ", text: "Івано-Франківськ" },
    { value: "Одеса", text: "Одеса" },
  ];

  cities.forEach((city) => {
    const option = createOption(city.value, city.text);
    citySelect.appendChild(option);
  });

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

  const payments = [
    { value: "Післяплата", text: "Післяплата" },
    { value: "Оплата банківською карткою", text: "Оплата банківською карткою" },
  ];
  payments.forEach((payment) => {
    const option = createOption(payment.value, payment.text);
    paymentSelect.appendChild(option);
  });

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

function createOption(value, text) {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = text;
  return option;
}
