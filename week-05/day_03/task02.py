# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists.



def reader(filename):
    try:
        fw = open(filename)
        lines = fw.readlines()
        return len(lines)
    except FileNotFoundError:
        return 0

print(reader("testfile.txt"))
