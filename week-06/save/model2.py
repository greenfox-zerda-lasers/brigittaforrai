from random import *

class AreaData:
    def __init__(self):

        self.tilePattern = [[0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                            [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
                            [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
                            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                            [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
                            [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
                            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
                            [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
                            [0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                            [0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
                            [0, 1, 0, 1, 0, 1, 0, 0, 0, 0]]

class Character:
    def __init__(self, posX, posY, ctype):
        self.posX = posX
        self.posY = posY
        self.ctype = ctype

class Hero(Character):
    pass

class Skeleton(Character):
    pass

    #def __init__(self, skelPosX, skelPosY):
        #self.skelPosX = skelPosX
        #self.skelPosY = skelPosY


class Boss(Character):
    pass
    #def __init__(self, bossPosX, bossPosY):
        #self.bossPosX = bossPosX
        #self.bossPosY = bossPosY

#skel = Skeleton(randint(0, 8), randint(0, 8))
