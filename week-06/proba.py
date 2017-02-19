from tkinter import *

root = Tk()



frame = Frame(root, width=500, height=500)
frame.bind("<Key>", key)
frame.bind("<Down>", callback)
frame.pack()

def key(event):
    print ("pressed", repr(event.char))
    print("helllooo")

def callback(event):
    frame.focus_set()
    print ("clicked at", event.x, event.y)

root.mainloop()
