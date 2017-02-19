# Create a function that prints a diamond like this:
#       *
#      ***
#     *****
#    *******
#   *********
#  ***********
#   *********
#    *******
#     *****
#      ***
#       *
#
# It should take a number as parameter that describes how many lines the diamond has

#EZ A SIMA HAROMSZOGES MEGOLDASA


lines_number =9

def triangle(lines_number):
    x = 1
    y = 1
        while x < 2 * int(lines_number):
            print(int(lines_number-y) * " ", int(x) * "*")
            x = x + 2
            y = y +1

triangle(lines_number)
