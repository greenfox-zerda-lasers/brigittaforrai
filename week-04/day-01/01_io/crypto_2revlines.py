# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    f = open(file_name, "r")
    line = f.readlines()
    result = ""
    for a in line:
        result = result + a[-2::-1] +"\n"
    return result

print(decrypt('./texts/reversed_zen_lines.txt'))
