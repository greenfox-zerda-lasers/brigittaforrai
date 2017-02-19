b = 1

for x in range(1, 10):
    if x <= 5:
        print("* " * x)
    elif x > 5:
        print((x - 2 * b) * "* " )
        b = b + 1
