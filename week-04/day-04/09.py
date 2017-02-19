# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

a = 0
string = ""
def separate(text):
    global a
    global string
    l = len(text)-1
    if a > l:
        return string
    elif a == l:
        string = string + text[a]
        return string
    else:
        string = string + text[a] + "*"
        a = a + 1
        separate(text)
        return string

print(separate("helloo-helloo you many little stars"))
