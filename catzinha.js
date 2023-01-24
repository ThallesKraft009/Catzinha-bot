const { AoiClient, LoadCommands } = require("aoi.js");
const { bot } = require("./config.js");
require("./slash.js");

const Catzinha = new AoiClient({
token: bot.token,
prefix: [bot.prefixo],
intents: ["MessageContent", "Guilds", "GuildMessages"]
})

Catzinha.onMessage()
Catzinha.onInteractionCreate()
const loader = new LoadCommands(Catzinha)
loader.load(Catzinha.cmd, "./Comandos/")

Catzinha.variables({
  "variavel_1": "valor_da_variavel"
})