# Create a `Stack` class that stores elements
# It should have a `size` method that returns number of elements it has
# It should have a `push` method that adds an element to the stack
# It should have a `pop` method that returns the last element form the stack and also deletes it from it

# please don`t use the built in methods

class Stack():

    def __init__(self, list):
        self.list = ["one", "two", "three", "four", "five"]

    def size(self):
        return(len(self.list))

    def push(self, new_element):
        self.new_element = new_element
        self.list.append(self.new_element)
        return self.list

    def pop(self):
        #return self.list[len(self.list)-1]
        self.list = self.list[0:len(self.list)-1]

    def show_list(self):
        return self.list


stack1 = Stack(list)
print(stack1.size())
print(stack1.push("six"))
print(stack1.pop())
print(stack1.show_list())
