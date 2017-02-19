
from view import Art
from model import Elevator
import os

class Elevator_control:

    def __init__(self):
        self.model = Elevator()
        self.view = Art()

    def level_control(self):

        print("Which floor do you want to go?")
        button = int(input())
        print("How many people would get in the elevator?")
        number_in = int(input())
        print("How many people got out of the elevator?")
        number_out = int(input())

        self.model.add_people(number_in, number_out)

        os.system("clear")

        self.model.set_level(button)
        self.view.print_building(self.model.current_level, self.model.building_levels, self.model.people)

        print("\n \n")
        self.level_control()

main = Elevator_control()
main.level_control()
