# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.
new_string = ""
a = 0
def x_converter(text):
    global a
    global new_string
    l = len(text)-1
    if a > l:
        return new_string
    else:
        if text[a] == "x".lower():
            new_string = new_string + "y"
            a = a+1
            x_converter(text)
            return new_string

        else:
            new_string = new_string + text[a]
            a = a+1
            x_converter(text)
            return new_string






print(x_converter("xxxXYyyZhello_helloXx"))
