const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Set the time to 10AM
const targetTime = new Date();
targetTime.setHours(10);
targetTime.setMinutes(0);
targetTime.setSeconds(0);

// Start an interval to check the time every minute
setInterval(() => {
  const currentTime = new Date();
  // Check if it's 10AM
  if (currentTime.getHours() === targetTime.getHours() && currentTime.getMinutes() === targetTime.getMinutes()) {
    // Get the channel where the message will be sent
    const channel = client.channels.cache.get('channel_id_here');
    // Send the message
    channel.send('Hello Landonia!!');
  }
}, 60000); // 1 minute interval

// Login the bot using your bot token
client.login('your_bot_token_here');
