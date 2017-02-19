"use strict"

var form = document.querySelector("form")
var task = document.querySelector(".task")
var label = document.querySelector("label")
var check = document.querySelector(".check")
var trash = document.querySelector(".trash")
var box = document.querySelector(".box")
var input = document.querySelector(".userInput")
var button = document.querySelector("button")

var todoList = {}
console.log(todoList)



function App(){

  button.addEventListener("click", function (event){
    var newItem  = input.value
    console.log("button clicked")
    app.add(newItem)
  })
}

App.prototype.open = function() {
  console.log("open lefutott")
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://mysterious-dusk-8248.herokuapp.com/todos", true)
  xhr.send()
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log(response)
        app.list(response)

    }
  }
}

App.prototype.list = function(response) {
  for (var t = 0; t <response.length; t++) {
    var newTask = document.createElement("div")
    newTask.className = "task"
    form.appendChild(newTask)
    var newLabel = document.createElement("label")
    newLabel.textContent = response[t].text
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
  }
  var boxes = document.querySelectorAll(".box")
  console.log(boxes)
  for (var b = 0; b < boxes.length; b++){
      boxes[b].addEventListener("click", function(){
        if (this.className === "box") {
          this.className = "box checked"
        } else if (this.className === "box checked") {
          this.className = "box"
        }})
  }
    // idokozonkent ujrahivni
  console.log("list lefut")
}



//trash.addEventListener("click", function (event){
//  app.delete()
//})



App.prototype.add = function(newItem) {
  console.log("add", newItem)
  todoList.text = newItem
  console.log(todoList)
  var xhr = new XMLHttpRequest()
  xhr.open("POST", "https://mysterious-dusk-8248.herokuapp.com/todos", true)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(JSON.stringify(todoList))
  app.open()
  console.log("add add add ????")
}

//App.prototype.delete = function() {}





var trashes = document.querySelectorAll(".trash")






var app = new App()
app.open()




//addTask()
