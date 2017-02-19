import sys
from tkinter import *

cWidth = 720
cHeight = 792

class AreaDraw:

    def __init__(self):
        self.root = Tk()
        self.canvas = Canvas(self.root, width =cWidth, height=cHeight)
        self.canvas.pack()

        #Area Images
        self.floorTile = PhotoImage(file="./elements/floor.png")
        self.wallTile = PhotoImage(file="./elements/wall.png")

        #Hero Images
        self.heroDown = PhotoImage(file="./elements/hero_down.png")
        self.heroUp = PhotoImage(file="./elements/hero_up.png")
        self.heroLeft = PhotoImage(file="./elements/hero_left.png")
        self.heroRight = PhotoImage(file="./elements/hero_right.png")

        #Monster Images
        self.skeleton = PhotoImage(file="./elements/skeleton.png")
        self.boss = PhotoImage(file="./elements/boss.png")





    def printArea(self, tilePattern):
        for i in range(11):
            for j in range(10):
                if tilePattern[i][j] == 0:
                    self.canvas.create_image(j*72, i*72, anchor=NW, image = self.floorTile)
                else:
                    self.canvas.create_image(j*72, i*72, anchor=NW, image = self.wallTile)


    def drawCharacter(self, type):
        if type == "skeleton":
            self.canvas.create_image(posX, posY, anchor=NW, image = self.skeleton)
        elif type == "boss":
            self.canvas.create_image(posX, posY, anchor=NW, image = self.boss)




    #Print Characters

    def printHeroDown(self, posX, posY):
        #herod = self.canvas.create_image(posX, posY, anchor=NW, image = self.heroDown)
        #self.cancas.move(self.herod, x, y,)

    def printHeroUp(self, posX, posY):
        #self.canvas.create_image(posX, posY, anchor=NW, image = self.heroUp)

    def printHeroLeft(self, posX, posY):
        #self.canvas.create_image(posX, posY, anchor=NW, image = self.heroLeft)

    def printHeroRight(self, posX, posY):
        #self.canvas.create_image(posX, posY, anchor=NW, image = self.heroRight)

    #def printSkeleton(self, posX, posY):
        #self.canvas.create_image(posX, posY, anchor=NW, image = self.skeleton)

    #def printBoss(self, posX, posY):
        #self.canvas.create_image(posX, posY, anchor=NW, image = self.boss)
