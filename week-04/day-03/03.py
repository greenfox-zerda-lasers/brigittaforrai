# create a 300x300 canvas.
# draw its diagonals in green.

from tkinter import *

window = Tk()

canvas = Canvas(window, width= "300", height ="300")
canvas.pack()

line1 = canvas.create_line(0, 0, 300, 300, fill="green")
line1 = canvas.create_line(0, 300, 300, 0, fill="green")

window.mainloop()
