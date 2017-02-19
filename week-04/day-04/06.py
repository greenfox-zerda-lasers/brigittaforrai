
# 6. We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or
# multiplication).

sum = 0
def ears(number):
    global sum

    if number < 1:
        print("no bunny, no ear!")
    else:
        if number -1 == 0:
            sum = sum + 2
            return sum
        elif number%2 != 0:
            sum = sum + 2
            ears(number-1)
            return sum
        elif number%2 == 0:
            sum = sum + 3
            ears(number-1)
            return sum




print(ears(20))
