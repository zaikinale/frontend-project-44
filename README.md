# Brain Games

**Brain Games** — это набор из пяти консольных игр, построенных на арифметике и логике. Каждая игра задает вопросы, на которые нужно дать верные ответы. После трех верных ответов игра считается завершенной. Неверный ответ завершает игру и предлагает пройти ее заново.

## Установка

1. Склонируйте репозиторий:
```bash
    git clone https://github.com/zaikinale/frontend-project-44.git2. Перейдите в директорию проекта:
    cd frontend-project-443. Установите зависимости:
    make install
```
## Игры

### Brain-Games
[![asciicast](https://asciinema.org/a/ZME7Fh9rFiDCMKEBFcBDO0Q7u.svg)](https://asciinema.org/a/ZME7Fh9rFiDCMKEBFcBDO0Q7u)
Общая игра, которая приветствует пользователя и объясняет правила.
### Запуск игры
```bash
    make brain-games
```

### Brain-Even
[![asciicast](https://asciinema.org/a/CzlU4Yaku67yHxV4HSFZb3XfI.svg)](https://asciinema.org/a/CzlU4Yaku67yHxV4HSFZb3XfI)
Пользователю показывается случайное число. Нужно ответить "yes", если число четное, и "no", если нечетное.
### Запуск игры
```bash
    make brain-even
```

### Brain-Calc
[![asciicast](https://asciinema.org/a/55tEnbGEMBex2ejRDjaYM0o6z.svg)](https://asciinema.org/a/55tEnbGEMBex2ejRDjaYM0o6z)
Пользователю показывается случайное математическое выражение, например, "15 + 30". Нужно вычислить правильный ответ.
### Запуск игры
```bash
    make brain-calc
```

### Brain-Gcd
[![asciicast](https://asciinema.org/a/QYRU8YmwytC1DFZRyOfFDcmAN.svg)](https://asciinema.org/a/QYRU8YmwytC1DFZRyOfFDcmAN)
Пользователю показывается два случайных числа. Нужно вычислить наибольший общий делитель (НОД) этих чисел.
### Запуск игры
```bash
    make brain-gcd
```
### Brain-Prime
[![asciicast](https://asciinema.org/a/3AFNgOI9fVrhlQBlzdHi6PjaJ.svg)](https://asciinema.org/a/3AFNgOI9fVrhlQBlzdHi6PjaJ)
Пользователю показывается случайное число. Нужно ответить "yes", если число простое, и "no", если нет.
### Запуск игры
```bash
    make brain-prime
```
### Brain-Progression
[![asciicast](https://asciinema.org/a/oy5C1gAiBcB8QtModK3Yv6kde.svg)](https://asciinema.org/a/oy5C1gAiBcB8QtModK3Yv6kde)
Пользователю показывается последовательность чисел, в которой пропущено одно число. Нужно определить пропущенное число.
### Запуск игры
```bash
    make brain-progression
```
## Запуск Линтера и тесты

### Пройти Линтер
```bash
    make lint
```
### Пройти тесты
```bash
    make test
```
### Hexlet tests and linter status:
[![Actions Status](https://github.com/zaikinale/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zaikinale/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/618d247eb5fa60e42b62/maintainability)](https://codeclimate.com/github/zaikinale/frontend-project-44/maintainability)

## Публикация
Для публикации пакета выполните:
```bash
    make publish
```
## Автор
Алексей Заикин
GitHub: zaikinale


`