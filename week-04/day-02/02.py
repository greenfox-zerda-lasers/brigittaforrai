class Rectangle():

    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.x2 = x + width
        self.y2 = y + height

    def is_over(self, other_rect):
        return other_rect.x2 > self.x and other_rect.x < self.x2 and other_rect.y2 > self.y and other_rect.y < self.y2

rectangle1 = Rectangle(-10, -9, 100, 100)
rectangle2 = Rectangle(100, 0, 5, 5)

print(rectangle1.is_over(rectangle2))
