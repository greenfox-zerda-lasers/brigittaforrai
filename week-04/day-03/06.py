# create a 300x300 canvas.
# draw a green 10x10 square to its center.

from tkinter import *

root = Tk()
canvas = Canvas(root, width="300", height="300")
canvas.pack()

a = 10
b = a/2
width = 300
height = 300
square = canvas.create_rectangle(width/2-b, height/2-b, width/2 +b, height/2 +b, fill="green", outline="green")

root.mainloop()
