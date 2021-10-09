import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();
import fs from 'fs'

const badges = [
    ["Discord_Employee", 1 << 0],
    ["Partnered_Server_Owner", 1 << 1],
    ["HypeSquad_Events", 1 << 2],
    ["Bug_Hunter_Level_1", 1 << 3],
    ["House_Bravery", 1 << 6],
    ["House_Brilliance", 1 << 7],
    ["House_Balance", 1 << 8],
    ["Early_Supporter", 1 << 9],
    ["Team_User", 1 << 10],
    ["Bug_Hunter_Level_2", 1 << 14],
    ["Verified_Bot", 1 << 16],
    ["Early_Verified_Bot_Developer", 1 << 17],
    ["Discord_Certified_Moderator", 1 << 18]
]

const id = '265896171384340480';

// API call
const response = await axios.get(`https://discord.com/api/v9/users/${id}`, {
    headers: {
        Authorization: `Bot ${process.env.TOKEN}`
    }
})

const data = response.data;
const flags = response.data.public_flags;

let array = [];

// Avatar URL
let avatar;
if (data.avatar != null) array.push(`Avatar: https://cdn.discordapp.com/avatars/${id}/${data.avatar}`);

// Banner URL
let banner;
if (data.banner != null) array.push(`Banner: https://cdn.discordapp.com/banners/${id}/${data.banner}`);

// User ID, Username and Discriminator
array.push(`User ID: ${id}`, `Username: ${data.username}#${data.discriminator}`);

// Badges
let badge = [];
for (let i = 0; i < badges.length; i++) {
    if ((flags & badges[i][1]) == badges[i][1]){
        badge.push(badges[i][0].replace('_', ' '));
    }
}

// Push badges in current array
array.push(badge);

// Banner color
let bannerColor;
if (data.banner_color != null) array.push(`Banner Color: ${data.banner_color}`);

console.log(array);
