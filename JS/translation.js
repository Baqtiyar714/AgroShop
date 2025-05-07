const texsts = {
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
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const switcher = document.getElementById('languageSwitcher');
  if (switcher) {
    setLanguage(switcher.value);
    switcher.addEventListener('change', function() {
      setLanguage(this.value);
    });
  }
}); 