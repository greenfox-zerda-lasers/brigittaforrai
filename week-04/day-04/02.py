# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

list=[]
a = 0
def f(n):
    global a
    a = a +1
    if a +1 >= n:
        list.append(n)
        return list
    else:
        list.append(a)
        f(n)
        return list




print(f(15))
