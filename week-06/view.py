import sys
from tkinter import *
import time

cWidth = 1920 # 1100
cHeight = 1045 # 792

class AreaDraw:

    def __init__(self):
        self.root = Tk()
        self.canvas = Canvas(self.root, width =cWidth, height=cHeight, bg="#fe334f")
        self.canvas.pack()

        #Area Images
        self.floorTile = PhotoImage(file="./elements/white85.png")
        self.wallTile = PhotoImage(file="./elements/brick85.png")

        #Hero Images
        self.heroDown = PhotoImage(file="./elements/mano_front.png")
        self.heroUp = PhotoImage(file="./elements/mano_back.png")
        self.heroLeft = PhotoImage(file="./elements/mano_left.png")
        self.heroRight = PhotoImage(file="./elements/mano_right.png")

        #Monster Images
        self.skeleton = PhotoImage(file="./elements/snake2.png")
        self.boss = PhotoImage(file="./elements/boss85.png")

        #Game Images
        self.gameover = PhotoImage(file="./elements/gameover1.png")
        self.logo = PhotoImage(file="./elements/logo.png")
        self.keyImage = PhotoImage(file="./elements/keykerek.png")


    def printArea(self, tilePattern):
        for i in range(11):
            for j in range(11):
                if tilePattern[i][j] == 0:
                    self.canvas.create_image(j*91, i*91, anchor=NW, image = self.floorTile)
                else:
                    self.canvas.create_image(j*91, i*91, anchor=NW, image = self.wallTile)

    #Print Characters
    def printHeroDown(self, posX, posY):
        heroIMG_down = self.canvas.create_image(posX, posY, anchor=NW, image = self.heroDown, tag = "hdown")

    def printHeroUp(self, posX, posY):
        heroIMG_up = self.canvas.create_image(posX, posY, anchor=NW, image = self.heroUp, tag = "hup")

    def printHeroLeft(self, posX, posY):
        heroIMG_left = self.canvas.create_image(posX, posY, anchor=NW, image = self.heroLeft, tag = "hleft")

    def printHeroRight(self, posX, posY):
        heroIMG_right = self.canvas.create_image(posX, posY, anchor=NW, image = self.heroRight, tag = "hright")

    def printSkeleton(self, posX, posY, skeltag):
        skeletonIMG = self.canvas.create_image(posX, posY, anchor=NW, image = self.skeleton, tag=skeltag)

    def printBoss(self, posX, posY):
        bossIMG = self.canvas.create_image(posX, posY, anchor=NW, image = self.boss, tags="boss")

    #print images
    def printGameOver(self, start):
        bg = self.canvas.create_rectangle(0, 0, 1920, 1080, fill= "#fe334f")
        self.root.unbind("<Down>")
        self.root.unbind("<Up>")
        self.root.unbind("<Left>")
        self.root.unbind("<Right>")
        self.root.bind('<Return>', start)
        self.go = self.canvas.create_text(960, 300, font=("Helvetica", 26), fill="white")
        self.canvas.itemconfig(self.go, text="Pres ENTER to play again!")
        overIMG = self.canvas.create_image(960, 750, image = self.gameover)



    def printLogo(self):
        overIMG = self.canvas.create_image(1440, 72, image = self.logo)

    def key(self):
        self.canvas.delete("fighttext")
        self.canvas.create_image(1440, 800, image = self.keyImage, tag="printkey")
        self.canvas.create_text(1440, 920, font=("Helvetica", 18), fill="white", text="Entering next level", tag="enternext")
        self.canvas.update()
        time.sleep(2)
        self.canvas.delete("printkey")
        self.canvas.delete("enternext")

    #Texts
    def title(self):
        self.text1 = self.canvas.create_text(910, 50, font=("Helvetica", 30), fill="white")
        self.canvas.itemconfig(self.text1, text="TKWANDERER")
        #self.canvas.insert(self.text1, 30, "new ")

    def heroText(self, hp, dp, sp):
        self.canvas.delete("herodetails")
        self.canvas.create_image(1300, 300, anchor=NW, image = self.heroDown)
        self.heroDetails = self.canvas.create_text(1500, 300, font=("Helvetica", 24), fill="white", anchor="nw", tag="herodetails")
        if hp <= 0:
            self.canvas.itemconfig(self.heroDetails, text="gameover")
            #self.printGameOver()
        else:
            self.canvas.itemconfig(self.heroDetails, text="HP: %s\nDP: %s\nSP: %s\n" % (hp, dp, sp))

    def bossText(self, hp, dp, sp):
        self.canvas.delete("bossdetails")
        self.canvas.create_image(1300, 450, anchor=NW, image = self.boss, tag="bossicon")
        self.bossDetails = self.canvas.create_text(1500, 450, font=("Helvetica", 24), fill="white", anchor="nw", tags="bossdetails")

        if hp <= 0:
            self.canvas.itemconfig(self.bossDetails, text="\nDEAD!")
        else:
            self.canvas.itemconfig(self.bossDetails, text="HP: %s\nDP: %s\nSP: %s\n" % (hp, dp, sp))
            #self.canvas.insert(self.text1, 30, "new ")

    def skeletonText(self, hp, dp, sp):
        self.canvas.delete("skeldetails")
        self.canvas.create_image(1300, 450, anchor=NW, image = self.skeleton, tag="skeletonicon")
        self.skeletonDetails = self.canvas.create_text(1500, 450, font=("Helvetica", 24), fill="white", anchor="nw", tags="skeldetails")

        if hp <= 0:
            self.canvas.itemconfig(self.skeletonDetails, text="\nDEAD!")
        else:
            self.canvas.itemconfig(self.skeletonDetails, text="HP: %s\nDP: %s\nSP: %s\n" % (hp, dp, sp))
            #self.canvas.insert(self.text1, 30, "new ")

    def fightTEXT(self):

        self.text1 = self.canvas.create_text(1440, 800, font=("Helvetica", 50), fill="white", tags="fighttext")
        self.canvas.itemconfig(self.text1, text="FIGHT")

    def printLevel(self, level):
        self.canvas.delete("level")
        self.levelText = self.canvas.create_text(1440, 172, font=("Helvetica", 26), fill="white", tag="level")
        self.canvas.itemconfig(self.levelText, text="Level %s" % (level) )
