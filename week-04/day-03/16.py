# create a 300x300 canvas.
# make it look like a nigth sky:
# - The background should be black
# - The stars can be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

from tkinter import *
from random import randint

root = Tk()
canvas= Canvas(root, width="300", height="300", bg ="black")
canvas.pack()



for s in range(0, 400):

    c = randint(1,9)
    color_list =  [c, c, c, c, c, c]
    color = ""
    for n in color_list:
        color = color +str(n)
    hex = "#"+color

    a = randint(1, 5)
    x = randint(0, 300)
    y = randint(0, 300)
    x2= x+a
    y2 = y+a
    canvas.create_oval(x, y, x2, y2, fill=hex)

print(x, y, x2, y2, hex)
root.mainloop()
