# create a 300x300 canvas.
# fill it with a checkerboard pattern.

from tkinter import *

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()




def pattern(a):
    x1 = 0
    y1 = 0
    x2 = a
    y2 = a
    width= 300
    height= 300
    for j in range(0, int(height/a)):
        for i in range(0, int(width/a)):
            black1 = canvas.create_rectangle(x1, y1, x1+a, y1+a, fill= "black")
            x1 = x1 + 2*a
            black2 = canvas.create_rectangle(x2, y2, x2+a, y2+a, fill= "black")
            x2 = x2 + 2*a




pattern(10)

root.mainloop()
