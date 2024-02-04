𝗧𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗮𝘀𝗽𝗲𝗰𝘁𝘀 :

𝗖𝗿𝗲𝗮𝘁𝗲 : It includes a form where users can input tasks. On submission, new to-do objects are created and added to the array of todos.

𝗥𝗲𝗮𝗱 : There is DisplayTodos() function that retrieves the list of todos from Local Storage and displays them dynamically on the page. It reads and displays the existing tasks.

𝗨𝗽𝗱𝗮𝘁𝗲 : By clicking on Edit icon, the content of the todo-task can be modified within the textarea. Upon saving (blur event), the updated content is stored back into the corresponding todo object in the array and Local Storage.

𝗗𝗲𝗹𝗲𝘁𝗲 : Clicking the delete icon, removes the corresponding todo item from the array of todos and updates the display accordingly. It uses splice() method to remove the selected item by its index.

Things that one will learn while making this project:

:not()

:where()

-getComputedStyles()

-namedItem()

-item()

-splice()

-.elements --> returns HTMLFormControlsCollection

-ScrollHeight()

-how to manipulate CSS variables through JavaScript

-creating custom radio butto

-creating auto growing text field

-Local Storage - getItem(), setItem(), JSON.stringify(), JSON.parse()

# Preview : 

![todo](https://github.com/Bilal-Ishtiyaque/To-Do-web-application/assets/139645574/8f9a6e82-cca0-4ed5-b740-a0e0e2993076)
