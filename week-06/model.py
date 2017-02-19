from random import *

class AreaData:
    def __init__(self):

        self.patternList =[[[0, 0, 0, 1, 0, 1, 0, 0, 0, 0,1],
                            [0, 0, 0, 1, 0, 1, 0, 1, 1, 0,1],
                            [0, 1, 1, 1, 0, 1, 0, 1, 1, 0,1],
                            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0,1],
                            [1, 1, 1, 1, 0, 1, 1, 1, 1, 0,1],
                            [0, 1, 0, 1, 0, 0, 0, 0, 1, 0,0],
                            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0,1],
                            [0, 0, 0, 0, 0, 1, 1, 0, 1, 0,1],
                            [0, 1, 1, 1, 0, 0, 0, 0, 1, 0,1],
                            [0, 0, 0, 1, 0, 1, 1, 0, 1, 0,0],
                            [0, 1, 0, 1, 0, 1, 0, 0, 0, 0,1]],

                           [[0, 0, 0, 0, 1, 0, 0, 1, 0, 1,1],
                            [0, 1, 1, 0, 1, 0, 0, 0, 0, 1,1],
                            [0, 1, 1, 0, 1, 0, 1, 0, 1, 1,1],
                            [0, 1, 1, 0, 0, 0, 1, 0, 0, 0,1],
                            [0, 0, 1, 1, 0, 1, 1, 0, 1, 1,1],
                            [1, 0, 0, 1, 0, 1, 1, 0, 0, 0,1],
                            [1, 1, 0, 0, 0, 1, 0, 0, 1, 0,1],
                            [1, 1, 0, 1, 1, 1, 0, 1, 1, 0,1],
                            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0,1],
                            [0, 1, 1, 0, 1, 1, 1, 1, 1, 0,1],
                            [0, 1, 1, 0, 0, 0, 0, 0, 0, 0,1]],

                           [[0, 1, 1, 0, 0, 0, 0, 0, 0, 0,1],
                            [0, 1, 0, 0, 1, 1, 1, 1, 1, 0,1],
                            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0,1],
                            [1, 1, 0, 1, 1, 1, 0, 1, 1, 0,0],
                            [1, 0, 0, 1, 0, 1, 1, 0, 0, 0,1],
                            [1, 0, 0, 1, 0, 1, 1, 0, 0, 0,1],
                            [0, 0, 0, 0, 0, 0, 1, 1, 0, 1,1],
                            [0, 1, 0, 0, 1, 0, 0, 0, 0, 1,1],
                            [0, 1, 1, 0, 1, 0, 1, 0, 1, 1,1],
                            [0, 1, 1, 0, 0, 0, 1, 0, 0, 0,0],
                            [0, 0, 1, 1, 1, 0, 1, 0, 1, 1,1]]]

    def chooseArea(self):
        self.tilePattern = choice(self.patternList)


class Character:

    def __init__(self):
        #self.maxHealthPoint = 10
        #self.maxDefend = 10
        #self.maxStrikePoint = 10
        self.level = 1

    def d6(self):
        result = randint(1, 6)
        return result



class Hero(Character):
    def __init__(self, posX, posY):
        super().__init__()
        #super(Hero, self).__init__()
        self.posX = posX
        self.posY = posY

        self.maxHealthPoint = float(20 + 3 * self.d6())
        self.hp = float(20 + 3 * self.d6())
        self.dp = float(2*self.d6())
        self.sp = float(5+self.d6())
        if self.hp < self.maxHealthPoint:
            self.hp = self.hp
        else:
            self.hp = self.maxHealthPoint


    def level_up(self):
        self.chance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        self.chanceNum = choice(self.chance)
        self.maxHealthPoint = 20 + 3 * self.d6()
        if self.chanceNum == 1:
            self.hp = self.maxHealthPoint
        elif self.chanceNum == 2 or self.chanceNum == 3 or self.chanceNum == 4 or self.chanceNum == 5:
            self.hp = self.maxHealthPoint / 3
        else:
            self.hp = self.maxHealthPoint / 10




class Skeleton(Character):
    def __init__(self, skelPosX, skelPosY, skeltag, level):
        super().__init__()
        #super(Skeleton, self).__init__()
        self.skeltag = skeltag
        self.key = False
        self.skelPosX = skelPosX
        self.skelPosY = skelPosY
        self.level = level

        self.hp = float(2 *self.level * self.d6())
        self.dp = float((self.level/2)*self.d6())
        self.sp = float(self.level *self.d6())




class Boss(Character):
    def __init__(self, bossPosX, bossPosY, level):
        super().__init__()
        #super(Boss, self).__init__()
        self.bossPosX = bossPosX
        self.bossPosY = bossPosY
        self.level = level

        self.hp = float(2 * self.level* self.d6() + self.d6())
        self.dp = float((self.level/2)*self.d6() +(self.d6()/2))
        self.sp = float(self.level * self.d6() + self.level)




#skel = Skeleton(randint(0, 8), randint(0, 8))
#hero = Skeleton(1, 1, "h")
#print(hero.level)
#print(hero.hp)
#print(hero.dp)
