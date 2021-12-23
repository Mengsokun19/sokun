#!/usr/bin/env node
// const clearConsole = require('clear-any-console')
const pkgJson = require('./package.json')
const welcome = require('cli-welcome')
const log = console.log
const alerts = require('my-cli-alerts')
const checkNode = require('cli-check-node')

checkNode('10', { fail: false })

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

log(`
Veng Mengsokun - Hello, Welcome to Bad Dad Jokes From the internet.

"I'm afraid for the calendar. Its days are numbered."
"My wife said I should do lunges to stay in shape. That would be a big step forward."
"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"
"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera."
"What do a tick and the Eiffel Tower have in common?" "They're both Paris sites."
"What do you call a fish wearing a bowtie?" "Sofishticated."
"How do you follow Will Smith in the snow?" "You follow the fresh prints."
"If April showers bring May flowers, what do May flowers bring?" "Pilgrims."

`)

log(`
success  Thank for checking my CLI.
info   I'm creating a CLI from Node JS.
warnning  Please be yourself.
error  Sorry but not.

`)

// alerts({
//     type: 'warning',
//     msg: 'This is a new cli',
//     name: 'Hello',
// })
