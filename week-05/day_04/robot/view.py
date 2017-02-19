
from random import randint

class Display:

    def print_memory(self, choose_memory):
        if choose_memory == "l":
            print(self.model.memory)
        elif int(choose_memory) >= 0 or int(choose_memory) < len(self.model.memory):
            print(self.model.memory[int(choose_memory)-1])
        else:
            print("hey maan! this is an error!")

    def print_position(self):
        print("X position:", self.model.positionX)
        print("Y position:", self.model.positionY)

    def print_talk(self):
        print("Hello, my name is ", self.model.name)
        print("My current mood is: ",self.model.moods[randint(0, len(self.model.moods)-1)])
        print("My last memory is: ", self.model.memory[len(self.model.memory)-1])

    def intro(self):
        print("\n******CONTROL PANEL******\n\n1. Add Memory:         'A'\n2. Recall Memories:    'M'\n3. Move:               'P'\n4. Current Position:   'C'\n5. Talk:               'T'\n\n\n\n")
