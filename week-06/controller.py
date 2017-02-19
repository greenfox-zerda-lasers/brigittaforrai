from view import AreaDraw
from model import Character, AreaData, Hero, Skeleton, Boss
from random import *
import time

class GamePlay:

    def __init__(self):
        self.pixel = 91
        self.index = 0
        self.count = 0
        self.model = AreaData()
        self.view = AreaDraw()
        self.character = Character()
        self.level = 1
        self.start()
        self.view.printLogo()

    def start(self):
        self.view.root.unbind("<Return>")
        self.inputHandler()
        self.model.chooseArea()
        self.view.printArea(self.model.tilePattern)
        self.hero = Hero(0, 0)
        self.skeleton = []
        self.moreSkeleton()

        #self.skeleton = [
        #Skeleton(randint(0, 9), randint(0, 10), "skeltag1", self.level),
        #Skeleton(randint(0, 9), randint(0, 10), "skeltag2", self.level),
        #Skeleton(randint(0, 9), randint(0, 10), "skeltag3", self.level) ]
        self.boss = Boss(randint(0, 9), randint(0, 10), self.level)
        self.view.printLevel(self.level)
        self.view.heroText(self.hero.hp, self.hero.dp, self.hero.sp)
        self.placeSkeletons()
        self.bossPosition()
        self.view.printHeroDown(0, 0)

    def gameLoop(self):
        self.level = 1
        self.count = 0
        self.start()
        self.view.printLogo()

    def bossPosition(self):
        if self.boss.hp <= 0:
            self.view.canvas.delete("boss")
        elif self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0:
            self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
        else:
            self.boss.bossPosY = randint(0,8)
            self.boss.bossPosX = randint(0,9)
            self.bossPosition()

    def bossMove(self):
        self.randomList = ["x", "y"]
        self.randomValue = [1, -1]

        if self.count % 2 == 0:
            direction = choice(self.randomList)
            value = choice(self.randomValue)
            print(value, direction, self.boss.bossPosX, self.boss.bossPosY)
            #EZT ATNEZNI ES UJRAIRNI!!!!!!
            if direction == "x":
                self.boss.bossPosX = self.boss.bossPosX + value
                if self.boss.hp <= 0:
                    self.view.canvas.delete("boss")
                elif self.boss.bossPosX >=0 and self.boss.bossPosX <= 9:
                    if self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0:
                        self.view.canvas.delete("boss")
                        self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
                    else:
                        self.boss.bossPosX = self.boss.bossPosX - value
                        self.bossMove()
                else:
                    self.boss.bossPosX = self.boss.bossPosX - value
                    self.bossMove()

            elif direction == "y":
                self.boss.bossPosY = self.boss.bossPosY + value
                if self.boss.hp <= 0:
                    self.view.canvas.delete("boss")
                elif self.boss.bossPosY >=0 and self.boss.bossPosY <= 10:
                    if self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0:
                        self.view.canvas.delete("boss")
                        self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
                    else:
                        self.boss.bossPosY = self.boss.bossPosY - value
                        self.bossMove()
                else:
                    self.boss.bossPosY = self.boss.bossPosY - value
                    self.bossMove()


    def placeSkeletons(self):
        self.key = False
        for s in self.skeleton:
            if self.model.tilePattern[s.skelPosY][s.skelPosX] == 0:
                self.view.printSkeleton(s.skelPosX * self.pixel, s.skelPosY * self.pixel, s.skeltag)
            else:
                s.skelPosY = randint(0,8)
                s.skelPosX = randint(0,9)
                self.placeSkeletons()
        self.skeleton[len(self.skeleton)-1].key = True

    def skeletonMove(self):
        for s in self.skeleton:
            self.randomList = ["x", "y"]
            self.randomValue = [1, -1]
            if self.count % 2 == 0:
                direction = choice(self.randomList)
                value = choice(self.randomValue)
                print(value, direction, s.skelPosX, s.skelPosY)
                if direction == "x":
                    s.skelPosX = s.skelPosX + value
                    if s.skelPosX >=0 and s.skelPosX <= 9 and s.hp > 0:
                        if self.model.tilePattern[s.skelPosY][s.skelPosX] == 0: #and 9 > s.skelPosX >=0 and s.hp > 0:
                            self.view.canvas.delete(s.skeltag) #TAGELNI A RANGE-et
                            self.view.printSkeleton(s.skelPosX * self.pixel, s.skelPosY * self.pixel, s.skeltag)
                        else:
                            s.skelPosX = s.skelPosX - value
                            #self.skeletonMove() - erre meg ki kene talalni vmit
                    else:
                        s.skelPosX = s.skelPosX - value
                else:
                    s.skelPosY = s.skelPosY + value
                    if s.skelPosY >=0 and s.skelPosY <= 10 and s.hp > 0:
                        if self.model.tilePattern[s.skelPosY][s.skelPosX] == 0 and 10 > s.skelPosY >=0 and s.hp > 0:
                            self.view.canvas.delete(s.skeltag)
                            self.view.printSkeleton(s.skelPosX * self.pixel, s.skelPosY * self.pixel, s.skeltag)
                        else:
                            s.skelPosY = s.skelPosY - value
                            #self.skeletonMove() - erre meg ki kene talalni vmit
                    else:
                        s.skelPosY = s.skelPosY - value

