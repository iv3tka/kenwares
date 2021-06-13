const Discord = require ('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
require('dotenv').config();
const prefix = '!';
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const cooldowns = new Map();
const memberCounter = require('./counters/member-counter');

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.DISCORD_TOKEN);