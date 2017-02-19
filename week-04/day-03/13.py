# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import *

root= Tk()

canvas= Canvas(root, width="300", height="300")
canvas.pack()

def line_drawing(x, y):
    width = 300
    height= 300
    x1 = x
    y1 = y
    x2 = x
    y2 = y
    if x <= width or y <= height:
            for i in range(0, int(width/20)):
                line = canvas.create_line(x1, 0, width/2, height/2)
                x1 = x1 +20
                line = canvas.create_line(0, y1, width/2, height/2)
                y1 = y1 +20
                line = canvas.create_line(x2, 300, width/2, height/2)
                x2 = x2 +20
                line = canvas.create_line(300, y2, width/2, height/2)
                y2 = y2 +20




line_drawing(0, 0)

root.mainloop()
