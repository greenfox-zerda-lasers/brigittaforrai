# create a 300x300 canvas.
# fill it with four different size and color rectangles.

from tkinter import *

root= Tk()

canvas= Canvas(root, width="300", height="300")
canvas.pack()

width = 300
height= 300
rect1 = canvas.create_rectangle(0, 0, (2/3)*width, width/2, fill="orange", outline="orange")
rect2 = canvas.create_rectangle((2/3)*width, 0, width, height, fill="pink", outline="pink")
rect3 = canvas.create_rectangle(0, height/2, (1/3)*width, height, fill="light blue", outline="light blue")
rect4 = canvas.create_rectangle((1/3)*width, height/2, (2/3)*width, height, fill="magenta", outline="magenta")


root.mainloop()
