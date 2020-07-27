const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
// const farmAnimals = 'cow horse sheep pig chicken'
const farmAnimalsArray = farmAnimals.split(' ')
const moo = farmAnimalsArray[0]
const neigh = farmAnimalsArray[1]
const baa = farmAnimalsArray[2]
const oink = farmAnimalsArray[3]
const cluck = farmAnimalsArray[4]

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
const Bessie = moo
const Dolly = baa
const Babe = oink
const Little = cluck

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const black_and_white = Bessie
const black = Dolly
const pink = oink

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const red = colors[0]
const orange = colors[1]
const yellow = colors[2]
const green = colors[3]
const blue = colors[4]
const indigo = colors[5]
const violet = colors[6]

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const r = red
const o = orange
const y = yellow
const g = green
const b = blue
const v = violet

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = indigo
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const {name, color, song, job} = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
