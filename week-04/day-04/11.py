from tkinter import *

root = Tk()
size = 600
canvas = Canvas(root,width=size, height=size, bg="yellow")
canvas.pack()

def draw(x,y,size):
    canvas.create_rectangle(x,y,x+size,y+size)
    if size > 5:
        draw(x,y+size/3,size/3)
        draw(x+(size*(2/3)),y+size/3,size/3)
        draw(x+size/3,y,size/3)
        draw(x+size/3,y+(size*(2/3)),size/3)

draw(0,0,600)

root.mainloop()
