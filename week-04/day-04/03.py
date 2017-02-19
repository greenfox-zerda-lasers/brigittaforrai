# 3. Given a non-negative int n,
# return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
# while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

sum = 0
def f(n):
    global sum
    if int(n)< 0:
        print("give a number which is bigger than 0")
    else:
        if n <=10:
            sum = sum +n
            return sum
        else:
            sum = sum + n % 10
            f(n // 10)
            return sum




print(f(566))
