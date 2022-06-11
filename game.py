#!/usr/bin/python

"""
Run with ./game.py from same directory
"""

INTRO = """
You are in lockdown.
You've had no contact with man
nor beast for 6 months.
Consequently, you are on the
wrong side of the edge,
and in need of contact.

The room is familiar but your
surroundings seem foreign.

(Press 'h' for hints.)
"""

# DIG = ['dig', 'scrabble']
LOOKAROUND = ['look left', 'look right',
              'look up', 'look down', 'play',
              'look back', 'look forward',
              'check inventory', 'go to sleep',
]

LOOKUPMOGGOFF = """
You look up and see a ceiling fan.
Its metronomic cycle appears to tick off
the minutes days and hours that remain.
Sensing that your emotional state is
growing morbid you decide to look elsewhere.
"""

STATIONS = ['RidgeRacerFM', 'BB King FM',
            'Cool Dude 420', 'Bad Boy Curry'
]

RIDGE_RACER_FM = """
You hear the wet purr of an engine in ready anticipation of the chase. It
recalls the open road, the freedoom.
"""

BB_KING_FM = """
THE SONOROUS TONES OF A BYGONE ERA FILL YOUR DANK GARRET. YOU FIGURE YOU
SHOULD DO SOMETHING SPONTANEOUS AND TACTILE, SUCH AS PLAY THE HARMONICA,
BUT YOU DON'T HAVE YOUR SHEET MUSIC. NEVER ONE FOR IMPROVISATION,
YOU DEFER UNTIL YOU'VE FOUND IT.
"""

COOL_DUDE_420 = """
The reedy, guttural tones of a sexually deprived youth permeate the room.
You can't tell where he's broadcasting from, but from the damp percussion
and muted bass of his voice it would appear it's from unnerground. He
quotes the number of his HAM radio, and begs someone - ANYONE - to contact
him. His intentions are unclear. He might just need a wank. His number is
(01234567890)
"""

BAD_BOY_CURRY = """
A DOMINEERING MALE VOICE EXTOLS THE VIRTUES OF CANNED BAD BOY CURRY,
THE DUBIOUS DELIGHTS OF WHICH YOU, A SURVIVOR, ARE ALL TOO FAMILIAR.
YOU'RE REMINDED OF YOUR NEED FOR A HOME COOKED MEAL. AS YOUR PILLOW BEGINS
TO RESEMBLE A SUCCULENT ROASTED TURKEY,
YOU SLAP YOURSELF AWAKE AND COME TO YOUR SENSES.
"""

class Harmonica:
    key = None
    KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    def set_key(self, key):
        if key in self.KEYS:
            self.key = key
        self.print_key()

    def print_key(self):
        print(self.key)

    def __repr__(self):
        return f'Harmonica - Key {self.key}'

class Telephone:
    number = False

    def check_number(self, number):
        if number == '01234567890':
            self.number = True

    def print_number(self):
        if self.number:
            print('01234567890')
        else:
            print('phone has no usable number')

    def __repr__(self):
        return f'Telephone - number == {self.number}'


class Pc:
    inventory = ['old photo']

    def __init__(self):
        harmonica = Harmonica()
        self.inventory_add(harmonica)

    def inventory_add(self, thing):
        self.inventory.append(thing)

    def inventory_del(self, thing):
        thingidx = self.inventory.index(thing)
        del self.inventory[thingidx]

    def print_inventory(self):
        print(self.inventory)


class Radio:
    station = 'RidgeRacerFM'

    def change_station(self, num):
        num = int(num)
        self.station = STATIONS[num]

    def print_station_txt(self):
        if self.station == STATIONS[0]:
            print(RIDGE_RACER_FM)
        if self.station == STATIONS[1]:
            print(BB_KING_FM)
        if self.station == STATIONS[2]:
            print(COOL_DUDE_420)
        if self.station == STATIONS[3]:
            print(BAD_BOY_CURRY)


def look_left(pc):
    print('You see a radio. It has 4 stations: 0-3.')
    radio  = Radio()
    station_num = input('change station? ')
    if int(station_num) in [0, 1, 2, 3]:
        radio.change_station(station_num)
        radio.print_station_txt()
    else:
        look_left()


def look_right(pc):
    if 'sheet music - key E' in pc.inventory:
        print('you see a harmonic box')
    else:
        pc.inventory_add('sheet music - key E')
        print('found sheet music')
        print('you see a harmonic box')


def look_down(pc):
    print('you see a mobile phone under the table')
    pc.inventory_add('telephone')


def look_up(pc):
    print(LOOKUPMOGGOFF)

   
def look_back(pc):
    print('lean back')

def look_forward(pc):
    print('lean forward')

def play(pc):
    harmonica = pc.inventory[1]
    harmonica.print_key()
    if harmonica.key == 'E':
        print('harmonic box open')
    else:
        print('nothing happens')

def check_inventory(pc):
    print(pc.inventory)
    key = input('set harmonica key: ')
    harmonica = pc.inventory[1]
    harmonica.set_key(key)

FUNCMAP = {
    'look left': look_left,
    'look right': look_right,
    'look up': look_up,
    'look down': look_down,
    'look back': look_back,
    'look forward': look_forward,
    'check inventory': check_inventory,
    'play': play,
}


def do_func(action, pc):
    if action == 'h':
        print(', '.join(LOOKAROUND))
    if action in LOOKAROUND:
        FUNCMAP[action](pc)
   

def process():
    print(INTRO)
    pc = Pc()
    while True:
        action = input()
        if action == LOOKAROUND[-1]:
            break
        do_func(action, pc)
        action = None


if __name__ == '__main__':
    process()