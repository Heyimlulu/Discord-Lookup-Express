# Discord Lookup

Lookup a Discord User or Bot ID

# Getting started

- Install Node.js on your computer
- Create an application in the [Discord Developer Portal](https://discord.com/developers/applications)
  - Go the bot section and create a new bot
  - Copy your bot token 
- Rename `.env-example` to `.env`
  - Replace `*` with your bot token

Now you can run the script with

```
npm start or node index.js
```

# Example output

```
{
  id: 265896171384340480,
  username: 'Slimey#0667',
  avatar: 'https://cdn.discordapp.com/avatars/265896171384340480/a_f33a32c8e44b8c0246e5433b8c0edb65',
  banner: 'https://cdn.discordapp.com/banners/265896171384340480/a_70de5d8e8c59a6ae588eca92fc0d58ff',
  bannerColor: '#8f7cff',
  badges: [ 'House_Bravery', 'Early_Supporter' ],
  timestamp: 1483464987370,
  creationDate: 'Tuesday, January 3, 2017, 6:36 PM'
}
```

# Badges

You can find all used Official Discord badges for this project in SVG files. (Discord Nitro, boosting server and partner badges are not available)
- Bot and Verified Bot badges may look different because they doesn't exist in the official Discord assets

# Aknowledgements

- [Discord](https://discord.com/developers/docs/resources/user#users-resource) for their docs and assets.
