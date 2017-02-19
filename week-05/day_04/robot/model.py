
class Robot:

    def __init__(self):
        self.name = "Robi"
        self.memory = ["This is my first memory.", "My name is Robi the robot."]
        self.moods = ["angry", "happy", "sad", "funny"]
        self.positionX = 0
        self.positionY = 0


    def memories(self, new_memory):
        self.memory.append(new_memory)

    def positions(self, new_psitionX, new_positionY):
        self.positionX = new_psitionX
        self.positionY = new_positionY
