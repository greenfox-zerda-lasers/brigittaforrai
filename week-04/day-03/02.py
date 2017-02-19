# create a 300x300 canvas.
# draw a box that has different colored lines on each edge.

from tkinter import *

window = Tk()

canvas = Canvas(window, width ="300", height="300")
canvas.pack()

#box = canvas.create_rectangle(100, 100, 200, 200)
lineTop = canvas.create_line(100, 100, 200, 100, fill="purple")
lineRight = canvas.create_line(200, 100, 200, 200, fill="sea green")
lineTop = canvas.create_line(200, 200, 100, 200, fill="blue")
lineTop = canvas.create_line(100, 200, 100, 100, fill="magenta")

window.mainloop()
