module.exports = async(commands) => {

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

  const { bot } = require("../config.js")

const rest = new REST({ version: '10' }).setToken(bot.token);
  

        try {
            await rest.put(
                Routes.applicationCommands(bot.id),
                { body: commands },
            );
        } catch (error) {
            console.error(error);
        }
}