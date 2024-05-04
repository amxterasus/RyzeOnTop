const {
  Client,
  GatewayIntentBits,
  Collection,
  Partials,
} = require("discord.js");

const config = require("./config.json")

const { loadEvents } = require("./functions/handlers/eventsHandler.js");
const { loadCommands } = require("./functions/handlers/commandsHandler.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildScheduledEvents,
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.User,
  ],
});

client.commands = new Collection();
client.events = new Collection();

client.login(config.token).then(async () => {
  await loadEvents(client);
  await loadCommands(client);
});
