const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `951826407883948093`,
  "content": `Hey <@!${context.params.event.user.id}>, welcome to the server! Read the <#944695368539574282> and you're set!`,
  "tts": false,
  "allowed_mentions": {
    "replied_user": false,
    "parse": [
      "users"
    ]
  }
});

//Discord - guild.member.add