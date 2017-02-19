# reproduce this: [https://github.com/greenfox-velox/velox-syllabus/blob/master/week-04/3-graphics/workshop/r1.png]
# divide the canvas into 4 parts and repeat the pattern.
# reproduce this: [https://github.com/greenfox-velox/velox-syllabus/blob/master/week-04/3-graphics/workshop/r2.png]
# can you make the colors change? make every line a different color.


from tkinter import *

root = Tk()
canvas= Canvas(root, width="300", height="300")
canvas.pack()

def drawing():
    a = 0
    for i in range(0, 15):
        right_lines = canvas.create_line(a, 0, 300, a, fill="purple")
        left_lines = canvas.create_line(0, a, a, 300, fill="green")
        a = a + 20

drawing()

root.mainloop()
