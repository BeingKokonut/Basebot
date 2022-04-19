const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
//Bot responds to hi as Hi, hello as Hello, etc.
const greetingsMatch = /\b(?:hi|hey|hello|hai|heyo)\b/i;
if (context.params.event.content.match(greetingsMatch))
{
  let messageContent = context.params.event.content.match(greetingsMatch);
  
  await lib.discord.channels['@0.2.3'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `${messageContent[0]}`,
    message_reference: {
      message_id: context.params.event.id
    }
  });
  }

//Bot responds to ping
if (message.mentions.users.has(client.user.id) == true)
{
  
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `get pinged for literally pinging me u nub`,
    message_reference: {
      message_id: context.params.event.id
}
});
}