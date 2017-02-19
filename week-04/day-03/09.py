# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *

root= Tk()
canvas = Canvas(root, width="300", height="300")
canvas.pack()

width = 300
height= 300

def drawing(a):
    rect = canvas.create_rectangle(width/2-a/2, height/2-a/2, width/2+a/2, height/2+a/2)

drawing(10)
drawing(30)
drawing(50)

root.mainloop()
