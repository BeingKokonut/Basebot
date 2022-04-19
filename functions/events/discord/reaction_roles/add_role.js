const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN})

if(context.params.event.channel_id == 947509762042495006)
{
  if (context.params.event.emoji.name == "📢")
{
  await lib.discord.guilds['@0.2.3'].members.roles.update
  ({
    role_id: `944692049276436500`,
    user_id: `${context.params.event.member.user_id}`,
    guild_id: `${context.params.event.guild_id}`
  });
}
}