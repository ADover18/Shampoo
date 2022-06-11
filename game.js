// SELECTING ELEMENTS

const body = document.querySelector("body");

const storyEl = document.querySelector(".story");
const choiceBtns = document.querySelectorAll(".choice");
const choice1Btn = document.querySelector(".choice--1");
const choice2Btn = document.querySelector(".choice--2");
const choice3Btn = document.querySelector(".choice--3");
const choice4Btn = document.querySelector(".choice--4");
const warningMsg = document.querySelector(".warning-message");

// MAD TRUTH ENDING
let numberOfCigarettesSmokes = 0;

// DELIRIOUS ENDING
let bloodLossCount = 0;

// IF NEITHER IS HIGH ENOUGH GO FOR BORING ENDING

let storyNum = 0;

let storyChoice = null;

let completed = 0;

const STORY1 =
  "Words like 'cold' and 'serrated' came to mind as the last ridge of the steel left my belly. By way of a goodbye, the blood I knew was red ran down the jeans I knew were blue, and there wasn't much I could think to say besides, 'oh, well that's that then'. I felt a someone's breath pollute the air I had no choice but than to breathe, and sank to the floor. Braids of what I knew must be the rug bristled my cheek, and all the fury in me started spilling like the proverbial. It was a poor end to a poor valentines, and if it wasn't love that blinded me, it was fury. I heard the door slam shut, wheels spin in gravel, and rubber peel of into what I suspected must be night. Son-of-a-bitch. I figured I had a good half hour before I bled out, and no name to put to the face that would be the last I'd never see. Son-of-a-bitch. Time enough to think.";

const S1_CHOICE1 = "Bleed a little more";
const S1_CHOICE2 = "Examine the damage ";
const S1_CHOICE3 = "Julia";
const S1_CHOICE4 = "Light a cigarette";

const STORY1_C1 =
  "It's surprisingly easy to lose blood, once you get going. They do say if you love something, you should set it free. The speed I was losing it, it was like the stuff had been trying to get away from me for some time. Guess I'd better use what little I've got left wisely. Think fast, dammit - fast as blood can run.";

const STORY1_C2 =
  "I put my hand in my pocket and felt the space my wallet should be. Still present - and as empty as it had been the day before. The roll-call continued - stubble, present. Shirt, present, though dyed what I could only imagine a lurid shade of crimson. I breathed in through my nose and the rising damp from the downstairs bathroom reassured me with familiar connotations of penury and destitution. All of that was maybe though - and it didn't stop the bleeding, or give me a name to put to that son-of-a-bitch's face.";

const STORY1_C3 =
  // JULIA
  // QUEUE SOUND EFFECT AND VISUAL
  "I wanted a wife who'd make me eggs in the morning. The only thing she served me in the 8 years we shared a bed was papers. Slipped them in my hands one day instead of the tabloids. I should've listened to my mother. I'd recount her good advice, were it not that I hadn't listened to it in the first place. That was 3 years ago - I was starting to lose it by then, and when I watched her walk away she was a smudge of colour exiting the room at high speed. I'd pinched my nose and fumbled for something crystal and something wet to put inside it. I wonder where she could be - and whose bed she's warming. It could be blood loss, but I'm warming to the idea of paying her one last visit. Let's say I get to my feet and catch my bearings. The dead don't walk - it would prove I'm still alive.";

const STORY1_C4 =
  // LIGHT A CIGARETTE. SENSE OF SMELL, an accompanying image?
  "The old familiar battered box - I rattled it in my hand. The son - or daughter - of a bitch had been magnanimous enough to leave me one last cigarette for my trouble. The zippo I lit the papers with was still where I'd left it, cold metal above where my heart should be. After twenty long and principally hard years of smoking the damn things, I had a sense of how far I should hold the flame from my expectant lips to hit the tip. I inhaled smoke about as quick as my body exhaled blood, and I'd be lying if I told you it wasn't about the best damn thing I'd tasted in days. Hemingway said a bottle of red wine was a good friend. A cigarette is a good priest. I could read my last rites in the smoke I couldn't see. Hurry now. Not much longer. ";

