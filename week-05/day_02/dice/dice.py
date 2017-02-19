from random import randint
import dice_texts
from tkinter import *
from collections import Counter
import os

class Player:
    def __init__(self):
        self.name =""

class Game:
    def __init__(self, player):
        self.player = player
        self.dies = 10
        self.is_running = False
        self.max_dice = 6
        self.min_dice = 1

        print (dice_texts.intro["welcome"])
        self.player.name = input()
        os.system("clear")
        self.start()

    def start(self):
        self.dies = 10
        self.is_running = True
        self.score= []
        self.gameLoop()

    def gameLoop(self):
        while self.is_running:
            if self.dies == 0:
                os.system("clear")
                print(dice_texts.game["player_score"], sum(self.score))
                self.is_running = False
                self.restart()

            else:
                self.rolling()

    def restart(self):
        while not self.is_running:
            print(dice_texts.game["restart_question"])
            answer_new = str(input("(Y)es or (N)o?"))
            if answer_new == "y":
                self.start()
            elif answer_new == "n":
                print(dice_texts.game["goodbye"])

            else:
                print(dice_texts.game["error_yn"])

    def rolling(self):
        os.system("clear")
        self.number1 = randint(self.min_dice, self.max_dice)
        self.number2 = randint(self.min_dice, self.max_dice)
        self.number3 = randint(self.min_dice, self.max_dice)
        self.rolled_list = [self.number1, self.number2, self.number3]

        if self.dies == 10:
            print(dice_texts.game["start_rolling"])
            roll_dice = str(input())

            if roll_dice == "r" or roll_dice =="R":
                os.system("clear")
                print(dice_texts.game["rolled_numbers"])
                print(self.rolled_list[0], self.rolled_list[1], self.rolled_list[2])
                self.dies = self.dies -1
                self.scoring()
            else:
                self.rolling()
        else:
            print(dice_texts.game["roll_again"].format(self.player.name, self.dies))
            roll_dice = str(input())

            if roll_dice == "r" or roll_dice =="R":
                os.system("clear")
                print(dice_texts.game["rolled_numbers"])
                print(self.rolled_list[0], self.rolled_list[1], self.rolled_list[2])
                self.dies = self.dies -1
                self.scoring()
            else:
                self.rolling()

    def scoring(self):
        print(dice_texts.game["order_numbers"])
        player_order = int(input())
        player_order = str(player_order)
        player_order = list(player_order)
        player_order = [int(x) for x in player_order]

        #self.rolled_list.sort()
        #player_order.sort()

        if Counter(self.rolled_list) == Counter(player_order):
            player_order = [str(x) for x in player_order]
            player_order = ''.join(player_order)
            self.score.append(int(player_order))
        else:
            print(dice_texts.game["wrong_number_order"])

player = Player()
dice_game = Game(player)
