// Create a function called ready
//  - Embed this API endpoint as a <script> tag: https://api.github.com/orgs/greenfox-academy/repos?callback=ready
//  - create the ready function
//  - itearate through response.data array and console.log the name property

var script = document.createElement("script")
var body = document.querySelector("body")

script.src = "https://api.github.com/orgs/greenfox-academy/repos?callback=ready"
body.appendChild(script)


function ready(response) {
  for (var i = 0; i < response.data.length; i++){
    //console.log(response.data[i]["name"])

  }

  console.log(response.data)
}
