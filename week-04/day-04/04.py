
# 4. Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
power = 1
def f(base, n):
    global power
    if base <1:
        print("your number is not valid")
    else:
        if n <= 0:
            return power
        else:
            power = power * base
            n = n -1
            f(base, n)

            return power

print(f(2, 3))
