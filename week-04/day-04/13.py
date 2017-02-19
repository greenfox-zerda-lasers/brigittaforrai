from tkinter import *
from math import sqrt
from time import sleep

root = Tk()
canvas = Canvas(root, width="600", height="600", bg="#5bebf4")
canvas.pack()


def fractal(x, y, a):

    canvas.create_polygon(x, y, x+a, y, x+1.5*a, y+(a*sqrt(3))/2, x+a, y+(a*sqrt(3)), x, y+(a*sqrt(3)), x-a/2, y+(a*sqrt(3))/2, fill="white", outline="black", width="2")
    sleep(0.1)
    canvas.update()
    if a > 15:
        fractal(x, y, a/2)
        fractal(x+0.75*a, y+(a*sqrt(3))/4, a/2)
        fractal(x, y+(a*sqrt(3))/2, a/2)

fractal(200, 100, 200)

root.mainloop()
