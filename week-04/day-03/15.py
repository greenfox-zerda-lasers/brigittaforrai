# create a 300x300 canvas.
# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]


from tkinter import *

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()

box_list = [[10, 10], [290,  10], [290, 290], [10, 290]]

def function(box_list):
    for i in range(0, len(box_list)):
        if i == len(box_list)-1:
            next_i = 0
        else:
            next_i = i +1

        x1 = box_list[i]
        y1 = box_list[i]
        x2 = box_list[next_i]
        y2 = box_list[next_i]

        line2= canvas.create_line(x1[0], y1[1], x2[0], y2[1], fill="green")

function (box_list)

root.mainloop()
