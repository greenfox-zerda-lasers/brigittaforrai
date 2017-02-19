# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *

root= Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

width = 300
height = 300
def drawing(x, y):
    line = canvas.create_line(x, y, width/2, height/2)

x1= 0
y1= 0
x2= 300
y2= 150
x3 = 0
y3 = 300

drawing(x1, y1)
drawing(x2, y2)
drawing(x3, y3)

root.mainloop()
