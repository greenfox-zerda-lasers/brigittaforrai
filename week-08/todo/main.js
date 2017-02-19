"use strict"

var container = document.querySelector("container")
var task = document.querySelector(".task")
var label = document.querySelector("label")
var check = document.querySelector(".check")
var trash = document.querySelector(".trash")
var box = document.querySelector(".box")
var input = document.querySelector(".userInput")
var button = document.querySelector("button")
var tasks =  document.querySelectorAll(".task")
var form = document.querySelector("form")
var actualTasks = []

button.addEventListener("click", function (event){
  var input = document.querySelector(".userInput")
  add(input.value)
  input.value = ""
})

/*
input.addEventListener("keypress", function (event){
  console.log(event)
  var input = document.querySelector(".userInput")
  add(input.value)
  input.value = ""
})*/


function open() {
  console.log("open lefutott")
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://mysterious-dusk-8248.herokuapp.com/todos", true)
  xhr.send()
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log(response)
        renderer(response)
    }
  }
}

function renderer (response) {  //ujragyurni az egeszet
  setFormHeight()
  actualTasks = []
  createElements(response)
  setFormHeight()
  checkboxRender(response)

  var trashes = document.querySelectorAll(".trash")
  trashes.forEach(function(elem, index){
    elem.addEventListener("click", function(event){
      console.log(index, "trash click")
      console.log(trashes)
      remove(index, response)

    })
  })
}


function checkboxRender(response){
  var boxes = document.querySelectorAll(".box")
  for (var b = 0; b < response.length; b++){
    if (response[b].completed === true) {
      boxes[b].className = "box checked"
    } else {
      boxes[b].className = "box"
    }
  }
  var todoList = {}

  boxes.forEach(function(elem, index){
    elem.addEventListener("click", function(event){
      if (this.className === "box"){
        this.className = "box checked"
        todoList.text = response[index].text
        todoList.id = response[index].id
        todoList.completed = true
        var id = response[index].id
        checkBoxUpdate(todoList, id, response)
        console.log(todoList, "list")
      } else if (this.className === "box checked"){
        this.className = "box"
        todoList.text = response[index].text
        todoList.id = response[index].id
        todoList.completed = false
        var id = response[index].id
        checkBoxUpdate(todoList, id, response)
        console.log(todoList, "list")
      }
    })
  })
}


function checkBoxUpdate(todoList, id, response){
  console.log("check update")
  console.log(typeof(todoList.completed))
  var xhr = new XMLHttpRequest()
  xhr.open("PUT", "https://mysterious-dusk-8248.herokuapp.com/todos/" + id, true)
  // xhr.send(JSON.stringify(todoList)) // mas text completed
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(todoList)) // mas text completed
  console.log(todoList, "after send")
  console.log(response)

  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = JSON.parse(xhr.response)
      console.log(response, "update")
      open()
    }
  }
}


function createElements(response, index){
  update()
  for (var t = 0; t <response.length; t++) {
    var index = t
    var newTask = document.createElement("div")

    newTask.className = "task"
    container.appendChild(newTask)
    var newLabel = document.createElement("label")
    newLabel.textContent = response[index].text
    newTask.appendChild(newLabel)
    var newCheck = document.createElement("div")
    newCheck.className= "check"
    newTask.appendChild(newCheck)
    var newTrash = document.createElement("div")
    newTrash.className= "trash"
    newCheck.appendChild(newTrash)
    var newBox = document.createElement("div")
    newBox.className= "box"
    newCheck.appendChild(newBox)
    if (response[index].text === "") {
      newTask.style.height = "0px"
      newTask.style.overflow = "hidden"
      newTask.style.paddingTop = "0px"
    } else {
      actualTasks.push(response[index].text)
    }
  }
}

function setFormHeight (){
  var formBaseHeight = 340
  var taskHeight = 60
  var height = taskHeight * actualTasks.length + formBaseHeight
  form.style.height = String(height + "px")
}

function remove(index, response) {
  console.log(index, "remove func")
  var id = response[index].id
  console.log(id, index)
  var xhr = new XMLHttpRequest()
  xhr.open("DELETE", "https://mysterious-dusk-8248.herokuapp.com/todos/"+id, true)
  xhr.send()
  xhr.onreadystatechange = function (rsp){
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      open()
    }
  }
}
/*
function ajax(action, dataToSend) {
  var xhr = new XMLHttpRequest()
  xhr.open(action, "https://mysterious-dusk-8248.herokuapp.com/todos/"+id, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(dataToSend)
  xhr.onreadystatechange = ready
  ///meg nagyon nem jo
}*/

function add (newItem) {
  var todoList = {}
  todoList.text = newItem;
  actualTasks.push(newItem)
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://mysterious-dusk-8248.herokuapp.com/todos')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(todoList))
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
      update()
    }
  }
}

function update () {
  var container = document.querySelector("container")
  var tasks = document.querySelectorAll(".task")
  for (var t = 0; t < tasks.length; t++){
    container.removeChild(tasks[t])
  }
}

open()
setInterval(function(){
  open()
},5000)
