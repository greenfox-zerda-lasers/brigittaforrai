from tkinter import *
from time import sleep

root = Tk()
canvas= Canvas(root, width="500", height="500", bg="white")
canvas.pack()

width= 500
height = 500
t = 20

ax = width/2
ax0 = ax
bx = ax -10
cx = ax +10
ay = 20
ay0 = ay
by = ay +t
cy = ay +t

col = 20

for r in range(1, col):
    lenght = col -r
    sleep(0.1)
    canvas.update()
    for h in range(0, lenght-1):
        bx = ax -10
        cx = ax +10
        by = ay +t
        cy = ay +t
        canvas.create_polygon(ax, ay, bx, by, cx, cy, fill="#5bebf4", outline="#ff314a")
        ay = ay + t
        ax = bx
        sleep(0.08)
        canvas.update()
    ax = width/2 + r*10
    ay = 20 + 2*r *10

root.mainloop()
