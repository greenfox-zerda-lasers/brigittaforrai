top = "___________________________________\n`._______________________________.'"
level ="   || ||       || ||       || ||"
level_x ="   || || [_x_] || ||       || ||"
level_empty ="   || || [_ _] || ||       || ||"
level_0 ="  _||_||_______||_||_______||_||_"
level_0_empty= "  _||_||_[_ _]_||_||_______||_||_"
level_0_x ="  _||_||_[_X_]_||_||_______||_||_"
bottom = ".'_______________________________`."

class Art:
    def __init__(self):
        pass

    def print_building(self, button, building_levels, people):
        print("\n", people, "people are in the elevator \n")
        # floor 0 with people
        if button == 0 and people > 0:
            print(top)
            for e in range(0, building_levels):
                print(level)
            print(level_0_x)
            print(bottom)
        # floor x with people
        elif button > 0 and people > 0:
            print(top)
            for e in range(0, building_levels-button):
                print(level)
            print(level_x)
            for e in range(0, button-1):
                print(level)
            print(level_0)
            print(bottom)
        # floor 0 without people
        elif button == 0 and people == 0:
            print(top)
            for e in range(0, building_levels):
                print(level)
            print(level_0_empty)
            print(bottom)
        # floor x without people
        elif button > 0 and people == 0:
            print(top)
            for e in range(0, building_levels-button):
                print(level)
            print(level_empty)
            for e in range(0, button-1):
                print(level)
            print(level_0)
            print(bottom)
