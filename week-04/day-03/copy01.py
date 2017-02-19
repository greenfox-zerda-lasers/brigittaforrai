from tkinter import *

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()

def square_line(a):
    x = a
    for l in range(0, 19):
        square = canvas.create_rectangle(x, x, x+a, x+a, fill= "purple")
        x = x+a

square_line(10)

root.mainloop()
