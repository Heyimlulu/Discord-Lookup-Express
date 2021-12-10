import axios from 'axios'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors()); // Will make the server to receive requests

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { // Server will listen on this port
    console.log(`Server running at port ${PORT}`);
});

const badgesList = [
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

async function getUser (id) {
    // API call
    const response = await axios.get(`https://discord.com/api/v9/users/${id}`, {
        headers: {
            Authorization: `Bot ${process.env.TOKEN}`
        }
    });

    return response.data;
}

async function getData (data) {
    // Destructuring fetched datas
    const {id, username, avatar, banner, banner_color, public_flags, discriminator, bot} = data;

    // Avatar URL
    let avatarURL;
    if (avatar) avatarURL = `https://cdn.discordapp.com/avatars/${id}/${avatar}`;

    // Banner URL
    let bannerURL;
    if (banner) bannerURL = `https://cdn.discordapp.com/banners/${id}/${banner}`;

    // Badges
    let badges = [];

    for (let i = 0; i < badgesList.length; i++) {
        if ((public_flags & badgesList[i][1]) == badgesList[i][1]) {
            badges.push(badgesList[i][0]);
        }
    }

    // IF => Is Bot and doesn't have the verified badge, then add the default Bot badge
    if (!badges.includes('Verified_Bot') && bot) badges.push('Bot');

    // Converts a snowflake ID into a JavaScript Date object using the Discord's epoch (in ms)
    const timestamp = ((id / 4194304) + 1420070400000);

    // Date format
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    let array = {
        "id": parseInt(id),
        "username": `${username}#${discriminator}`,
        "avatar": avatarURL,
        "banner": bannerURL,
        "bannerColor": banner_color,
        "badges": badges,
        "timestamp": Math.round(new Date(timestamp).getTime() / 1000),
        "creationDate": new Date(timestamp).toUTCString()
    }

    return array;
}

// Will make the server to respond with the query inserted with the request
app.get('/user', async (req, res) => {
    try {
        let userID = req.query.id;

        const data = await getUser(userID);
        const array = await getData(data);

        res.json(array);
    } catch {
        const error = new Error("User not found");
        return res.status(404).json({
            message: error.message
        })
    }
});
