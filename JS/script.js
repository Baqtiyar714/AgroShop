// --- Тексты для мультиязычности ---
const texts = {
  kk: {
    filters: 'Фильтрлер',
    clear: 'Тазалау',
    show: 'Көру',
    categories: 'Категориялар',
    catHouseplant: 'Үй өсімдіктері',
    catSeed: 'Тұқымдар',
    catFlower: 'Гүлдер',
    catGreen: 'Жасыл',
    catTree: 'Жеміс ағаштары',
    catBush: 'Жеміс бұталары',
    catYardtree: 'Аула ағаштары',
    availability: 'Қолжетімділік',
    availInStock: 'Қоймада бар',
    availPreOrder: 'Алдын ала тапсырыс',
    addToCart: "Себетке қосу",
    removeFromCart: "Жою",
    cart: "Себет",
    checkout: "Тапсырыс беру",
    emptyCart: "Себет бос!",
    orderPlaced: "Тапсырыс қабылданды!",
    products: {
      orchid: { name: "Орхидея" },
      geranium: { name: "Герань (Пеларгония)" },
      spathiphyllum: { name: "Спатифиллум (Әйел бақыты)" },
      anthurium: { name: "Антуриум" },
      zamioculcas: { name: "Замиокулькас (Ақша ағашы)" },
      sansevieria: { name: "Сансевиерия (Тещин язык)" },
      chlorophytum: { name: "Хлорофитум" },
      violet: { name: "Фиалка (Шегіргүл)" },
      monstera: { name: "Монстера" },
      ficus: { name: "Фикус" },
      dracaena: { name: "Драцена" },
      fern: { name: "Папоротник" },
      pilea: { name: "Пилея" },
      calathea: { name: "Калатея" },
      aglaonema: { name: "Аглаонема" },
      aloe: { name: "Алоэ вера" },
      cactus: { name: "Кактус" },
      croton: { name: "Кротон" },
      cucumber: { name: "Қияр тұқымы" },
      tomato: { name: "Қызанақ тұқымы" },
      chili: { name: "Ащы бұрыш (Чили)" },
      basil: { name: "Болжырай (Базилик)" },
      parsley: { name: "Ақжелкен" },
      dill: { name: "Аскөк" },
      greenonion: { name: "Жасыл пияз" },
      radish: { name: "Шалғам (Редис)" },
      lettuce: { name: "Салат жапырағы (Латук)" },
      spinach: { name: "Шпинат" },
      carrot: { name: "Сәбіз тұқымы" },
      garlic: { name: "Сарымсақ тұқымы" },
      corn: { name: "Жүгері тұқымы" },
      bellpepper: { name: "Қызыл бұрыш тұқымы" },
      watermelon: { name: "Қарбыз тұқымы" },
      melon: { name: "Қауын тұқымы" },
      grapes: { name: "Жүзім тұқымы" },
      apple_winter: { name: "Алма (қысқы сорт)" },
      apple_summer: { name: "Алма (жазғы сорт)" },
      apple_autumn: { name: "Алма (күзгі сорт)" },
      pear: { name: "Алмұрт" },
      apricot: { name: "Өрік (абрикос)" },
      peach: { name: "Шабдалы (персик)" },
      plum: { name: "Алхоры" },
      cherry: { name: "Шие (вишня)" },
      sweetcherry: { name: "Қызыл шие (черешня)" },
      pear_berry: { name: "Алмұрт (Ноябрь, Дюшес)" },
      currant_black: { name: "Қара қарақат" },
      currant_red: { name: "Қызыл қарақат" },
      currant_white: { name: "Ақ қарақат" },
      raspberry: { name: "Таңқурай" },
      strawberry: { name: "Құлпынай" },
      blackberry: { name: "Қара бүлдірген" },
      blackberry_large: { name: "Үлкен қара бүлдірген" },
      cherry_plum: { name: "Алыча (Қытай алхоры)" },
      spruce: { name: "Шырша" },
      juniper: { name: "Арша (можжевельник)" },
      pine: { name: "Қарағай (сосна)" },
      poplar: { name: "Терек (тополь)" },
      birch: { name: "Ақ қайың (береза)" },
      maple: { name: "Ағаш (клен)" },
      linden: { name: "Жөке (липа)" },
      rowan: { name: "Шетен (рябина)" },
      jida: { name: "Жида (декоративті)" },
      catalpa: { name: "Катальпа (ірі жапырақты)" },
      maple_architectural: { name: "Архитектуралық үйеңкі (қызыл, алтын)" },
      rowan_architectural: { name: "Архитектуралық шетен (ақ гүлді, қызыл жемісті)" },
      spruce_blue: { name: "Көк шырша (сәндік)" },
      oak_red: { name: "Қызыл емен (күзде қызыл жапырақ)" },
      elm_sumbil: { name: "Сүмбіл қарағаш (қарағаш)" },
      robinia: { name: "Робиния (ақ акация)" },
      elm: { name: "Қарағаш (қарағаш)" },
      ash: { name: "Кузнец (ясень)" },
      pseudo_sakura: { name: "Жалған сакура (персик немесе өрік гүлдеуі үшін)" }
    }
  },
  ru: {
    filters: 'Фильтры',
    clear: 'Очистить',
    show: 'Показать',
    categories: 'Категории',
    catHouseplant: 'Комнатные растения',
    catSeed: 'Семена',
    catFlower: 'Цветы',
    catGreen: 'Зелень',
    catTree: 'Плодовые деревья',
    catBush: 'Плодовые кустарники',
    catYardtree: 'Деревья для двора',
    availability: 'Доступность',
    availInStock: 'В наличии',
    availPreOrder: 'Предзаказ',
    addToCart: "В корзину",
    removeFromCart: "Удалить",
    cart: "Корзина",
    checkout: "Оформить заказ",
    emptyCart: "Корзина пуста!",
    orderPlaced: "Заказ оформлен!",
    products: {
      orchid: { name: "Орхидея" },
      geranium: { name: "Герань (Пеларгония)" },
      spathiphyllum: { name: "Спатифиллум (Женское счастье)" },
      anthurium: { name: "Антуриум" },
      zamioculcas: { name: "Замиокулькас (Долларовое дерево)" },
      sansevieria: { name: "Сансевиерия (Тещин язык)" },
      chlorophytum: { name: "Хлорофитум" },
      violet: { name: "Фиалка" },
      monstera: { name: "Монстера" },
      ficus: { name: "Фикус" },
      dracaena: { name: "Драцена" },
      fern: { name: "Папоротник" },
      pilea: { name: "Пилея" },
      calathea: { name: "Калатея" },
      aglaonema: { name: "Аглаонема" },
      aloe: { name: "Алоэ вера" },
      cactus: { name: "Кактус" },
      croton: { name: "Кротон" },
      cucumber: { name: "Семена огурца" },
      tomato: { name: "Семена помидора" },
      chili: { name: "Острый перец (Чили)" },
      basil: { name: "Базилик" },
      parsley: { name: "Петрушка" },
      dill: { name: "Укроп" },
      greenonion: { name: "Зеленый лук" },
      radish: { name: "Редис" },
      lettuce: { name: "Лист салата (Латук)" },
      spinach: { name: "Шпинат" },
      carrot: { name: "Семена моркови" },
      garlic: { name: "Семена чеснока" },
      corn: { name: "Семена кукурузы" },
      bellpepper: { name: "Семена болгарского перца" },
      watermelon: { name: "Семена арбуза" },
      melon: { name: "Семена дыни" },
      grapes: { name: "Семена винограда" },
      apple_winter: { name: "Яблоки (зимние сорта)" },
      apple_summer: { name: "Яблоки (летние сорта)" },
      apple_autumn: { name: "Яблоки (осенние сорта)" },
      pear: { name: "Груша" },
      apricot: { name: "Абрикос" },
      peach: { name: "Персик" },
      plum: { name: "Слива" },
      cherry: { name: "Вишня" },
      sweetcherry: { name: "Черешня" },
      pear_berry: { name: "Груша (Ноябрьская, Дюшес)" },
      currant_black: { name: "Смородина черная" },
      currant_red: { name: "Смородина красная" },
      currant_white: { name: "Смородина белая" },
      raspberry: { name: "Малина" },
      strawberry: { name: "Клубника" },
      blackberry: { name: "Ежевика" },
      blackberry_large: { name: "Ежевика крупноплодная" },
      cherry_plum: { name: "Алыча (китайская слива)" },
      spruce: { name: "Ель (шырша)" },
      juniper: { name: "Можжевельник" },
      pine: { name: "Сосна" },
      poplar: { name: "Тополь" },
      birch: { name: "Береза белая" },
      maple: { name: "Клен" },
      linden: { name: "Липа" },
      rowan: { name: "Рябина" },
      jida: { name: "Жида (декоративная)" },
      catalpa: { name: "Катальпа (крупнолистная)" },
      maple_architectural: { name: "Архитектурный клен (красный, золотистый)" },
      rowan_architectural: { name: "Архитектурная рябина (белоцветковая, красноплодная)" },
      spruce_blue: { name: "Голубая ель (декоративная)" },
      oak_red: { name: "Красный дуб (красный лист осенью)" },
      elm_sumbil: { name: "Сумбильский вяз (вяз)" },
      robinia: { name: "Робиния (Белая акация)" },
      elm: { name: "Вяз (карагач)" },
      ash: { name: "Кузнец (ясень)" },
      pseudo_sakura: { name: "Псевдосакура (для цветения персика или абрикоса)" }
    }
  },
  en: {
    filters: 'Filters',
    clear: 'Clear',
    show: 'Show',
    categories: 'Categories',
    catHouseplant: 'Houseplants',
    catSeed: 'Seeds',
    catFlower: 'Flowers',
    catGreen: 'Greens',
    catTree: 'Fruit trees',
    catBush: 'Fruit bushes',
    catYardtree: 'Yard trees',
    availability: 'Availability',
    availInStock: 'In stock',
    availPreOrder: 'Pre-order',
    addToCart: "Add to Cart",
    removeFromCart: "Remove",
    cart: "Cart",
    checkout: "Checkout",
    emptyCart: "Cart is empty!",
    orderPlaced: "Order placed!",
    products: {
      orchid: { name: "Orchid" },
      geranium: { name: "Geranium (Pelargonium)" },
      spathiphyllum: { name: "Spathiphyllum (Peace Lily)" },
      anthurium: { name: "Anthurium" },
      zamioculcas: { name: "Zamioculcas (ZZ Plant)" },
      sansevieria: { name: "Sansevieria (Snake Plant)" },
      chlorophytum: { name: "Chlorophytum" },
      violet: { name: "Violet" },
      monstera: { name: "Monstera" },
      ficus: { name: "Ficus" },
      dracaena: { name: "Dracaena" },
      fern: { name: "Fern" },
      pilea: { name: "Pilea" },
      calathea: { name: "Calathea" },
      aglaonema: { name: "Aglaonema" },
      aloe: { name: "Aloe Vera" },
      cactus: { name: "Cactus" },
      croton: { name: "Croton" },
      cucumber: { name: "Cucumber Seeds" },
      tomato: { name: "Tomato Seeds" },
      chili: { name: "Chili Pepper" },
      basil: { name: "Basil" },
      parsley: { name: "Parsley" },
      dill: { name: "Dill" },
      greenonion: { name: "Green Onion" },
      radish: { name: "Radish" },
      lettuce: { name: "Lettuce Leaf" },
      spinach: { name: "Spinach" },
      carrot: { name: "Carrot Seeds" },
      garlic: { name: "Garlic Seeds" },
      corn: { name: "Corn Seeds" },
      bellpepper: { name: "Bell Pepper Seeds" },
      watermelon: { name: "Watermelon Seeds" },
      melon: { name: "Melon Seeds" },
      grapes: { name: "Grape Seeds" },
      apple_winter: { name: "Apples (winter variety)" },
      apple_summer: { name: "Apples (summer variety)" },
      apple_autumn: { name: "Apples (autumn variety)" },
      pear: { name: "Pear" },
      apricot: { name: "Apricot" },
      peach: { name: "Peach" },
      plum: { name: "Plum" },
      cherry: { name: "Cherry" },
      sweetcherry: { name: "Sweet Cherry" },
      pear_berry: { name: "Berry Pear (November, Duchess)" },
      currant_black: { name: "Black Currant" },
      currant_red: { name: "Red Currant" },
      currant_white: { name: "White Currant" },
      raspberry: { name: "Raspberry" },
      strawberry: { name: "Strawberry" },
      blackberry: { name: "Blackberry" },
      blackberry_large: { name: "Blackberry (large-fruited)" },
      cherry_plum: { name: "Cherry Plum (Chinese plum)" },
      spruce: { name: "Spruce" },
      juniper: { name: "Juniper" },
      pine: { name: "Pine" },
      poplar: { name: "Poplar" },
      birch: { name: "White Birch" },
      maple: { name: "Maple" },
      linden: { name: "Linden" },
      rowan: { name: "Rowan" },
      jida: { name: "Jida (decorative)" },
      catalpa: { name: "Catalpa (large-leaved)" },
      maple_architectural: { name: "Architectural Maple (red, golden)" },
      rowan_architectural: { name: "Architectural Rowan (white-flowered, red-fruited)" },
      spruce_blue: { name: "Blue Spruce (decorative)" },
      oak_red: { name: "Red Oak (red leaf in autumn)" },
      elm_sumbil: { name: "Sumbul Elm (Elm)" },
      robinia: { name: "Robinia (White Acacia)" },
      elm: { name: "Elm (Elm)" },
      ash: { name: "Smith (ash)" },
      pseudo_sakura: { name: "False Sakura (for peach or apricot flowers)" }
    }
  }
};

