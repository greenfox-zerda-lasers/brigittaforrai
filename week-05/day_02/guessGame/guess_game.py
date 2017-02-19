import random
import texts

# Features
#  - get name from player (Y)
#  - handle inputs (4 occasions) (Y)
#  - track guesses (Y)
#  - handle restart (Y)
#  - display messages (no exceptions)

# Game loop

class Player:
    def __init__(self):
        self.name = ''
        self.stats = [] #not used in current implementation

class Game:
    def __init__(self, player):
        self.player = player
        self.is_running = False
        self.bottom_range = 0
        self.top_range = 100
        self.random_number = -1
        self.tries = 10

        print ( texts.intro['game_intro'] )
        self.player.name = input()
        self.start()

    def start(self):
        self.tries = 10
        self.is_running = True
        self.random_number = random.randint( self.bottom_range, self.top_range )
        print( texts.intro['welcome_msg'].format( self.player.name, self.tries, self.bottom_range, self.top_range ) )

        # START OF MAIN LOOP
        self.gameLoop()

    def gameLoop(self):
        while self.is_running:
            if self.tries == 0:
                print( texts.loop['player_lost'] )
                self.is_running = False
                self.restart()
            else:
                self.tries -= 1
                self.get_guesses()

    def restart(self):
        while not self.is_running:
            print( texts.loop['restart_question'] )
            answer = str(input('(Y)es or (N)o?'))
            if answer.lower() == 'y':
                self.start()
            elif answer.lower() == 'n':
                print( texts.loop['see_ya'] )
                break # END OF GAME
            else:
                print( texts.loop['false_yn'] )

    def get_guesses(self):
        guess = int(input( texts.loop['number_question'] ))

        if guess == self.random_number:
            print( texts.loop['player_won'].format( self.random_number ) )
            self.restart()
        else:
            if self.tries == 1:
                smaller_key = 'guess_smaller_final'
                bigger_key = 'guess_bigger_final'
            else:
                smaller_key = 'guess_smaller'
                bigger_key = 'guess_bigger'

            if self.tries > 0:
                if guess < self.random_number:
                    print( texts.loop[ smaller_key ].format( self.tries ) )
                else:
                    print( texts.loop[ bigger_key ].format( self.tries ) )

player = Player()
guess_game = Game( player )
