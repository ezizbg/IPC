// Получаем все элементы с классом card-title и card-subtitle
const titles = document.querySelectorAll(".card-title");
const subtitles = document.querySelectorAll(".card-subtitle");

// Функция для изменения текста
function changeText(index) {
  titles[index].textContent = "Управление ТОиР";
  subtitles[index].textContent =
    "Что происходит в области управления производственными активами? Насколько успешно идет импортозамещение? Какие результаты дает внедрение современных ТОиР-решений? ";
}

// Функция для восстановления исходного текста
function resetText(index) {
  titles[index].textContent = "«Аксиома» - это 3 в 1";
  subtitles[index].textContent =
    "Одним из ключевых направлений бизнеса компании «Интерпроком» уже более 15 лет является цифровизация управления активами предприятий, их техническим обслуживанием и ремонтом.";
}

// Добавляем обработчики событий для каждой карточки
titles.forEach((title, index) => {
  title.addEventListener("mouseover", () => changeText(index));
  title.addEventListener("mouseout", () => resetText(index));
});

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}
