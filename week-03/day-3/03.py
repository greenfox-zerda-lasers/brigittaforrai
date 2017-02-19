# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate():

    rum = 0

    def drink_rum(self):
        self.rum = self.rum + 1
        print(pirate1.hows_going_mate())

    def hows_going_mate(self):
        if self.rum == 5:
            return "Arrrr!!!"
        else:
            return "Nothin'"



pirate1 = Pirate()

pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
pirate1.drink_rum()
