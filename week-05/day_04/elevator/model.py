class Elevator:

    min_level = 0
    max_level = 11
    building_levels = 11
    people = 0
    current_level = 0

    def add_people(self, number_in, number_out):

        if self.people + number_in - number_out < 0:
            print("Hey!! Less then 0 people are in the elevator!!")
            self.people = 0
        else:
            self.people = self.people + number_in - number_out

    def set_level(self, button):
        self.current_level = button

        if self.current_level < self.min_level:
            print("The building doesn't have any basement")
            self.current_level = self.min_level

        elif self.current_level > self.max_level:
            print("The top floor is the 11th floor.")
            self.current_level = self.max_level


#elevator = Elevator()
#elevator.remove_people()
