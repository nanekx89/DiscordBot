const { RichEmbed } = require("discord.js")
const { prefix } = require(__dirname + "/../config/config.js")

module.exports = {
  name: "embed",
  description: "Sends embed.",

  run(msg, args) {
    const { content } = msg

    const splittedMessage = content
      .slice(prefix.length)
      .trim()
      .split("|")

    const title = splittedMessage[0].trim()
    const description = splittedMessage[1].trim()

    // console.log("title:", title)
    // console.log("description:", description)
    // console.log(splittedMessage)

    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(title)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(description)

    // channel.send(embed)
  },
}
