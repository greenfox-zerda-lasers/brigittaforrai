# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from tkinter import *

root= Tk()
canvas = Canvas(root, width="300", height="300")
canvas.pack()

width= 300
height= 300
"""
def loop_drawing(a):
    while a <= 200:
        rect = canvas.create_rectangle(width/2-a/2, height/2-a/2, width/2+a/2, height/2+a/2)
        a = a + 10"""

def loop_drawing(a):
    for i in range(0, 19):
        rect = canvas.create_rectangle(width/2-a/2, height/2-a/2, width/2+a/2, height/2+a/2)
        a = a + 12

loop_drawing(10)

root.mainloop()