let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
  const lang = document.getElementById("languageSwitcher").value;
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} ₸</div>
      </div>
      <div class="cart-item-quantity">
        <button onclick="updateQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
      <button onclick="removeFromCart(${item.id})" class="remove-button">${texts[lang].removeFromCart}</button>
    </div>
  `).join("");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total;
  saveCart();
}

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
  saveCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart();
      saveCart();
    }
  }
}

function addCartButtonsToProducts() {
  const lang = document.getElementById("languageSwitcher").value;
  document.querySelectorAll('.product').forEach((product, idx) => {
    const oldButton = product.querySelector('.add-to-cart-button');
    if (oldButton) oldButton.remove();
    const addButton = document.createElement('button');
    addButton.className = 'add-to-cart-button';
    addButton.textContent = texts[lang].addToCart;
    addButton.onclick = () => {
      const productData = {
        id: idx + 1, // уникальный id для каждой карточки
        name: product.querySelector('.product-title').textContent,
        price: parseInt(product.querySelector('.product-price').textContent),
        image: product.querySelector('img').src
      };
      addToCart(productData);
    };
    const productContent = product.querySelector('.product-content');
    if (productContent) {
      productContent.appendChild(addButton);
    }
  });
}

function updateProductTitles() {
  const lang = document.getElementById("languageSwitcher").value;
  document.querySelectorAll('.product').forEach(product => {
    const productKey = product.dataset.product;
    if (texts[lang] && texts[lang].products && texts[lang].products[productKey]) {
      const title = texts[lang].products[productKey].name;
      const titleElem = product.querySelector('.product-title');
      if (titleElem) titleElem.textContent = title;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("languageSwitcher");
  const cartButton = document.getElementById("cartButton");
  const cartModal = document.getElementById("cartModal");
  const closeButton = document.querySelector(".close-button");
  const checkoutButton = document.getElementById("checkoutButton");

  updateProductTitles();
  addCartButtonsToProducts();
  updateCart();

  languageSwitcher.addEventListener("change", function () {
    updateProductTitles();
    addCartButtonsToProducts();
    updateCart();
  });

  cartButton.addEventListener("click", () => {
    cartModal.style.display = "block";
  });
  closeButton.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
  checkoutButton.addEventListener("click", () => {
    const lang = languageSwitcher.value;
    if (cart.length === 0) {
      alert(texts[lang].emptyCart);
      return;
    }
    alert(texts[lang].orderPlaced);
    cart = [];
    updateCart();
    cartModal.style.display = "none";
  });

  // --- ИЗБРАННОЕ ---
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  function updateFavoritesCount() {
    const count = favorites.length;
    const el = document.getElementById('favoritesCount');
    if (el) el.textContent = count;
  }

  function toggleFavorite(productId) {
    const idx = favorites.indexOf(productId);
    if (idx === -1) {
      favorites.push(productId);
    } else {
      favorites.splice(idx, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    updateFavoriteIcons();
  }

  function updateFavoriteIcons() {
    document.querySelectorAll('.product').forEach(product => {
      const favBtn = product.querySelector('.favorite-toggle');
      if (!favBtn) return;
      const pid = product.dataset.product;
      if (favorites.includes(pid)) {
        favBtn.classList.add('active');
        favBtn.setAttribute('title', 'Убрать из избранного');
      } else {
        favBtn.classList.remove('active');
        favBtn.setAttribute('title', 'В избранное');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Добавляем иконки избранного на карточки товаров (рядом с кнопкой 'Себетке қосу')
    document.querySelectorAll('.product').forEach(product => {
      let favBtn = product.querySelector('.favorite-toggle');
      if (!favBtn) {
        favBtn = document.createElement('button');
        favBtn.className = 'favorite-toggle';
        favBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#111" stroke-width="2" fill="none"/></svg>`;
        favBtn.type = 'button';
        favBtn.style.background = 'none';
        favBtn.style.border = 'none';
        favBtn.style.cursor = 'pointer';
        favBtn.style.zIndex = '2';
        favBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          toggleFavorite(product.dataset.product);
        });
        // Находим кнопку 'Себетке қосу' и вставляем иконку справа от нее
        const addBtn = product.querySelector('.add-to-cart-button');
        if (addBtn) {
          addBtn.parentNode.insertBefore(favBtn, addBtn.nextSibling);
          favBtn.style.position = 'static';
          favBtn.style.marginLeft = '10px';
          favBtn.style.top = '';
          favBtn.style.right = '';
        } else {
          // fallback: добавляем в правый верхний угол
          favBtn.style.position = 'absolute';
          favBtn.style.top = '10px';
          favBtn.style.right = '10px';
          product.style.position = 'relative';
          product.appendChild(favBtn);
        }
      }
    });
    updateFavoriteIcons();
    updateFavoritesCount();
  });
});

// Для глобального доступа из HTML (корзина)
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity; 