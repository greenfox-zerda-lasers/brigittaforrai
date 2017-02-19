# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from tkinter import *

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()

color = ("pink", "red", "orange",  "yellow", "purple", "sea green", "tomato", "gold", "DeepSkyBlue2", "violet red", "cyan", "ivory2", "dark turquoise", "cyan4", "coral" )

width = 300
height= 300

def drawing(a, color):
    for i in range(0, len(color)-1):
        square = canvas.create_rectangle(width/2-a/2, height/2-a/2, width/2+a/2, height/2+a/2, fill=color[i], outline=color[i])
        a = a -25



drawing(300, color)

root.mainloop()


"""
from tkinter import *
from random import randint

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()

a = randint(10, 150)
x = randint(0, 300)
color = ("pink", "red", "orange", "blue", "green", "yellow", "purple", "sea green", "tomato", "gold", "DeepSkyBlue2", "violet red", "cyan", "ivory2", "dark turquoise"  )

def drawing(a, color):
    a = randint(50, 250)
    for i in range(0, len(color)-1):
            a = randint(10, 100)
            x = randint(0, 300)
            y = randint(0, 300)
            square = canvas.create_rectangle(x, y, x+a, y+a, fill=color[i], outline=color[i])



drawing(10, color)

root.mainloop()
"""
