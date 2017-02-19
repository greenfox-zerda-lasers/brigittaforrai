import unittest
from task02 import reader

class Test_reader(unittest.TestCase):

    def test_lines_in_testfile(self):
        self.assertEqual(reader("testfile.txt"), 4)

    def test_input_file_does_not_exsist(self):
        self.assertEqual(reader("whatever.txt"), 0)



if __name__ == '__main__':
    unittest.main()
