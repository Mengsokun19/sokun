#!/usr/bin/env node
// const clearConsole = require('clear-any-console')
const pkgJson = require('./package.json')
const welcome = require('cli-welcome')

// clearConsole()
welcome({
    title: pkgJson.name,
    tagLine: `Hello, Nice to Meet you.`,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

// console.log(`
//     NAME: ${pkgJson.name},
//     VERSION: ${pkgJson.version},
//     DESCRIPTION: ${pkgJson.description}
// `)

console.log(`
Veng Mengsokun - Hello, Welcome to Bad Dad Jokes From the internet.

"I'm afraid for the calendar. Its days are numbered."
"My wife said I should do lunges to stay in shape. That would be a big step forward."
"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"
"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera."
"What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."
"What do you call a fish wearing a bowtie?" "Sofishticated."
"How do you follow Will Smith in the snow?" "You follow the fresh prints."
"If April showers bring May flowers, what do May flowers bring?" "Pilgrims."
"I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."
"What do you call a factory that makes okay products?" "A satisfactory."
"Dear Math, grow up and solve your own problems."
"What did the janitor say when he jumped out of the closet?" "Supplies!"
"Have you heard about the chocolate record player? It sounds pretty sweet."
"What did the ocean say to the beach?" "Nothing, it just waved."
"Why do seagulls fly over the ocean?" "Because if they flew over the bay, we'd call them bagels."
"I only know 25 letters of the alphabet. I don't know y."
"How does the moon cut his hair?" "Eclipse it."
"What did one wall say to the other?" "I'll meet you at the corner."
"What did the zero say to the eight?" "That belt looks good on you."
"A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'"
"Where do fruits go on vacation?" "Pear-is!"
"I asked my dog what's two minus two. He said nothing."
"What did Baby Corn say to Mama Corn?" "Where's Pop Corn?"
"What's the best thing about Switzerland?" "I don't know, but the flag is a big plus."
"What does a sprinter eat before a race?" "Nothing, they fast!"
"Where do you learn to make a banana split?" "Sundae school."
"What has more letters than the alphabet?" "The post office!"
"Dad, did you get a haircut?" "No, I got them all cut!"
"What do you call a poor Santa Claus?" "St. Nickel-less."
"I got carded at a liquor store, and my Blockbuster card accidentally fell out. The cashier said never mind."
"Where do boats go when they're sick?" "To the boat doc."
"I don't trust those trees. They seem kind of shady."
"My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!"
"How do you get a squirrel to like you? Act like a nut."
"Why don't eggs tell jokes? They'd crack each other up."
"I don't trust stairs. They're always up to something."
"What do you call someone with no body and no nose? Nobody knows."
"Did you hear the rumor about butter? Well, I'm not going to spread it!"
"Why couldn't the bicycle stand up by itself? It was two tired."
"What did one hat say to the other?" "Stay here! I'm going on ahead."
"Why did Billy get fired from the banana factory? He kept throwing away the bent ones."
"Dad, can you put my shoes on?" "No, I don't think they'll fit me."
"Why can't a nose be 12 inches long? Because then it would be a foot."
"What does a lemon say when it answers the phone?" "Yellow!"
"This graveyard looks overcrowded. People must be dying to get in."
"What kind of car does an egg drive?" "A yolkswagen."
"Dad, can you put the cat out?" "I didn't know it was on fire."
"How do you make 7 even?" "Take away the s."
"How does a taco say grace?" "Lettuce pray."
"What time did the man go to the dentist? Tooth hurt-y."
"Why didn't the skeleton climb the mountain?" "It didn't have the guts."
"What do you call it when a snowman throws a tantrum?" "A meltdown."
"How many tickles does it take to make an octopus laugh? Ten tickles."
"I have a joke about chemistry, but I don't think it will get a reaction."
"What concert costs just 45 cents? 50 Cent featuring Nickelback!"
"What does a bee use to brush its hair?" "A honeycomb!"
"How do you make a tissue dance? You put a little boogie in it."
"Why did the math book look so sad? Because of all of its problems!"
"What do you call cheese that isn't yours? Nacho cheese."
"My dad told me a joke about boxing. I guess I missed the punch line."
"What kind of shoes do ninjas wear? Sneakers!"
"How does a penguin build its house? Igloos it together."
"How did Harry Potter get down the hill?" "Walking. JK! Rowling."

`)
