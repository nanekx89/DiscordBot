const { RichEmbed } = require("discord.js")

module.exports = {
  name: "setup",
  description: "Setup server statistics.",

  async run(msg, args) {
    const { channel, guild } = msg
    const { members } = guild

    // Guild available
    if (guild.available) {
      const categoryName = "Server stats"
      const categoryOptions = {
        type: "category",
      }
      // Create category
      const createdCategory = await guild.createChannel(
        categoryName,
        categoryOptions,
      )

      if (createdCategory) {
        // TODO: Save to config

        const onlineCount = members.filter(
          (m) => m.presence.status === "online",
        ).size
        const botCount = members.filter((m) => m.user.bot).size
        const usersJoinedAt = []

        for (const [id, member] of members) {
          usersJoinedAt.push(member.joinedTimestamp)
        }
        const newUser = Math.max(...usersJoinedAt)
        console.log(newUser)
        return

        const onlineMsg = "✅ Online: " + onlineCount + "/" + members.size
        const botMsg = "🤖 Bots: " + botCount
        const newUserMsg = "▼ New user ▼"
        const newUserElement = newUser

        const names = [onlineMsg, botMsg, newUserMsg, newUserElement]
        const channelOptions = {
          type: "voice",
          parent: createdCategory,
        }

        names.forEach(async (chanenlName) => {
          const createdChannel = await guild.createChannel(
            chanenlName,
            channelOptions,
          )

          if (createdChannel) {
            // TODO: Save to config
          }
        })

        msg.reply("setup successfully done!")
      }
    }
  },
}
