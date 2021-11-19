let userChoiceList = document.getElementById("userChoiceList"); // Доступ к пустому ul - список выбранного
let baseElements = [...document.getElementsByClassName("onlyOneChoiceBase")]; // Получаем список из всех li в Основе
let sousElements = [...document.getElementsByClassName("onlyOneChoiceSous")]; // Получаем список из всех li в Соусах
let ingridientsOneElements = [...document.getElementsByClassName("ingridientsOne")]; // Получаем список из всех li в Ингридиентах 1
let ingridientsTwoElements = [...document.getElementsByClassName("ingridientsTwo")]; // Получаем список из всех li в Ингридиентах 2
let rezultPrice = document.getElementById('cost'); //p с итоговой ценой
rezultPrice.textContent = 0; //стартовая цена равна 0
let button = document.getElementById('button'); //кнопка заказа
button.disabled = true; //изначально кнопка disabled
let image = document.getElementById('pizzaImage'); //Доступ к изображению с пиццей
let counter = 1; //Счетчик изображения с пицей начинается с изображения 1.png
let price = { //Список цен на продукты 
  thinCrust:1,
  puffPastry:2,
  curdDough:3,
  kefirDough:4,

  mushroom:5,
  pepper:6,
  ananas:7,
  tomato:8,

  seafood:9,
  chicken:8,
  cheese:7,
  olive:6,

  tomatoSous:5,
  garlicSous:4,
  cheeseSouse:3,
  creamSous:2
}
let rezult = 0; //Счетчик итоговой цены

//Меняем изображения
function plusCounter () { //увеличиваем счетчик изображения
  counter === 5 ? counter : counter++;
  return image.src = `${counter}.png`;
} 
function minusCounter () { //увеличиваем счетчик изображения
  counter === 1 ? counter : counter--;
  return image.src = `${counter}.png`;
}
function addPrice (data) { //прибавление цены от выбранной переменной
  if (data.classList.contains('thinCrust')) {
    rezult += price.thinCrust;
  }
  if (data.classList.contains('puffPastry')) {
    rezult += price.puffPastry;
  }
  if (data.classList.contains('curdDough')) {
    rezult += price.curdDough;
  }
  if (data.classList.contains('kefirDough')) {
    rezult += price.kefirDough;
  }
  if (data.classList.contains('mushroom')) {
    rezult += price.mushroom;
  }
  if (data.classList.contains('pepper')) {
    rezult += price.pepper;
  }
  if (data.classList.contains('ananas')) {
    rezult += price.ananas;
  }
  if (data.classList.contains('tomato')) {
    rezult += price.tomato;
  }
  if (data.classList.contains('seafood')) {
    rezult += price.seafood;
  }
  if (data.classList.contains('chicken')) {
    rezult += price.chicken;
  }
  if (data.classList.contains('cheese')) {
    rezult += price.cheese;
  }
  if (data.classList.contains('olive')) {
    rezult += price.olive;
  }
  if (data.classList.contains('tomatoSous')) {
    rezult += price.tomatoSous;
  }
  if (data.classList.contains('garlicSous')) {
    rezult += price.garlicSous;
  }
  if (data.classList.contains('cheeseSouse')) {
    rezult += price.cheeseSouse;
  }
  if (data.classList.contains('creamSous')) {
    rezult += price.creamSous;
  }
  rezultPrice.innerHTML = rezult;
  return rezultPrice;
}
function deletePrice (data) { //вычитание цены от выбранной переменной
  if (data.classList.contains('thinCrust')) {
    rezult -= price.thinCrust;
  }
  if (data.classList.contains('puffPastry')) {
    rezult -= price.puffPastry;
  }
  if (data.classList.contains('curdDough')) {
    rezult -= price.curdDough;
  }
  if (data.classList.contains('kefirDough')) {
    rezult -= price.kefirDough;
  }
  if (data.classList.contains('mushroom')) {
    rezult -= price.mushroom;
  }
  if (data.classList.contains('pepper')) {
    rezult -= price.pepper;
  }
  if (data.classList.contains('ananas')) {
    rezult -= price.ananas;
  }
  if (data.classList.contains('tomato')) {
    rezult -= price.tomato;
  }
  if (data.classList.contains('seafood')) {
    rezult -= price.seafood;
  }
  if (data.classList.contains('chicken')) {
    rezult -= price.chicken;
  }
  if (data.classList.contains('cheese')) {
    rezult -= price.cheese;
  }
  if (data.classList.contains('olive')) {
    rezult -= price.olive;
  }
  if (data.classList.contains('tomatoSous')) {
    rezult -= price.tomatoSous;
  }
  if (data.classList.contains('garlicSous')) {
    rezult -= price.garlicSous;
  }
  if (data.classList.contains('cheeseSouse')) {
    rezult -= price.cheeseSouse;
  }
  if (data.classList.contains('creamSous')) {
    rezult -= price.creamSous;
  }
  rezultPrice.innerHTML = rezult;
  return rezultPrice;
}
function btn() { //Кнопка подтверждения заказа
  if (counter === 5) {
    button.addEventListener("click", function () {
      let obj = {};
      console.log(`Цена заказа: ${rezult}$`)
      console.log("Вы выбрали:");
      for (let i = 0; i < userChoiceList.childElementCount; i++) {
        obj[i] = userChoiceList.children[i].innerText;
      }
        alert('Вы успешно заказали пиццу. Ознакомьтесь с ним в консоле ⇒');
        return console.log(obj);
    });
    button.disabled = false
    return button;
  }
  button.disabled = true
  return button;
}

