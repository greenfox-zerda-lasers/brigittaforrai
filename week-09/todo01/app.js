"use strict"

var todos = require("./todos")
var express = require("express")
var app = express()





//list all data

app.get("/", function(request, response) {
  response.send(JSON.stringify(todos))
})

app.get("/todos", function(request, response) {
  response.send(JSON.stringify(todos))
})

//Get a single todo item.
app.get("/todos/:id", function(request, response) {
  response.send(todos[request.params.id-1])
})

//Create a new todo item. Use the body of the POST request. The request must have the Content-Type header set to application/json.
//The body of the request should be a JSON document:

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post("/todos", function(request, response) {
  console.log(request.body)
  todos.push({"id": todos.length+1, "text": request.body.text, "completed": false})
  response.send()
})

//update todo item NEMJOOOOO

app.put("/todos/:id", function(request, response) {
  console.log(request.body)
  todos.forEach(function(elem){
    if (todos[elem].id === request.params.id) {
      todos[elem].completed = !todos[elem].completed
    }
    console.log(request.body.text)
  })
  response.send()
})

//delete
// DELETE TODO
app.delete('/todos/:id', function(req, res) {
  todos = todos.filter(function(item) {
    return item.id != req.params.id;
  });
  res.send();
});



app.listen(3000)
