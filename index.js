import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config();
import fs from 'fs'

// Badge code
const Discord_Employee = 1;
const Partnered_Server_Owner = 2;
const HypeSquad_Events = 4;
const Bug_Hunter_Level_1 = 8;
const House_Bravery = 64;
const House_Brilliance = 128;
const House_Balance = 256;
const Early_Supporter = 512;
const Bug_Hunter_Level_2 = 16384;
const Early_Verified_Bot_Developer = 131072;

// Badge checked
let badge_Discord_Employee,
badge_Partnered_Server_Owner,
badge_HypeSquad_Events,
badge_Bug_Hunter_Level_1,
badge_House_Bravery,
badge_House_Brilliance,
badge_House_Balance,
badge_Early_Supporter,
badge_Bug_Hunter_Level_2,
badge_Early_Verified_Bot_Developer;

// Token
const token = process.env.TOKEN;

// User ID
let id = '';

// API call
const response = await fetch(`https://discord.com/api/v9/users/${id}`, {
    headers: {
        Authorization: `Bot ${token}`
    }
})

if (!response.ok) throw new Error(`Error status code: ${response.status}`)

let user = await response.json();

const flags = user.public_flags;

// Conditions for checking user's badges
if ((flags & Discord_Employee) == Discord_Employee){
    badge_Discord_Employee = "true";
} else{
    badge_Discord_Employee = "false";
}

if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner){
    badge_Partnered_Server_Owner = "true";
} else{
    badge_Partnered_Server_Owner = "false";
}

if ((flags & HypeSquad_Events) == HypeSquad_Events){
    badge_HypeSquad_Events = "true";
} else{
    badge_HypeSquad_Events = "false";
}

if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1){
    badge_Bug_Hunter_Level_1 = "true";
} else{
    badge_Bug_Hunter_Level_1 = "false";
}

if ((flags & House_Bravery) == House_Bravery){
    badge_House_Bravery = "true";
} else{
    badge_House_Bravery = "false";
}

if ((flags & House_Brilliance) == House_Brilliance){
    badge_House_Brilliance = "true";
} else{
    badge_House_Brilliance = "false";
}

if ((flags & House_Balance) == House_Balance){
    badge_House_Balance = "true";
} else{
    badge_House_Balance = "false";
}

if ((flags & Early_Supporter) == Early_Supporter){
    badge_Early_Supporter = "true";
} else{
    badge_Early_Supporter = "false";
}

if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2){
    badge_Bug_Hunter_Level_2 = "true";
} else{
    badge_Bug_Hunter_Level_2 = "false";
}

if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer){
    badge_Early_Verified_Bot_Developer = "true";
} else{
    badge_Early_Verified_Bot_Developer = "false";
}

let avatar;
let banner;
let bannerColor;

// Others conditions
if (user.avatar != null) {
    avatar = `https://cdn.discordapp.com/avatars/${id}/${user.avatar}`;
} else {
    avatar = 'none';
}

if (user.banner != null) {
    banner = `https://cdn.discordapp.com/banners/${id}/${user.banner}`;
} else {
    banner = 'none';
}

if (user.banner_color != null) {
    bannerColor = user.banner_color;
} else {
    bannerColor = 'none';
}

// Result
let data = [
    `ID: ${user.id}`,
    `User: ${user.username}#${user.discriminator}`,
    `Discord Employee: ${badge_Discord_Employee}`,
    `Partnered Server Owner: ${badge_Partnered_Server_Owner}`,
    `Hypesquad Event: ${badge_HypeSquad_Events}`,
    `Bug Hunter Level 1: ${badge_Bug_Hunter_Level_1}`,
    `House Bravery: ${badge_House_Bravery}`,
    `House Brillance: ${badge_House_Brilliance}`,
    `House Balance: ${badge_House_Balance}`,
    `Early Supporter: ${badge_Early_Supporter}`,
    `Bug Hunter Level 2: ${badge_Bug_Hunter_Level_2}`,
    `Early Verified Bot Developer: ${badge_Early_Verified_Bot_Developer}`,
    `Avatar: ${avatar}`,
    `Banner: ${banner}`,
    `Banner color: ${bannerColor}`
];

// Write the array in a text file
let writeStream = fs.createWriteStream('./users.txt');
let pathName = writeStream.path;

// write each value of the array on the file breaking line
data.forEach(value => writeStream.write(`${value}\n`));

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
    console.log(`Successfully wrote to file: ${pathName}`);
 });
 
 // handle the errors on the write process
 writeStream.on('error', (err) => {
     console.error(`There was an error writing in the file ${pathName} => ${err}`)
 });
 
 // close the stream
 writeStream.end();