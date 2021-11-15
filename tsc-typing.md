```ts
//Создание переменной
let a: number
a = 1
const str: string = 'Hello'

//Преобразование типов
//nextElementSibling имеет тип по умолчанию Element | null
const statusElem = checkbox.nextElementSibling as HTMLDivElement

// или так
const statusElem = <HTMLDivElement>checkbox.nextElementSibling
```