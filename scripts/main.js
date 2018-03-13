const taskContainer = document.querySelector("#listeTaches")
const addTaskButton = document.querySelector("#ajouterTache")
const defaultTask = "Tâche"

//let tab = [10,20,23,413,342]
//localStorage.setItem("tableau",JSON.stringify(tab))

//console.log(JSON.parse(localStorage.getItem("tableau")))

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

  //equivalent de initButton.innerHTML = 'Reset'
  let initButtonContent = document.createTextNode('Reset')
  initButton.appendChild(initButtonContent)

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

  // On met à jour le localSTorage
  recTaskList()
}

function recTaskList(){
  // Récupérer toutes les balises qui ont la class "tacheContenu"

  let taskListcontent = document.querySelectorAll('.tacheContenu')

  //On parcourt tout ces éléments et on enregistre leur contenu dans un tableau
  let tempTab =[]
   for (let i = 0; i < taskListcontent.length; i++) {
     tempTab.push(taskListcontent[i].innerHTML)
   }

  //On convertit notre tableau dans une chaîne de caractère JSON
  tempTab = JSON.stringify(tempTab)

  // On enregistre notre tableau en localStorage
  localStorage.setItem('localTaskList', tempTab)
}
