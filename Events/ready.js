module.exports = async(client, data) => {
    client.user.setActivity(`>help | Server : ${client.guilds.cache.size}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/pipodraw_"
      });
}