

from view import Display
from model import Robot
import os

class Robot_controller:

    def __init__(self):
        os.system("clear")
        self.model = Robot()
        self.view = Display()
        self.view.model = self.model
        self.main_control()

    def main_control(self):
        os.system("clear")
        print(self.view.intro())
        print("Hey, what you want me to do?\n")
        action_control = input().lower()
        if action_control == "a":
            self.add_memory()
            self.main_control()
        elif action_control == "m":
            self.read_memory()
        elif action_control == "p":
            self.move()
            self.main_control()
        elif action_control == "c":
            self.current_position()
        elif action_control == "t":
            self.talk()
        else:
            self.main_control()

    def add_memory(self):
        os.system("clear")
        print("Add new memory!")
        new_memory = input()
        self.model.memories(new_memory)
        os.system("clear")

    def read_memory(self):
        os.system("clear")
        print("I have", len(self.model.memory), "memories. \n Enter the number of the choosen memory, or type 'l' to list all of the memories!")
        choose_memory = input()
        os.system("clear")
        self.view.print_memory(choose_memory)
        print("\nPress Enter to go back!")
        back = input()
        os.system("clear")
        self.main_control()



    def move(self):
        os.system("clear")
        print("Tell me where to go!")
        new_positionX = int(input("X position:  "))
        new_positionY = int(input("Y position:  "))
        self.model.positions(new_positionX, new_positionY)

    def current_position(self):
        os.system("clear")
        self.view.print_position()
        print("\nPress Enter to go back!")
        back = input()
        os.system("clear")
        self.main_control()

    def talk(self):
        os.system("clear")
        self.view.print_talk()
        print("\nPress Enter to go back!")
        back = input()
        os.system("clear")
        self.main_control()



robirobot = Robot_controller()
#robirobot.add_memory()
#robirobot.read_memory()
#robirobot.move()
#robirobot.current_position()
#robirobot.talk()