#*******************************************************FIGHT*******************************************************************

    def checkFight(self):
        # SKELETON CHECK
        self.view.canvas.delete("herodetails")
        self.view.canvas.delete("skeldetails")
        self.view.canvas.delete("fighttext")
        self.view.canvas.delete("bossdetails")
        self.view.canvas.delete("bossicon")
        self.view.canvas.delete("skeletonicon")
        self.view.heroText(self.hero.hp, self.hero.dp, self.hero.sp )
        deleteIndex = -1

        for s in range(0, len(self.skeleton)):
            if self.skeleton[s].skelPosX == self.hero.posX // self.pixel and self.skeleton[s].skelPosY == self.hero.posY // self.pixel:
                self.active = s
                print(self.active)
                print("fight SKELETON")
                #self.view.heroText(self.hero.hp, self.hero.dp, self.hero.sp )
                self.view.skeletonText(self.skeleton[self.active].hp, self.skeleton[self.active].dp, self.skeleton[self.active].sp )
                self.view.fightTEXT()

                if self.hero.hp > 0 and self.skeleton[self.active].hp > 0:
                    self.view.root.bind('<space>', self.fightSkeleton) #HERO TAMAD
                elif self.hero.hp < 0:
                    self.view.printGameOver(self.callLoop)
                    print("GAMEOVER") #GAMEOVER KEP Canvas
                elif self.skeleton[self.active].hp <= 0:
                    self.view.canvas.delete(self.skeleton[self.active].skeltag)
                    self.hero.maxHealthPoint = self.hero.maxHealthPoint +  self.character.d6()
                    self.hero.dp = self.hero.dp + self.character.d6()
                    self.hero.sp = self.hero.sp + self.character.d6()
                    deleteIndex = s
                    print("skeleton meghalt, el kene tuntetni")
        if deleteIndex >= 0:
            del self.skeleton[self.active]
            #self.active = self.active -1

        # BOSS CHECK
        if self.boss.bossPosX == self.hero.posX // self.pixel and self.boss.bossPosY == self.hero.posY // self.pixel:
            print ("Fight BOSS")
            self.view.bossText(self.boss.hp, self.boss.dp, self.boss.sp )
            self.view.fightTEXT()
            if self.hero.hp > 0 and self.boss.hp > 0:
                self.view.root.bind('<space>', self.fightBoss)
            elif self.hero.hp < 0:
                self.view.printGameOver(self.callLoop)
                print("GAMEOVER")
            elif self.boss.hp <= 0:
                self.view.canvas.delete("boss")
                self.hero.maxHealthPoint = self.hero.maxHealthPoint +  self.character.d6()
                self.hero.dp = self.hero.dp + self.character.d6()
                self.hero.sp = self.hero.sp + self.character.d6()

    def fightBoss(self, event):
        if self.hero.hp >0 and self.boss.hp > 0:
            #valtoztatva
            if self.hero.sp >= self.boss.dp:
                self.boss.hp = self.boss.hp - (self.hero.sp - self.boss.dp)
            else:
                self.boss.hp = self.boss.hp
            if self.boss.sp >= self.hero.dp:
                self.hero.hp = self.hero.hp - (self.boss.sp - self.hero.dp)
            else:
                self.hero.hp = self.hero.hp
            print("herohp:", self.hero.hp, "bosshp:", self.boss.hp,)
        self.checkFight()

    def fightSkeleton(self, event):
        if self.hero.hp >0 and self.skeleton[self.active].hp > 0:
            if self.hero.sp >= self.skeleton[self.active].dp:
                self.skeleton[self.active].hp = self.skeleton[self.active].hp - (self.hero.sp - self.skeleton[self.active].dp)
            else:
                self.skeleton[self.active].hp = self.skeleton[self.active].hp
            if self.skeleton[self.active].sp >= self.hero.dp:
                self.hero.hp = self.hero.hp - (self.skeleton[self.active].sp - self.hero.dp)
            else:
                self.hero.hp = self.hero.hp
            #KEY -> NEXT LEVEL
            if self.skeleton[self.active].key == True and self.skeleton[self.active].hp <= 0:
                self.view.key()
                #time.sleep(1) #TIMEE
                self.nextLevel()
            print("herohp:", self.hero.hp, "bosshp:", self.skeleton[self.active].hp,)
        self.checkFight()

