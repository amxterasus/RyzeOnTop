const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  owner: true,
  data: new SlashCommandBuilder()
    .setName("animated-avatar")
    .setDescription("Animated avatar for the bot")
    .addAttachmentOption((option) =>
      option
        .setName("avatar")
        .setDescription("Avatar to animate")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const { options } = interaction;
    const avatar = options.getAttachment("avatar");

    async function sendMessage(message) {
      const embed = new EmbedBuilder()
        .setColor("#80cee1")
        .setDescription(message);

      await interaction.reply({ embeds: [embed], ephemeral: true });
    }

    await client.user.setAvatar(avatar.url).catch(async (err) => {
      console.log(err);
      return await sendMessage(`Error : \`${err.toString()}\``);
    });
  },
};
