from tkinter import *
from math import sqrt
from time import sleep

root = Tk()
canvas = Canvas(root, width="720", height="720", bg="#5bebf4")
canvas.pack()

def fractal(x, y, a):
    canvas.create_polygon(x, y, x+a/2, y-(a*sqrt(3))/2, x+1.5*a, y-(a*sqrt(3))/2, x+2*a, y, x+1.5*a, y+(a*sqrt(3))/2, x+a/2, y+(a*sqrt(3))/2, fill="#ff314a", outline="white", width="2")
    sleep(0.01)
    canvas.update()

    if a > 5:
        fractal(x, y, a/3)
        fractal(x+a/3, y-(2/3*a*sqrt(3))/2, a/3)
        fractal(x+a, y-(2/3*a*sqrt(3))/2, a/3)
        fractal(x+4/3*a, y, a/3)
        fractal(x+a, y+(2/3*a*sqrt(3))/2, a/3)
        fractal(x+a/3, y+(2/3*a*sqrt(3))/2, a/3)

fractal(60, 350, 300)
root.mainloop()