#*****************************************************INPUTS********************************************************

    def inputHandler(self):
        self.view.root.bind('<Down>', self.downKey)
        self.view.root.bind('<Up>', self.upKey)
        self.view.root.bind('<Left>', self.leftKey)
        self.view.root.bind('<Right>', self.rightKey)

    def downKey(self,event):
        self.heroIndexDownY = (self.hero.posY + self.pixel) // self.pixel
        self.heroIndexDownX = self.hero.posX // self.pixel
        if self.heroIndexDownY < 11 and self.model.tilePattern[self.heroIndexDownY][self.heroIndexDownX ] == 0:
            self.hero.posY = self.hero.posY + self.pixel
            self.count = self.count + 1
            self.bossMove()
            self.skeletonMove()
            self.checkFight()
            self.view.canvas.delete("hdown", "hup", "hleft", "hright")
            self.view.printHeroDown(self.hero.posX, self.hero.posY)
            #itt lehetne egy function

    def upKey(self,event):
        self.heroIndexUpY = (self.hero.posY - self.pixel) // self.pixel
        self.heroIndexUpX = self.hero.posX // self.pixel
        if self.heroIndexUpY >= 0 and self.model.tilePattern[self.heroIndexUpY][self.heroIndexUpX ] == 0:
            self.hero.posY = self.hero.posY - self.pixel
            self.count = self.count + 1
            self.bossMove()
            self.skeletonMove()
            self.checkFight()
            self.view.canvas.delete("hdown", "hup", "hleft", "hright")
            self.view.printHeroUp(self.hero.posX, self.hero.posY)

    def leftKey(self,event):
        self.heroIndexLeftX = (self.hero.posX - self.pixel) // self.pixel
        self.heroIndexLeftY = self.hero.posY // self.pixel
        if self.heroIndexLeftX >= 0 and self.model.tilePattern[self.heroIndexLeftY][self.heroIndexLeftX ] == 0:
            self.hero.posX = self.hero.posX - self.pixel
            self.count = self.count + 1
            self.bossMove()
            self.skeletonMove()
            self.checkFight()
            self.view.canvas.delete("hdown", "hup", "hleft", "hright")
            self.view.printHeroLeft(self.hero.posX, self.hero.posY)

    def rightKey(self,event):
        self.heroIndexLeftX = (self.hero.posX + self.pixel) // self.pixel
        self.heroIndexLeftY = self.hero.posY // self.pixel
        if self.heroIndexLeftX < 10 and self.model.tilePattern[self.heroIndexLeftY][self.heroIndexLeftX ] == 0:
            self.hero.posX = self.hero.posX + self.pixel
            self.count = self.count + 1
            self.bossMove()
            self.skeletonMove()
            self.checkFight()
            self.view.canvas.delete("hdown", "hup", "hleft", "hright")
            self.view.printHeroRight(self.hero.posX, self.hero.posY)

#*******************************************Next Level**************************************************


    def nextLevel(self):
        self.level = self.level + 1
        self.hero.level_up()
        self.start()

    def callLoop(self, event):
        self.view.canvas.delete("all")
        self.gameLoop()

    def moreSkeleton(self):
        for m in range(0, 2+self.level):
            self.index = self.index+1
            self.skeleton.append(Skeleton(randint(0, 9), randint(0, 10), "skeltag"+str(self.index), self.level))



main = GamePlay()
main.inputHandler()
#main.nextLevel()
main.view.root.mainloop()
