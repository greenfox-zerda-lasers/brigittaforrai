# Create a function that prints a triangle like this:
#   *
#   **
#   ***
#   ****
#   *****
#   ******
# It should take a number as parameter that describes how many lines the triangle has

lines_number = 6

def triangle(lines_number):
    x = 1
    while x <= lines_number:
        print(int(lines_number-(lines_number-x)) * "*")
        x = x + 1

triangle(lines_number)
