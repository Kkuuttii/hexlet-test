import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно! Тест 1 провален.');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно! Тест 2 провален.');
}

console.log('Все тесты пройдены!');