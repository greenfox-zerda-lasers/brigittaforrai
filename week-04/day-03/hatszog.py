from tkinter import *

root = Tk()
canvas= Canvas(root, width="500", height="500", bg="white")
canvas.pack()

width= 500
height = 500
h = 10



bx= width/2 +5
by= h

cx= width/2 +10
cy= h +10

col= 8
length = 4

for j in range(1, col):

    #while j <=4:
        #length = j +3


    for i in range(0, length):
        ax = bx-10
        ay = by
        dx = cx-5
        dy = cy+10
        ex= ax
        ey = cy +10
        fx= bx-15
        fy= cy

        canvas.create_polygon(ax, ay, bx, by, cx, cy, dx, dy, ex, ey, fx, fy, fill="white", outline="black")

        bx= bx -15
        by= by +10
        cx= cx -15
        cy= cy +10

    bx= (width/2 +5) +j*15
    by= h + j*10
    cx= (width/2 +10) +j*15
    cy= h +10 + j*10








root.mainloop()
