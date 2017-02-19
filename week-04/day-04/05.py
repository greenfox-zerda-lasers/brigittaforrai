# 5. We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies
# recursively (without loops or multiplication).
sum = 0
def bunnies(num):
    global sum
    ears = 2
    if num < 1:
        print("there's no bunny, there's no ear")
    else:
        if num-1 <1:
            sum = sum + ears
            return sum
        else:
            sum = sum +ears
            bunnies(num-1)
            return sum


print(bunnies(10))
