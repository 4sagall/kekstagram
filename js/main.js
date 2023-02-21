'use strict';
/* Функция возвращает случайное целое число в заданном интервале */
const getRandomIntInclusive = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

getRandomIntInclusive(1,10);

/* Функция для проверки максимальной длины строки */
const stringLength = (text, count) => text.length <= count ? true : false;

stringLength('длина комментария не может составлять больше 140 символов', 140);
