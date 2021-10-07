import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();
import fs from 'fs'
const badges = Object.assign(JSON.parse(fs.readFileSync('./models/badges.json', 'utf8')));

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

// Banner color
let bannerColor;
if (data.banner_color != null) array.push(`Banner color: ${data.banner_color}`);

// Badges
for (let i = 0; i < badges.length; i++) {
    if ((flags & badges[i][1]) == badges[i][1]){
        array.push(badges[i][0].replace('_', ' '));
    }
}
