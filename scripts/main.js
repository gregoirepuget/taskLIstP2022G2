const taskContainer = document.querySelector("#listeTaches")
const addTaskButton = document.querySelector("#ajouterTache")
const defaultTask = "Tâche"

addTaskButton.addEventListener('click', function(e){
  e.preventDefault()
  addTask(defaultTask)
})
function addTask(taskText){
  /***
      Contenu à créer :
      <div class="tache">
        <div class="tacheContenu" contenteditable="true">Tâche</div>
        <a class="tacheInit" href="#" title="Reset">Reset</a>
        <a class="tacheSupprimer" href="#" title="Delete">Delete</a>
        <div class="clearBoth"></div>
     </div>
  **/
  let taskDiv = document.createElement('div')
  taskDiv.classList.add('tache')

  let taskContent = document.createElement('div')
  taskContent.classList.add('tacheContenu')
  taskContent.setAttribute('contenteditable','true')
  taskContent.innerHTML = taskText

  let initButton = document.createElement('a')
  initButton.classList.add('tacheInit')
  initButton.setAttribute('href','#')
  initButton.setAttribute('title','reset')
  initButton.innerHTML = 'Reset'

  let deleteButton = document.createElement('a')
  deleteButton.classList.add('tacheSupprimer')
  deleteButton.setAttribute('href','#')
  deleteButton.setAttribute('title','delete')
  deleteButton.innerHTML = 'Delete'

  let clear = document.createElement('div')
  clear.classList.add('clearBoth')

  taskContainer.appendChild(taskDiv)
  taskDiv.appendChild(taskContent)
  taskDiv.appendChild(initButton)
  taskDiv.appendChild(deleteButton)
  taskDiv.appendChild(clear)
}
