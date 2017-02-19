# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.


a = 0
new_string = ""

def remove_x(text):
    global a
    global new_string
    l = len(text)-1
    if a > l:
        return new_string
    else:
        if text[a] == "x" or text[a] == "X":
            new_string = new_string
            a = a +1
            remove_x(text)
            return new_string

        else:
            new_string = new_string + text[a]
            a = a+1
            remove_x(text)
            return new_string

print(remove_x("hellxXoooXxxx"))
