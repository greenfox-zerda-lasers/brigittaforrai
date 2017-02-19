# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
    f = open(file_name, "r")
    text = f.readlines()
    new_text = []
    lenght =len(text)
    x = 1
    y = 0
    for a in range(len(text)-1, -1, -1):
        new_text.append(text[a])

    return "".join(new_text)


print(decrypt('./texts/reversed_zen_order.txt'))
