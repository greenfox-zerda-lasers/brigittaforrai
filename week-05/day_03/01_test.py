import unittest
from task01 import divide

class TestTask01(unittest.TestCase):

    def test_input_is_number(self):
        self.assertEqual(divide(2), 5)

    def test_input_is_zero(self):
        self.assertEqual(divide(0), "fail")

    def test_input_is_integer(self):
        self.assertIsInstance(divide(5), int)

if __name__ == '__main__':
    unittest.main()
