from tkinter import *
from math import sqrt

root = Tk()
canvas = Canvas(root, width="600", height="600", bg="gray")
canvas.pack()


def fractal(x, y, a):
    canvas.create_polygon(x, y, x+a, y, x+a/2, y+(a*sqrt(3))/2, fill="white", outline="black")
    if a > 10:
        fractal(x, y, a/2)
        fractal(x+a/2, y, a/2)
        fractal(x+a/4, y+((a*sqrt(3))/2)/2, a/2)

fractal(50, 50, 500)

root.mainloop()
