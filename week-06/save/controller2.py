from view import AreaDraw
from model import AreaData
from model import Character
from model import Hero, Skeleton, Boss
from random import *

class GamePlay:

    def __init__(self):
        self.pixel = 72
        self.count = 0
        self.model = AreaData()
        self.view = AreaDraw()
        self.hero = Hero(0, 0, 'hero')
        self.characterList = [
            Skeleton(randint(0, 9), randint(0, 10), 'skeleton'),
            Skeleton(randint(0, 9), randint(0, 10), 'skeleton'),
            Skeleton(randint(0, 9), randint(0, 10), 'skeleton'),
            Boss(randint(0, 9), randint(0, 10), 'boss')
        ]
        #self.skeleton = Skeleton(randint(0, 9), randint(0, 10))
        #self.boss = Boss(randint(0, 9), randint(0, 10))
        self.start()

    def start(self):
        self.view.printArea(self.model.tilePattern)
        self.view.printHeroDown(self.hero.posX, self.hero.posY)
        self.skeletonPosition()
        self.bossPosition()

    def gameLoop(self):
        pass

    def createCharaters(self):
        for i in self.characterList:
            self.view.drawCharacter(i.ctype)

    def skeletonPosition(self):
        if self.model.tilePattern[self.skeleton.posY][self.skeleton.posX] == 0:
            self.view.printSkeleton(self.skeleton.skelPosX * self.pixel, self.skeleton.skelPosY * self.pixel)
        else:
            self.skeleton.skelPosY = randint(0,8)
            self.skeleton.skelPosX = randint(0,8)
            self.skeletonPosition()

    def bossPosition(self):
        if self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0:
            self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
        else:
            self.boss.bossPosY = randint(0,9)
            self.boss.bossPosX = randint(0,10)
            self.bossPosition()

    def monsterMove(self):
        self.randomList = ["x", "y"]
        self.randomValue = [1, -1]
        if self.count % 2 == 0:
            direction = choice(self.randomList)
            value = choice(self.randomValue)
            if direction == "x":
                self.boss.bossPosX = self.boss.bossPosX + value
                if self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0 and 9 > self.boss.bossPosX >=0:
                    self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
                else:
                    self.boss.bossPosX = self.boss.bossPosX - value
                    self.monsterMove()
            else:
                self.boss.bossPosY = self.boss.bossPosY + value
                if self.model.tilePattern[self.boss.bossPosY][self.boss.bossPosX] == 0 and 10 > self.boss.bossPosY >=0:
                    self.view.printBoss(self.boss.bossPosX * self.pixel, self.boss.bossPosY * self.pixel)
                else:
                    self.boss.bossPosY = self.boss.bossPosY - value
                    self.monsterMove()


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
            self.monsterMove()
            self.start()
            self.view.printHeroDown(self.hero.posX, self.hero.posY)
            #self.view.canvas.move(self.view.herod, self.hero.posX, self.hero.posY)


    def upKey(self,event):
        self.heroIndexUpY = (self.hero.posY - self.pixel) // self.pixel
        self.heroIndexUpX = self.hero.posX // self.pixel
        if self.heroIndexUpY >= 0 and self.model.tilePattern[self.heroIndexUpY][self.heroIndexUpX ] == 0:
            self.hero.posY = self.hero.posY - self.pixel
            self.count = self.count + 1
            self.monsterMove()
            self.start()
            self.view.printHeroUp(self.hero.posX, self.hero.posY)



    def leftKey(self,event):
        self.heroIndexLeftX = (self.hero.posX - self.pixel) // self.pixel
        self.heroIndexLeftY = self.hero.posY // self.pixel
        if self.heroIndexLeftX >= 0 and self.model.tilePattern[self.heroIndexLeftY][self.heroIndexLeftX ] == 0:
            self.hero.posX = self.hero.posX - self.pixel
            self.count = self.count + 1
            self.monsterMove()
            self.start()
            self.view.printHeroLeft(self.hero.posX, self.hero.posY)



    def rightKey(self,event):
        self.heroIndexLeftX = (self.hero.posX + self.pixel) // self.pixel
        self.heroIndexLeftY = self.hero.posY // self.pixel
        if self.heroIndexLeftX < 10 and self.model.tilePattern[self.heroIndexLeftY][self.heroIndexLeftX ] == 0:
            self.hero.posX = self.hero.posX + self.pixel
            self.count = self.count + 1
            self.monsterMove()
            self.start()
            self.view.printHeroRight(self.hero.posX, self.hero.posY)











main = GamePlay()
#main.area()
#main.placeHero()
#main.placeSkeleton()
#main.placeBoss()
main.inputHandler()
main.view.root.mainloop()