function displayGameLoop(story, choices) {
  storyNum++;
  storyEl.innerText = story;
  choices.forEach((choice, i) => {
    choiceBtns[i].innerText = choice;
  });
}

displayGameLoop(STORY1, [S1_CHOICE1, S1_CHOICE2, S1_CHOICE3, S1_CHOICE4]);

choice1Btn.addEventListener("click", function () {
  warningMsg.innerText = "";
  storyChoice = 1;
  if (storyNum === 1) {
    choice1Btn.style.display = "none";
    choice2Btn.style.display = "";
    choice3Btn.style.display = "";
    choice4Btn.style.display = "";
    bloodLossCount++;
    storyEl.innerText = STORY1_C1;
  }
  if (storyNum === 2) {
    choice1Btn.style.display = "none";
    choice2Btn.style.display = "";
    storyEl.innerText = STORY2_C1;
  }
  if (storyNum === 3) {
    bloodLossCount++;
  }
  if (bloodLossCount > 0)
    warningMsg.innerText = "Youre losing alot of blood right now.";
});

choice2Btn.addEventListener("click", function () {
  warningMsg.innerText = "";
  storyChoice = 2;
  if (storyNum === 1) {
    choice1Btn.style.display = "";
    choice2Btn.style.display = "none";
    choice3Btn.style.display = "";
    choice4Btn.style.display = "";
    storyEl.innerText = STORY1_C2;
  }
});

choice3Btn.addEventListener("click", function () {
  warningMsg.innerText = "";
  storyChoice = 3;
  if (storyNum === 1) {
    choice2Btn.style.display = "";
    choice1Btn.style.display = "";
    choice3Btn.style.display = "none";
    choice4Btn.style.display = "none";
    storyEl.innerText = STORY1_C3;
    displayGameLoop(STORY1_C3, [S2_CHOICE1, S2_CHOICE2]);
  }
});

choice4Btn.addEventListener("click", function () {
  warningMsg.innerText = "";
  storyChoice = 4;
  if (storyNum === 1) {
    choice2Btn.style.display = "";
    choice1Btn.style.display = "";
    choice3Btn.style.display = "";
    choice4Btn.style.display = "none";
    storyEl.innerText = STORY1_C4;
    numberOfCigarettesSmokes++;
  }
});

const STORY2 = S1_CHOICE3;

const S2_CHOICE1 = "Work?";
const S2_CHOICE2 = "Play?";

const STORY2_C1 =
  "I was a salesman. In fact, you might say the only thing keeping me a man, at least insofar as we still suppose that word has a meaning, was sales. For that reason I tend not to talk about what I sold. But I figure, seeing as we're a couple of regular folks with nothing finer to do but talk, I may as well spill. I sold shampoo. I joke that what I made went down the drain, whether I gained or lost. Being a salesmen, shit like that makes me feel fuzzy inside to say, but rarely gets a laugh. A shampoo salesmen has no more and no fewer enemies than anyone, I suppose. I'm not setting the room on fire at dinner parties, sure, but I make out alright. Not that I've attended many lately. When you need to hold someone's hand to take a piss, making friends becomes kind of difficult. I've been signed on the brew for the past year with nothing but cassettes of Raymond Chandler for company. And if anyone remembers Employee No. 376 who walked out the door with a stick in one hand and his company stapler in the other - well, I can't think they'd have hatred in their heart. Could they? I mean, who shanks someone for being a former shampoo salesmen? Not likely.";

const STORY2_C2 = "Play. ";

const S3_CHOICE1 = "Investigate What he says";
const S3_CHOICE2 = "Carry on";

// const LOOK_AROUND = [
//   "look left",
//   "look right",
//   "look up",
//   "look down",
//   "play",
//   "look back",
//   "look forward",
//   "check inventory",
//   "go to sleep",
// ];

// const LOOK_UP_MOG_OFF =
//   "You look up and see a ceiling fan. Its metronomic cycle appears to tick off the minutes days and hours that remain. Sensing that your emotional state is growing morbid you decide to look elsewhere.";

// const STATIONS = [
//   "RidgeRacerFM",
//   "BB King FM",
//   "Cool Dude 420",
//   "Bad Boy Curry",
// ];

