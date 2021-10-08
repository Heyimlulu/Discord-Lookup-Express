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
[
  'Avatar: https://cdn.discordapp.com/avatars/265896171384340480/a_3bcdf229b9e6a27deabc5a60e1dde3f2',
  'Banner: https://cdn.discordapp.com/banners/265896171384340480/a_0a7a2f5f0771903b97ac6f1971be6545',
  'User ID: 265896171384340480',
  'Username: Slimey#0667',
  [ 'House Bravery', 'Early Supporter' ],
  'Banner Color: #8f7cff'
]
```

# Aknowledgements

- [Discord](https://discord.com/developers/docs/intro) for their docs.
