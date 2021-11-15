## Шаг 1 - Устанавливаем nodeJS

`$ node -v`

## Шаг -2 Инициализируем npm проект(создаёт файл package.json)

`$ npm init -y`

## Шаг 3 - устанавливаем TypeScript

`$ npm i -D typescript`

## Шаг 4 - проинициализировать tsconfig.json (настройка компиляции typescript)

`$ npx tsc --init`

## Шаг 5 - создать задачу(скрипт) в package.json для запуска typescript в watch режиме

```json
"scripts": {
    "tsc": "tsc --watch"
  }
  ```
  ## Шаг 6 - запуск компиляции

  `$ npm run tsc`