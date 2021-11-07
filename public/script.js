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
taskList.forEach(/*callback функция*/function(task){/*на каждой итерации цикла forEach вызывается функция task*/
    const taskHtml =`
    <li class="task-card">
        <div class="task-name">${task}</div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
   </li>`
   taskListHtml += taskHtml/*складываем строки*/
})

console.log(taskListHtml);
tasksElem.innerHTML = taskListHtml
