from tkinter import *
import math
from time import sleep
from random import uniform
from random import randint

root = Tk()

w = 720
h = 720
canvas = Canvas(width=w, height=h, bg="black")
canvas.pack()

x = w/2
y = h - 10
angle = -90
a = 10



def tree(x,y,angle,a):

    if a:
        x2 = x + int(math.cos(math.radians(angle)) * a * uniform(9, 10))
        y2 = y + int(math.sin(math.radians(angle)) * a * uniform(9, 10))
        canvas.create_line(x, y, x2, y2, fill="white", width="1")
        b = randint(15, 30)

        sleep(0.01)
        canvas.update()
        tree(x2, y2, angle - b, a - 1)
        tree(x2, y2, angle + b, a - 1)

tree(x, y, angle, a)

root.mainloop()