// const RIDGE_RACER_FM =
//   " You hear the wet purr of an engine in ready anticipation of the chase. It recalls the open road, the freedom. ";

// const BB_KING_FM =
//   " THE SONOROUS TONES OF A BYGONE ERA FILL YOUR DANK GARRET. YOU FIGURE YOU SHOULD DO SOMETHING SPONTANEOUS AND TACTILE, SUCH AS PLAY THE HARMONICA, BUT YOU DON'T HAVE YOUR SHEET MUSIC. NEVER ONE FOR IMPROVISATION, YOU DEFER UNTIL YOU'VE FOUND IT. ";

// const COOL_DUDE_420 =
//   " The reedy, guttural tones of a sexually deprived youth permeate the room. You can't tell where he's broadcasting from, but from the damp percussion and muted bass of his voice it would appear it's from underground. He quotes the number of his HAM radio, and begs someone - ANYONE - to contact him. His intentions are unclear. He might just need a wank. His number is (01234567890) ";

// const BAD_BOY_CURRY =
//   " A DOMINEERING MALE VOICE EXTOLS THE VIRTUES OF CANNED BAD BOY CURRY, THE DUBIOUS DELIGHTS OF WHICH YOU, A SURVIVOR, ARE ALL TOO FAMILIAR. YOU'RE REMINDED OF YOUR NEED FOR A HOME COOKED MEAL. AS YOUR PILLOW BEGINS TO RESEMBLE A SUCCULENT ROASTED TURKEY, YOU SLAP YOURSELF AWAKE AND COME TO YOUR SENSES. ";

// class Harmonica {
//   key = null;
//   KEYS = ["A", "B", "C", "D", "E", "F", "G"];

//   printKey() {
//     const keyEl = document.createTextNode(key);
//     story.appendChild(keyEl);
//   }

//   setKey(key) {
//     if (key in this.KEYS) this.key = key;
//     this.printKey();
//   }
// }

// class Telephone {
//   number = false;

//   checkNumber(number) {
//     if (number === "01234567890") {
//       this.number = True;
//     }
//   }
//   printNumber() {
//     if (this.number) {
//       const numEl = document.createTextNode("01234567890");
//       story.appendChild(numEl);
//     } else {
//       const numError = document.createTextNode("01234567890");
//       story.appendChild(numError);
//     }
//   }
// }

// class Pc {
//   inventory = ["old photo", new Harmonica()];

//   inventoryAdd(thing) {
//     this.inventory.push(thing);
//   }
//   inventoryDel(thing) {
//     this.inventory = this.inventory.filter((item) => item !== thing);
//   }
//   printInventory() {
//     console.log(this.inventory);
//   }
// }

// class Radio {
//   station = "RidgeRacerFM";

//   changeStation(num) {
//     num = Math.floor(+num);
//     this.station = STATIONS[num];
//   }

//   printStationTxt() {
//     if (story.lastChild) story.removeChild(story.lastChild);
//     let stationEl = document.createElement("p");
//     if (this.station === STATIONS[0]) stationEl.innerText = RIDGE_RACER_FM;
//     if (this.station === STATIONS[1]) stationEl.innerText = BB_KING_FM;
//     if (this.station === STATIONS[2]) stationEl.innerText = COOL_DUDE_420;
//     if (this.station === STATIONS[3]) stationEl.innerText = BAD_BOY_CURRY;
//     story.appendChild(stationEl);
//   }
// }

// const lookLeft = (pc) => {
//   story.innerHTML = "You see a radio. It has 4 stations: 0-3.";
//   radio = new Radio();
//   question.innerHTML = "change station? ";
//   let stationNum;
//   submit.addEventListener("click", function () {
//     stationNum = input.value;
//     if (Math.floor(+stationNum) in [0, 1, 2, 3]) {
//       radio.changeStation(stationNum);
//       radio.printStationTxt();
//     } else {
//       lookLeft();
//     }
//   });
// };

