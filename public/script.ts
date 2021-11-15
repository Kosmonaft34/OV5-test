// @ts-check

/**
 * Jquery analog
 * @param {string} selector Slector
 * @returns {Element} Element
 */

// function $(selector:String){
//    return document.querySelector(selector)
// }
let taskList = ['Task 1:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum quidem animi minus molestiae possimus. Ad, obcaecati animi minima atque magni quaerat esse tenetur! Impedit odit illo veritatis optio. Illum?',
' Task 2:Beatae illo repellat earum ab facilis obcaecati consequatur at blanditiis dignissimos magnam nostrum aliquam ducimus dolores corporis autem, debitis, quis, voluptates aliquid porro! Quia vero recusandae rem praesentium fugit neque.',
'Task 3:Eius provident cum voluptas vero iusto, quo quaerat odio, delectus corporis cupiditate nobis odit. Veritatis laborum nisi illum ullam quibusdam facilis facere, quisquam vitae. Hic quaerat suscipit eaque officiis consequuntur.',
'Task 4:Recusandae neque expedita sit eum deleniti praesentium, non delectus consequatur magni vero, ullam optio alias repudiandae! Inventore, aliquid quisquam quam modi earum dolorem laboriosam sequi assumenda recusandae libero voluptas hic.'
]

let tasksElem = document.querySelector('.tasks')

// for (const task of taskList) {
//     console.log(task);
    
// }

let taskListHtml = ''
taskList.forEach(/*callback функция*/function(task, index) {/*на каждой итерации цикла forEach вызывается функция task*/
    const taskHtml =`
    <li class="task-card" name="task-card-${index}">
   <div class = "task-card__info">
      <div class = "task-card__input-block">
            <input class ="check-input" type="checkbox" data-index = "${index}">
            <div class = "task-card__status">In work</div>
      </div>            
      <div class="task-name" data-index="${index}">${task}</div>
   </div>
   <div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
   </div>
        </li>`
   taskListHtml += taskHtml/*складываем строки*/
})

// tasksElem.onclick = function(event) {/*функция при клике на tasksElem(любой элемент всё выводится в консоль) */
//    console.log(event.target);
// }

// tasksElem.addEventListener('click', function(event){ /*обработчик при клике на tasksElem(любой элемент всё выводится в консоль) тоже самое что и сверху,только если addEventListener будет несколько,то и в консоль будет выводиться несколко значений,а в  onclick нет только 1 раз*/
//   const checkInputElem = event.target.closest('.check-input[type=checkbox]')
//    if(checkInputElem){/*метод closest смотрит на ближашего родителя с указанным селектором проверяем что мы кликнули именно по чекбоксу*/
//          toggleTextDecor(checkInputElem)/*вызывается функция  отвечающая перечеркнуть текст или убрать перечёркивание */
//       return
//    }
//    if(window.matchMedia("(max-width: 400px)").matches)/*проверяем размер экрана*/
//       {/*то же самое что и верхняя функция только для телефонов*/
//       const taskNameElem = event.target.closest('.task-name')
//          if (taskNameElem){
//             toggleCheckbox(taskNameElem)/*тогда запускаем эту функциюкоторая находит чекбокс,то она перчеркивает текст и вкл и выкл чекбокс */
//          }
         
//       }
   
// }/*, {once: true}*/) /*чтобы обработчик сработал только 1 раз в онклике так не сделать */

function toggleTextDecor(checkbox){
   if(checkbox.checked){
      checkbox.nextElementSibling.textContent = 'Done'
      checkbox.parentElement.nextElementSibling.style.textDecoration = 'line-through'
   }else{
      checkbox.nextElementSibling.textContent = 'In work'
      checkbox.parentElement.nextElementSibling.style.textDecoration = null
   }
}

function toggleCheckbox(textElem){
   const checkbox = textElem.previousElementSibling.firstElementChild
   if (textElem.style.textDecoration){
      textElem.style.textDecoration = null
      checkbox.checked = false
      checkbox.nextElementSibling.textContent = 'In work'

   }  else{
      textElem.style.textDecoration = 'line-through'
      checkbox.checked = true
      checkbox.nextElementSibling.textContent = 'Done'
   }
}

tasksElem.innerHTML = taskListHtml
