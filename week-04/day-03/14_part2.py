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
    b = 150
    c = 150
    for i in range(0, 15):
        lines1 = canvas.create_line(a, 150, 150, b, fill="purple")
        lines2= canvas.create_line(b, 150, 150, a,  fill="green")

        lines2= canvas.create_line(a, 150, 150, c,  fill="blue")
        a = a + 10
        b = b +10
        c = c -10

drawing()

root.mainloop()