baseElements.forEach((li) => { // Для каждого li в основе
  li.addEventListener("click", function () { //Вызываем фукцию при клике
    const isActive = baseElements.some((li) => {
      return li.classList.contains("selected"); //Проверка на содержание класса
    });
    if (!isActive) { // Если у нас false в списке с основами
      li.classList.add("selected"); // добавляем класс
      addPrice (li); //назначаем цену от li
      addElementInChosen(); // Вызываем функцию добавления выбранного элемента в список выбранных
      function addElementInChosen() { //Функция добавления выбранного элемента в список выбранных
        let elem = document.createElement("li"); //создаем элемент li в ul
        userChoiceList.append(elem); //добавляем его
        elem.textContent = li.textContent; //текст нового элемента совпадает выбранным
        elem.onclick = killMyself; //при клике уничтожить элемент
        plusCounter(); //Увеличиваем счетчик
        btn (); //сверка с положением кнопки
      }
      function killMyself() { //уничтожаем элемент из выбранного
        this.remove();
        li.classList.remove("selected"); //у выбранного элемента исчезает класс
        deletePrice(li); //вычитаем цену
        minusCounter(); //уменьшаем счетчик изображения
        btn();
      }
    } else {
      console.log("Выбрать возможно только одну основу");
    }
  });
});

sousElements.forEach((li) => { // Для каждого li в соусах
  li.addEventListener("click", function () { 
    const isActive = sousElements.some((li) => { 
      return li.classList.contains("selected");
    });
    if (!isActive) {
      li.classList.add("selected");
      addElementInChosen();
      addPrice (li);
      function addElementInChosen() {
        let elem = document.createElement("li");
        userChoiceList.append(elem);
        elem.textContent = li.textContent;
        elem.onclick = killMyself;
        plusCounter();
        btn ();
      }
      function killMyself() {
        this.remove();
        li.classList.remove("selected");
        deletePrice(li);
        minusCounter();
        btn ();
      }
    } else {
      console.log("Выбрать возможно только один соус");
    }
  });
});

let numbersOfCallings = 0; //счетчик для ингридиентов 1
function callingsPlus () {
  if (numbersOfCallings === 0) {
    plusCounter();
    image.src = `${counter}.png`;
    return numbersOfCallings++;
  } else if (numbersOfCallings === 1){
    return numbersOfCallings ++;
  }
}
function callingsMinus () {
  if (numbersOfCallings === 2) {
    return numbersOfCallings--;
  } else if (numbersOfCallings === 1) {
    minusCounter();
    image.src = `${counter}.png`;
    return numbersOfCallings--;
  } else if (numbersOfCallings === 0){
    return numbersOfCallings;
  }
}
let arrSelectedIngridiensOne = [];
ingridientsOneElements.forEach((li) => { // Для каждого li в ингридиентах 1
  li.addEventListener('click', function() {
    if (arrSelectedIngridiensOne.length < 2 && !li.classList.contains('selected')) {
      li.classList.add('selected');
      arrSelectedIngridiensOne.push(li);
      addElementInChosen();
      addPrice (li);
      function addElementInChosen() {
        let elem = document.createElement("li");
        userChoiceList.append(elem);
        elem.textContent = li.textContent;
        elem.onclick = killMyself;
        callingsPlus ();
        btn ();
      }
      function killMyself() {
        this.remove();
        li.classList.remove("selected");
        arrSelectedIngridiensOne.pop();
        deletePrice (li);
        callingsMinus ();
        btn ();
      }
    } else {
      console.log('Можно выбрать только два разных ингридиента 1');
    }
  })
});

let numbersOfCallingsTwo = 0; //счетчик для ингридиентов 2
function callingsPlusTwo () {
  if (numbersOfCallingsTwo === 0) {
    plusCounter();
    image.src = `${counter}.png`;
    return numbersOfCallingsTwo++;
  } else if (numbersOfCallingsTwo === 1){
    return numbersOfCallingsTwo ++;
  }
}
function callingsMinusTwo () {
  if (numbersOfCallingsTwo === 2) {
    return numbersOfCallingsTwo--;
  } else if (numbersOfCallingsTwo === 1) {
    minusCounter();
    image.src = `${counter}.png`;
    return numbersOfCallingsTwo--;
  } else if (numbersOfCallingsTwo === 0){
    return numbersOfCallingsTwo;
  }
}
let arrSelectedIngridiensTwo = [];
ingridientsTwoElements.forEach((li) => { // Для каждого li в ингридиентах 2
  li.addEventListener('click', function() { //При клике на элемент
    if (arrSelectedIngridiensTwo.length < 2 && !li.classList.contains('selected')) {
      li.classList.add('selected'); //Добавляем класс
      arrSelectedIngridiensTwo.push(li); // этот элемент вносим в счетчик
      addElementInChosen(); // Вызываем функцию добавления выбранного элемента в список выбранных
      addPrice (li);
      btn ();
      function addElementInChosen() {
        let elem = document.createElement("li"); //создаем элемент li в ul
        userChoiceList.append(elem); //добавляем его
        elem.textContent = li.textContent; //текст нового элемента совпадает выбранным
        elem.onclick = killMyself; //при клике уничтожить элемент
        callingsPlusTwo ();
      }
      function killMyself() {
        this.remove(); //уничтожаем элементр
        li.classList.remove("selected"); //у выбранного элемента исчезает класс
        arrSelectedIngridiensTwo.pop();
        deletePrice (li);
        callingsMinusTwo ();
      }
    } else {
      console.log('Можно выбрать только два разных ингридиента2');
    }
  })
});
