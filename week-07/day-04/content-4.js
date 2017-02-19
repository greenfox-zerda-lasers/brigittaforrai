var liList = document.getElementsByTagName("li")
var fruits = ["apple", 'banana', 'cat', 'dog']

for (var li = 0; li < liList.length; li++){
  liList[li].textContent = fruits[li]
}
