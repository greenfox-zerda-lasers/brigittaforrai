# create a function that takes a number and divides ten with it and prints the result
# it should print "fail" if it is divided by 0

def divide(number):
    try:
        result = 10 // number
        return result

    except ZeroDivisionError:
        return "fail"

print(divide(0))
