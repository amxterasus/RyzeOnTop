const {
  SlashCommandBuilder,
  PermissionsBitField,
  ChannelType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("delete_channels")
    .setDescription("🕸️ Elimina todos los canales del servidor."),

  async execute(interaction) {
    if (
      !interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    ) {
      await interaction.reply("No tienes permiso para usar este comando.");
      return;
    }

    const channels = interaction.guild.channels.cache;
    for (const [_, channel] of channels) {
      await channel.delete();
    }

    const RyzeOnTopChnl = await interaction.guild.channels.create({
      name: "Ryze on Top 🕸️",
      type: ChannelType.GuildText,
    });

    await RyzeOnTopChnl.send("Ryze On Top 🕸️");
  },
};
