const { WebhookClient } = require('discord.js');
const {webhookId, webhookToken} = require("../config.json"); //or use the URL directly

const sendComic = (data) => {
    const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });
    // const webhookClient = new WebhookClient({ url:"USE COPIED URL FROM YOUR WEBHOOK" });

    webhookClient.send({
        content: data,
        username: 'Garthulu',
        avatarURL: 'https://i.redd.it/2lvxthisaen51.jpg',
    });
};

module.exports = {sendComic};