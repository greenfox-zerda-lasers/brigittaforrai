
lines_number =9

def triangle(lines_number):
    x = 1
    y = 1
        while x < 2 * int(lines_number):
            print(int(lines_number-y) * " ", int(x) * "*")
            x = x + 2
            y = y +1

triangle(lines_number)