// const lookRight = (pc) => {
//   if ("sheet music - key E" in pc.inventory) {
//     story.innerHTML = "you see a harmonic box";
//   } else {
//     pc.inventoryAdd("sheet music - key E");
//     story.innerHTML = "found sheet music";
//     story.innerHTML = "you see a harmonic box";
//   }
// };

// const lookDown = (pc) => {
//   story.innerHTML = "you see a mobile phone under the table";
//   pc.inventoryAdd("telephone");
// };

// const lookUp = (pc) => {
//   story.innerHTML = LOOK_UP_MOG_OFF;
// };

// const lookBack = (pc) => {
//   story.innerHTML = "lean back";
// };

// lookForward = (pc) => {
//   story.innerHTML = "lean forward";
// };

// play = (pc) => {
//   harmonica = pc.inventory[1];
//   harmonica.print_key();
//   if (harmonica.key == "E") story.innerHTML = "harmonic box open";
//   else story.innerHTML = "nothing happens";
// };

// checkInventory = (pc) => {
//   story.innerHTML = `${pc.inventory}<br>set harmonica key:`;
//   harmonica = pc.inventory[1];
//   input.addEventListener("click");
//   harmonica.set_key(key);
// };

// FUNC_MAP = {
//   "look left": lookLeft,
//   "look right": lookRight,
//   "look up": lookUp,
//   "look down": lookDown,
//   "look back": lookBack,
//   "look forward": lookForward,
//   "check inventory": checkInventory,
//   play: play,
// };

// doFunc = (action, pc) => {
//   //   if (action === "h") story.innerHTML = ", ".join(LOOK_AROUND);
//   if (action === "h") story.innerHTML = LOOK_AROUND;
//   if (LOOK_AROUND.includes(action)) {
//     FUNC_MAP[action](pc);
//   }
// };

// let action;
// story.innerHTML = INTRO;
// let pc = new Pc();
// submit.addEventListener("click", function (event) {
//   action = input.value;
//   doFunc(action, pc);
//   action = null;
// });

// process = () => {
//   pc = new Pc();

//   while (true) {
//     if (action == LOOK_AROUND[-1]) return;

//   }
// };

// process();

// const flashRed = () => {
//   body.style.backgrounfColor = "black";
//   let start = Date.now();
//   let timer = setInterval(function () {
//     console.log("Hello");
//     const timePassed = Date.now() - start;
//     console.log(body.style.backgroundColor);
//     body.style.backgroundColor =
//       body.style.backgroundColor === "white" ? "red" : "white";
//     if (timePassed >= 2000) {
//       clearInterval(timer);
//       return;
//     }
//   }, 200);
// };

// flashRed();

// Lighting cigareetes as a choice leads to chaos

// 3 Game endings

// 1. Completely Delirious
// 2. Mad true ending (lead to through more cigarettes). Choose to call for an ambulance or call the press to reveal company secrets.
// 3. Never Find out who does it

// 4. Blood Loss Ending. The company is the illuminaty and using pheramones to control people and reinforce hereonormaivity - pay your taxes, mow your lawn type shit

// Possible Vague objects to be significant in the story
// 1. Papers
// 2. Item of clothing
// 3. Zippo lighter
// 4. Serrated blade
// 5. Red herring assailant (perpetrator) who can't drive
// 6. Cigarrettes

// Earlier on in the story he chooes to burns papers

// Papers could be the divorce papers
// Papers could be the manilla folder papers (The ones to go to the press to expose the company)

//1. Shampoo ending where he knew too much
// 2. Ending         one ending where it appears as if Julia has hired someone to kill him because he wouldn't sign the divorce papers.
// he was blinded because he saw too much - that's the shampoo ending, where it transpires that he was killed due to his inability to forget the corruption of the shampoo company - the user is presented with a choice to either call for an ambulance, or for the narrator to accept death but call a friend, who will send the manilla folder to the shpaggedi meatbaws

//2. Call for an ambulance.... Dont get info

//

// Yakusa take a finger. He was blinded because he saw too much

// Smokes cigaretes to kill sense of smell

// Mind control shampoo affecting the people.

// Shampoo is keeping everything under control. Making people pay their taxes etc.

// Shampoo company never hires bald people

// Finds secret society of bald people

// Blood loss accompanied by taking pills
